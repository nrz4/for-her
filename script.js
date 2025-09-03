class MusicPlayer {
    constructor() {
        this.audio = document.getElementById('audioPlayer');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.progressBar = document.querySelector('.progress-bar');
        this.progress = document.querySelector('.progress');
        this.currentTimeEl = document.querySelector('.current-time');
        this.totalTimeEl = document.querySelector('.total-time');
        this.volumeSlider = document.querySelector('.volume-slider');
        this.trackTitle = document.querySelector('.track-title');
        this.trackArtist = document.querySelector('.track-artist');
        this.albumCover = document.getElementById('albumCover');
        this.albumImage = document.getElementById('albumImage');
        this.backText = document.getElementById('backText');

        this.isPlaying = false;
        this.currentTrack = 0;
        
        // Ariana Grande tracks
        this.tracks = [
            {
                title: "7 rings",
                artist: "Ariana Grande",
                src: "songs/7 rings.mp3"
            },
            {
                title: "34+35",
                artist: "Ariana Grande",
                src: "songs/34+35.mp3"
            },
            {
                title: "34+35 Remix (feat. Doja Cat, Megan Thee Stallion)",
                artist: "Ariana Grande",
                src: "songs/34+35 Remix (feat. Doja Cat, Megan Thee Stallion) - Remix.mp3"
            },
            {
                title: "Baby I",
                artist: "Ariana Grande",
                src: "songs/Baby I.mp3"
            },
            {
                title: "Bad Decisions",
                artist: "Ariana Grande",
                src: "songs/Bad Decisions.mp3"
            },
            {
                title: "bad idea",
                artist: "Ariana Grande",
                src: "songs/bad idea.mp3"
            },
            {
                title: "Bad To You (with Normani & Nicki Minaj)",
                artist: "Ariana Grande",
                src: "songs/Bad To You (with Normani & Nicki Minaj).mp3"
            },
            {
                title: "Bang Bang",
                artist: "Ariana Grande",
                src: "songs/Bang Bang.mp3"
            },
            {
                title: "bloodline",
                artist: "Ariana Grande",
                src: "songs/bloodline.mp3"
            },
            {
                title: "break up with your girlfriend, i'm bored",
                artist: "Ariana Grande",
                src: "songs/break up with your girlfriend, i'm bored.mp3"
            },
            {
                title: "Break Your Heart Right Back",
                artist: "Ariana Grande",
                src: "songs/Break Your Heart Right Back.mp3"
            },
            {
                title: "Dangerous Woman",
                artist: "Ariana Grande",
                src: "songs/Dangerous Woman.mp3"
            },
            {
                title: "Get On Your Knees",
                artist: "Ariana Grande",
                src: "songs/Get On Your Knees.mp3"
            },
            {
                title: "God is a woman",
                artist: "Ariana Grande",
                src: "songs/God is a woman.mp3"
            },
            {
                title: "Greedy",
                artist: "Ariana Grande",
                src: "songs/Greedy.mp3"
            },
            {
                title: "Honeymoon Avenue",
                artist: "Ariana Grande",
                src: "songs/Honeymoon Avenue.mp3"
            },
            {
                title: "How I Look On You",
                artist: "Ariana Grande",
                src: "songs/How I Look On You.mp3"
            },
            {
                title: "in my head",
                artist: "Ariana Grande",
                src: "songs/in my head.mp3"
            },
            {
                title: "just like magic",
                artist: "Ariana Grande",
                src: "songs/just like magic.mp3"
            },
            {
                title: "Let Me Love You",
                artist: "Ariana Grande",
                src: "songs/Let Me Love You.mp3"
            },
            {
                title: "love language",
                artist: "Ariana Grande",
                src: "songs/love language.mp3"
            },
            {
                title: "make up",
                artist: "Ariana Grande",
                src: "songs/make up.mp3"
            },
            {
                title: "motive (with Doja Cat)",
                artist: "Ariana Grande",
                src: "songs/motive (with Doja Cat).mp3"
            },
            {
                title: "nasty",
                artist: "Ariana Grande",
                src: "songs/nasty.mp3"
            },
            {
                title: "Nobody (with Chaka Khan)",
                artist: "Ariana Grande",
                src: "songs/Nobody (with Chaka Khan).mp3"
            },
            {
                title: "obvious",
                artist: "Ariana Grande",
                src: "songs/obvious.mp3"
            },
            {
                title: "positions",
                artist: "Ariana Grande",
                src: "songs/positions.mp3"
            },
            {
                title: "R.E.M",
                artist: "Ariana Grande",
                src: "songs/R.E.M.mp3"
            },
            {
                title: "Rain On Me (with Ariana Grande)",
                artist: "Lady Gaga & Ariana Grande",
                src: "songs/Rain On Me (with Ariana Grande).mp3"
            },
            {
                title: "Right There",
                artist: "Ariana Grande",
                src: "songs/Right There.mp3"
            },
            {
                title: "safety net (feat. Ty Dolla $ign)",
                artist: "Ariana Grande",
                src: "songs/safety net (feat. Ty Dolla $ign).mp3"
            },
            {
                title: "shut up",
                artist: "Ariana Grande",
                src: "songs/shut up.mp3"
            },
            {
                title: "successful",
                artist: "Ariana Grande",
                src: "songs/successful.mp3"
            },
            {
                title: "sweetener",
                artist: "Ariana Grande",
                src: "songs/sweetener.mp3"
            },
            {
                title: "the boy is mine",
                artist: "Ariana Grande",
                src: "songs/the boy is mine.mp3"
            },
            {
                title: "the light is coming (feat. Nicki Minaj)",
                artist: "Ariana Grande",
                src: "songs/the light is coming (feat. Nicki Minaj).mp3"
            },
            {
                title: "Touch It",
                artist: "Ariana Grande",
                src: "songs/Touch It.mp3"
            },
            {
                title: "true story",
                artist: "Ariana Grande",
                src: "songs/true story.mp3"
            },
            {
                title: "west side",
                artist: "Ariana Grande",
                src: "songs/west side.mp3"
            },
            {
                title: "worst behavior",
                artist: "Ariana Grande",
                src: "songs/worst behavior.mp3"
            },
            {
                title: "yes, and?",
                artist: "Ariana Grande",
                src: "songs/yes, and?.mp3"
            },
            {
                title: "You Don't Know Me",
                artist: "Ariana Grande",
                src: "songs/You Don't Know Me.mp3"
            }
        ];

        this.init();
    }

    init() {
        this.loadTrack(this.currentTrack);
        this.bindEvents();
        this.setVolume(50);
    }

    bindEvents() {
        // Play/Pause button
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        
        // Previous/Next buttons
        this.prevBtn.addEventListener('click', () => this.previousTrack());
        this.nextBtn.addEventListener('click', () => this.nextTrack());
        
        // Progress bar click
        this.progressBar.addEventListener('click', (e) => this.setProgress(e));
        
        // Volume slider
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        
        // Audio events
        this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.nextTrack());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Album cover flip
        this.albumCover.addEventListener('click', () => this.flipAlbumCover());
    }

    loadTrack(trackIndex) {
        const track = this.tracks[trackIndex];
        this.audio.src = track.src;
        this.trackTitle.textContent = track.title;
        this.trackArtist.textContent = track.artist;
        this.updateAlbumCover(trackIndex);
        this.resetProgress();
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    play() {
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.playPauseBtn.textContent = '⏸';
        }).catch(error => {
            console.log('Playback failed:', error);
            // For demo purposes, we'll just update the UI
            this.isPlaying = true;
            this.playPauseBtn.textContent = '⏸';
        });
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.playPauseBtn.textContent = '▶';
    }

    previousTrack() {
        this.currentTrack = this.currentTrack > 0 ? this.currentTrack - 1 : this.tracks.length - 1;
        this.loadTrack(this.currentTrack);
        if (this.isPlaying) {
            this.play();
        }
    }

    nextTrack() {
        this.currentTrack = this.currentTrack < this.tracks.length - 1 ? this.currentTrack + 1 : 0;
        this.loadTrack(this.currentTrack);
        if (this.isPlaying) {
            this.play();
        }
    }

    setProgress(e) {
        const width = this.progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = this.audio.duration;
        
        if (duration) {
            this.audio.currentTime = (clickX / width) * duration;
        }
    }

    updateProgress() {
        const { duration, currentTime } = this.audio;
        
        if (duration) {
            const progressPercent = (currentTime / duration) * 100;
            this.progress.style.width = `${progressPercent}%`;
            
            this.currentTimeEl.textContent = this.formatTime(currentTime);
        }
    }

    updateDuration() {
        const duration = this.audio.duration;
        if (duration) {
            this.totalTimeEl.textContent = this.formatTime(duration);
        }
    }

    setVolume(volume) {
        this.audio.volume = volume / 100;
        this.volumeSlider.value = volume;
        
        // Update volume icon based on level
        const volumeIcon = document.querySelector('.volume-icon');
        if (volume == 0) {
            volumeIcon.textContent = '🔇';
        } else if (volume < 50) {
            volumeIcon.textContent = '🔉';
        } else {
            volumeIcon.textContent = '🔊';
        }
    }

    formatTime(time) {
        if (isNaN(time)) return '0:00';
        
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    resetProgress() {
        this.progress.style.width = '0%';
        this.currentTimeEl.textContent = '0:00';
        this.totalTimeEl.textContent = '0:00';
    }

    handleKeyboard(e) {
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                this.togglePlayPause();
                break;
            case 'ArrowLeft':
                this.audio.currentTime -= 10;
                break;
            case 'ArrowRight':
                this.audio.currentTime += 10;
                break;
            case 'ArrowUp':
                e.preventDefault();
                const currentVol = parseInt(this.volumeSlider.value);
                this.setVolume(Math.min(100, currentVol + 10));
                break;
            case 'ArrowDown':
                e.preventDefault();
                const currentVol2 = parseInt(this.volumeSlider.value);
                this.setVolume(Math.max(0, currentVol2 - 10));
                break;
        }
    }

    flipAlbumCover() {
        this.albumCover.classList.toggle('flipped');
    }

    updateAlbumCover(trackIndex) {
        // You can customize this to show different images for different tracks
        // For now, we'll keep the same image but you can extend this
        const track = this.tracks[trackIndex];
        
        // Reset flip state when changing tracks
        this.albumCover.classList.remove('flipped');
        
        // You can add logic here to change album image based on track
        // this.albumImage.src = `pics/${track.albumImage}`;
    }
}

// Initialize the music player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});