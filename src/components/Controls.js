import React, { useState } from 'react';
import { Button, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaPlay, FaPause, FaStop, FaMinus, FaPlus } from 'react-icons/fa';

const Controls = ({ bpm, setBpm, isPlaying, toggle, stop }) => {
  const [tapTimes, setTapTimes] = useState([]);

  const handleBpmChange = (newBpm) => {
    const clampedBpm = Math.max(30, Math.min(300, newBpm));
    setBpm(clampedBpm);
  };

  const handleTapTempo = () => {
    const now = Date.now();
    const newTapTimes = [...tapTimes, now].slice(-4);
    setTapTimes(newTapTimes);
    
    if (newTapTimes.length >= 2) {
      const intervals = newTapTimes.slice(1).map((time, i) => time - newTapTimes[i]);
      const avgInterval = intervals.reduce((a, b) => a + b) / intervals.length;
      const calculatedBpm = Math.round(60000 / avgInterval);
      handleBpmChange(calculatedBpm);
    }
  };

  return (
    <div>
      <Row className="mb-4">
        <Col className="d-flex justify-content-center gap-3">
          <Button
            variant={isPlaying ? "warning" : "success"}
            size="lg"
            onClick={toggle}
            style={{ minWidth: '100px' }}
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
            {isPlaying ? ' Pause' : ' Play'}
          </Button>
          <Button variant="danger" size="lg" onClick={stop}>
            <FaStop /> Stop
          </Button>
        </Col>
      </Row>
      
      <Row className="mb-3">
        <Col md={8} className="mx-auto">
          <InputGroup>
            <Button 
              variant="outline-secondary" 
              onClick={() => handleBpmChange(bpm - 1)}
            >
              <FaMinus />
            </Button>
            <Form.Control
              type="number"
              value={bpm}
              onChange={(e) => handleBpmChange(parseInt(e.target.value) || 120)}
              min="30"
              max="300"
              className="text-center"
            />
            <Button 
              variant="outline-secondary" 
              onClick={() => handleBpmChange(bpm + 1)}
            >
              <FaPlus />
            </Button>
          </InputGroup>
        </Col>
      </Row>
      
      <Row>
        <Col className="text-center">
          <Button variant="outline-info" onClick={handleTapTempo}>
            Tap Tempo
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Controls;