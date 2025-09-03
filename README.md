# Simple Music Player

A clean, minimalist music player built with HTML, CSS, and JavaScript.

## Features

- ✨ Simple and elegant design
- ▶️ Play/Pause functionality
- ⏮️⏭️ Previous/Next track navigation
- 🔊 Volume control
- 📊 Progress bar with click-to-seek
- ⌨️ Keyboard shortcuts
- 📱 Mobile responsive

## How to Use

1. **Add Your Music Files:**
   - Place your audio files (MP3, WAV, OGG) in the same directory as the player files
   - Update the track information in `script.js` (see below)

2. **Configure Tracks:**
   Open `script.js` and modify the `tracks` array:
   ```javascript
   this.tracks = [
       {
           title: "Your Song Title",
           artist: "Artist Name",
           src: "your-audio-file.mp3"
       },
       {
           title: "Another Song",
           artist: "Another Artist", 
           src: "another-file.mp3"
       }
       // Add more tracks here
   ];
   ```

3. **Open the Player:**
   - Simply open `index.html` in your web browser
   - No server setup required!

## Keyboard Shortcuts

- **Spacebar**: Play/Pause
- **←/→ Arrow Keys**: Skip backward/forward 10 seconds
- **↑/↓ Arrow Keys**: Volume up/down

## Supported Audio Formats

- MP3 (.mp3)
- WAV (.wav)
- OGG (.ogg)
- WebM (.webm)

## File Structure

```
music-player/
├── index.html      # Main HTML file
├── style.css       # Styling
├── script.js       # Player functionality
├── README.md       # This file
└── your-audio-files.mp3  # Your music files
```

## Customization

### Colors
The player uses a gradient theme. To change colors, modify the CSS variables in `style.css`:
- Main gradient: `#667eea` to `#764ba2`
- Hover effects and buttons use the same gradient

### Adding More Features
The player is built with a modular structure, making it easy to add:
- Playlist functionality
- Shuffle/repeat modes
- Equalizer
- Theme switching

## Browser Compatibility

Works in all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## Demo Mode

The player includes demo functionality that works even without audio files. The UI will respond to all controls, making it perfect for testing the interface.

Enjoy your music! 🎵