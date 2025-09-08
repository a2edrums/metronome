import React from 'react';
import { Card } from 'react-bootstrap';

const MetronomeDisplay = ({ bpm, currentBeat, timeSignature, isPlaying }) => {
  const beatIndicators = Array.from({ length: timeSignature }, (_, i) => (
    <div
      key={i}
      className={`beat-indicator ${i === currentBeat && isPlaying ? 'active' : ''} ${i === 0 ? 'accent' : ''}`}
      style={{
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: i === currentBeat && isPlaying 
          ? (i === 0 ? '#ffc107' : '#28a745') 
          : '#6c757d',
        margin: '0 5px',
        transition: 'background-color 0.1s'
      }}
    />
  ));

  return (
    <Card className="text-center mb-4" bg="dark" text="white">
      <Card.Body>
        <div className="display-1 mb-3" style={{ fontSize: '4rem', fontWeight: 'bold' }}>
          {bpm}
        </div>
        <div className="h5 mb-3">BPM</div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          {beatIndicators}
        </div>
        <div className="text-muted">
          {timeSignature}/4 Time
        </div>
      </Card.Body>
    </Card>
  );
};

export default MetronomeDisplay;