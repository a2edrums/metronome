import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const TempoPresets = ({ setBpm }) => {
  const presets = [
    { name: 'Largo', bpm: 60 },
    { name: 'Adagio', bpm: 76 },
    { name: 'Andante', bpm: 108 },
    { name: 'Moderato', bpm: 120 },
    { name: 'Allegro', bpm: 144 },
    { name: 'Presto', bpm: 180 }
  ];

  return (
    <Card bg="dark" text="white">
      <Card.Header>Tempo Presets</Card.Header>
      <Card.Body>
        <Row>
          {presets.map((preset, index) => (
            <Col xs={6} md={4} key={index} className="mb-2">
              <Button
                variant="outline-light"
                size="sm"
                className="w-100"
                onClick={() => setBpm(preset.bpm)}
              >
                {preset.name}<br />
                <small>{preset.bpm} BPM</small>
              </Button>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TempoPresets;