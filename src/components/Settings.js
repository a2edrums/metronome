import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { SOUND_TYPES } from '../utils/audioUtils';

const Settings = ({ timeSignature, setTimeSignature, volume, setVolume, soundType, setSoundType }) => {
  return (
    <Card bg="dark" text="white" className="mb-4">
      <Card.Header>Settings</Card.Header>
      <Card.Body>
        <Row>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Time Signature</Form.Label>
              <Form.Select
                value={timeSignature}
                onChange={(e) => setTimeSignature(parseInt(e.target.value))}
                className="bg-dark text-white"
              >
                <option value={2}>2/4</option>
                <option value={3}>3/4</option>
                <option value={4}>4/4</option>
                <option value={5}>5/4</option>
                <option value={6}>6/8</option>
                <option value={7}>7/8</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Sound Type</Form.Label>
              <Form.Select
                value={soundType}
                onChange={(e) => setSoundType(e.target.value)}
                className="bg-dark text-white"
              >
                <option value={SOUND_TYPES.CLASSIC}>Classic</option>
                <option value={SOUND_TYPES.WOOD}>Wood Block</option>
                <option value={SOUND_TYPES.BEEP}>Beep</option>
                <option value={SOUND_TYPES.TICK}>Tick</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Volume: {Math.round(volume * 100)}%</Form.Label>
              <Form.Range
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                min="0"
                max="1"
                step="0.1"
              />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Settings;