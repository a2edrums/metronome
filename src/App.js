import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiMetronome } from 'react-icons/gi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useMetronome } from './hooks/useMetronome';
import MetronomeDisplay from './components/MetronomeDisplay';
import Controls from './components/Controls';
import Settings from './components/Settings';
import TempoPresets from './components/TempoPresets';
import logo from "./logo.png";

function App() {
  const {
    bpm,
    setBpm,
    isPlaying,
    currentBeat,
    timeSignature,
    setTimeSignature,
    volume,
    setVolume,
    soundType,
    setSoundType,
    toggle,
    stop
  } = useMetronome();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        toggle();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggle]);

  return (
    <div className="App" data-bs-theme="dark">
      <Container className="py-4">
        <Row>
          <Col lg={8} className="mx-auto">
            <h1 className="text-center text-white mb-4">
              <GiMetronome className="me-3" style={{ fontSize: '1.2em' }} />
              Metronome
            </h1>
            
            <MetronomeDisplay
              bpm={bpm}
              currentBeat={currentBeat}
              timeSignature={timeSignature}
              isPlaying={isPlaying}
            />
            
            <Controls
              bpm={bpm}
              setBpm={setBpm}
              isPlaying={isPlaying}
              toggle={toggle}
              stop={stop}
            />
            
            <div className="mt-4">
              <Settings
                timeSignature={timeSignature}
                setTimeSignature={setTimeSignature}
                volume={volume}
                setVolume={setVolume}
                soundType={soundType}
                setSoundType={setSoundType}
              />
            </div>
            
            <TempoPresets setBpm={setBpm} />
            
            <div className="text-center text-muted mt-4">
              <small>Press spacebar to play/pause</small>
            </div>
            <div className="text-center mt-4">
              <p className="mb-2">powered by:</p>
              <img alt="logo" src={logo} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;