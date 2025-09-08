let audioContext = null;

export const initAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioContext;
};

export const SOUND_TYPES = {
  CLASSIC: 'classic',
  WOOD: 'wood',
  BEEP: 'beep',
  TICK: 'tick'
};

export const playClick = (isAccent = false, volume = 0.5, soundType = SOUND_TYPES.CLASSIC) => {
  const ctx = initAudioContext();
  
  switch (soundType) {
    case SOUND_TYPES.WOOD:
      playWoodClick(ctx, isAccent, volume);
      break;
    case SOUND_TYPES.BEEP:
      playBeepClick(ctx, isAccent, volume);
      break;
    case SOUND_TYPES.TICK:
      playTickClick(ctx, isAccent, volume);
      break;
    default: // CLASSIC
      playClassicClick(ctx, isAccent, volume);
  }
};

const playClassicClick = (ctx, isAccent, volume) => {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.value = isAccent ? 800 : 400;
  oscillator.type = 'square';
  
  gainNode.gain.setValueAtTime(volume, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.1);
};

const playWoodClick = (ctx, isAccent, volume) => {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  
  oscillator.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.value = isAccent ? 200 : 150;
  oscillator.type = 'triangle';
  
  filter.type = 'lowpass';
  filter.frequency.value = 800;
  filter.Q.value = 5;
  
  gainNode.gain.setValueAtTime(volume * 1.2, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.2);
};

const playBeepClick = (ctx, isAccent, volume) => {
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  oscillator.frequency.value = isAccent ? 1200 : 800;
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(volume * 0.8, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
  
  oscillator.start(ctx.currentTime);
  oscillator.stop(ctx.currentTime + 0.15);
};

const playTickClick = (ctx, isAccent, volume) => {
  const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  
  for (let i = 0; i < output.length; i++) {
    output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.01));
  }
  
  const noiseSource = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gainNode = ctx.createGain();
  
  noiseSource.buffer = noiseBuffer;
  noiseSource.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);
  
  filter.type = 'highpass';
  filter.frequency.value = isAccent ? 3000 : 2000;
  filter.Q.value = 10;
  
  gainNode.gain.setValueAtTime(volume * 0.6, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
  
  noiseSource.start(ctx.currentTime);
  noiseSource.stop(ctx.currentTime + 0.05);
};