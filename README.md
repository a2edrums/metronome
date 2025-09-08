# 🎵 Metronome

A fully-featured metronome web application built with React. Perfect for musicians, music students, and anyone needing precise timing practice.

## ✨ Features

- **Adjustable BPM**: 30-300 beats per minute with precise control
- **Multiple Time Signatures**: 2/4, 3/4, 4/4, 5/4, 6/8, 7/8 support
- **Visual Beat Indicators**: Clear visual feedback with accent highlighting
- **Four Sound Types**: Classic, Wood Block, Beep, and Tick sounds
- **Tap Tempo**: Calculate BPM by tapping rhythm
- **Volume Control**: Adjustable click volume
- **Tempo Presets**: Classical tempo markings (Largo, Allegro, etc.)
- **Keyboard Shortcuts**: Spacebar for play/pause
- **100% Offline**: No internet required, works completely offline
- **Settings Persistence**: Remembers your preferences
- **Dark Theme**: Easy on the eyes for extended practice sessions
- **Responsive Design**: Works on desktop, tablet, and mobile

## 🚀 Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Build for Production
```bash
npm run build
```

## 🎹 Usage

### Basic Controls
- **Play/Pause**: Click the play button or press spacebar
- **Stop**: Click stop to reset to beginning
- **BPM Adjustment**: Use +/- buttons or type directly
- **Tap Tempo**: Tap the "Tap Tempo" button to set BPM by rhythm

### Settings
- **Time Signature**: Choose from common time signatures
- **Sound Type**: Select between Classic, Wood Block, Beep, or Tick
- **Volume**: Adjust click volume with slider

### Tempo Presets
Quickly set common classical tempos:
- Largo (60 BPM)
- Adagio (76 BPM) 
- Andante (108 BPM)
- Moderato (120 BPM)
- Allegro (144 BPM)
- Presto (180 BPM)

## 🔧 Technical Details

### Built With
- **React 19** - UI framework
- **React Bootstrap** - UI components with dark theme
- **React Icons** - Professional icons
- **Web Audio API** - High-quality audio generation
- **Local Storage** - Settings persistence

### Audio Implementation
- Uses Web Audio API for precise timing and audio generation
- No external audio files required
- Four distinct sound types with different waveforms and characteristics
- Accent beats use different frequencies for clear downbeat indication

### Offline Capability
- Fully functional without internet connection
- All audio generated in-browser
- Settings stored locally
- Perfect for practice rooms without WiFi

## 📱 Browser Support

Works in all modern browsers that support:
- Web Audio API
- ES6+ JavaScript
- CSS Grid/Flexbox

## 🎯 Perfect For

- **Musicians**: Practice with steady tempo
- **Music Students**: Develop timing and rhythm skills
- **Teachers**: Classroom instruction tool
- **Composers**: Reference for tempo markings
- **Dancers**: Choreography and practice
- **Anyone**: Needing precise timing for any activity

## 🔄 Development

### Available Scripts

- `npm start` - Development server
- `npm test` - Run tests
- `npm run build` - Production build
- `npm run eject` - Eject from Create React App

### Project Structure
```
src/
├── components/          # React components
│   ├── MetronomeDisplay.js
│   ├── Controls.js
│   ├── Settings.js
│   └── TempoPresets.js
├── hooks/              # Custom React hooks
│   └── useMetronome.js
├── utils/              # Utility functions
│   └── audioUtils.js
└── App.js              # Main application
```

## 📄 License

This project is open source and available under the MIT License.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
