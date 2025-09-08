import { useState, useEffect, useRef, useCallback } from 'react';
import { playClick, SOUND_TYPES } from '../utils/audioUtils';

export const useMetronome = () => {
  const [bpm, setBpm] = useState(() => parseInt(localStorage.getItem('metronomeBpm')) || 120);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(0);
  const [timeSignature, setTimeSignature] = useState(() => parseInt(localStorage.getItem('metronomeTimeSignature')) || 4);
  const [volume, setVolume] = useState(() => parseFloat(localStorage.getItem('metronomeVolume')) || 0.5);
  const [soundType, setSoundType] = useState(() => localStorage.getItem('metronomeSoundType') || SOUND_TYPES.CLASSIC);
  
  const intervalRef = useRef(null);
  const beatCountRef = useRef(0);

  const interval = 60000 / bpm;

  const start = useCallback(() => {
    if (intervalRef.current) return;
    
    setIsPlaying(true);
    beatCountRef.current = 0;
    
    const tick = () => {
      const isAccent = beatCountRef.current % timeSignature === 0;
      playClick(isAccent, volume, soundType);
      setCurrentBeat(beatCountRef.current % timeSignature);
      beatCountRef.current++;
    };
    
    tick();
    intervalRef.current = setInterval(tick, interval);
  }, [timeSignature, volume, soundType, interval]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsPlaying(false);
    setCurrentBeat(0);
    beatCountRef.current = 0;
  }, []);

  const toggle = useCallback(() => {
    isPlaying ? stop() : start();
  }, [isPlaying, start, stop]);

  useEffect(() => {
    if (isPlaying) {
      stop();
      start();
    }
  }, [bpm, timeSignature, volume, soundType, isPlaying, stop, start]);

  useEffect(() => {
    localStorage.setItem('metronomeBpm', bpm.toString());
    localStorage.setItem('metronomeTimeSignature', timeSignature.toString());
    localStorage.setItem('metronomeVolume', volume.toString());
    localStorage.setItem('metronomeSoundType', soundType);
  }, [bpm, timeSignature, volume, soundType]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return {
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
    start,
    stop,
    toggle
  };
};