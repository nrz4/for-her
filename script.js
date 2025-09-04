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
        this.albumClickedOnce = false;
        
        // Spotify tracks with personalized stories
        this.tracks = [
            {
                title: "Slow Motion (feat. Wizkid)",
                artist: "Don Toliver, Wizkid",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Slow Motion (feat. Wizkid).mp3",
                albumImage: "pics/pt1.jpg",
                story: "Grand Rising Tanya! You prolly like what the fuck is this. And honestly Idk what I'm really doing either. But all I know is that this is my grand way of asking you a question! But unfortunately you are going to have to wait till the end. Until we get there… I coded this project up for you because I just wanted to take you on a journey through some songs. Talk a little about them and create a beautiful story. I wanted to start with Slow Motion because it was the song that you put me on very very very early on. When we first met. I don't know if it was from a story or reel, but all I knew is that I loved this song because you did. Just like the flowers in the pic! It was also the very first set of flowers I gave you. Aka the start of everything. Hope you enjoy and onto the next song!!!"
            },
            {
                title: "Sometimes",
                artist: "Ariana Grande",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Sometimes.mp3",
                albumImage: "pics/pt2.jpg",
                story: "Oh Ariana Grande. You favorite artist! And one of my favorite songs. I remember when we went on a break, this is the song I blasted in my eardrums when I would be driving and at the gym. Throughout that whole break, you never left my mind (not even sometimes haha). I knew from that that you weren't some girl that I met, you were someone I saw forever with ever since that first date (which is what the pic is in case you forgot). Probably my favorite date I have ever been in. With those fuck ass gigantic ass big booty ass drinks. Everything was hectic but with you everything seemed so calm and amazing. Anyways, enjoy Arianna's angelic voice. Collect these moments. Create them as tattoos on your mind. And get ready for the next song!!!"
            },
            {
                title: "Loco",
                artist: "Neton Vega",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Loco.mp3",
                albumImage: "pics/pt3.JPG",
                story: "This song I was soooo shocked you knew and I didn't (cuz it was a latin song). I was like ain't no way this gorgeous ass Indian girl got some sazón (seasoning) in her. But very quickly I learned that you knew a bunch more and you were culturedddd. Period. I'm sorry if this isn't a cutesy story, but I do think that being able to connect w my Latin side is something very important and attractive to me. And despite your ethnicity, you were able to do just that. Another way you showed that was just bonding with my hometown friends even when everyone hispanic asf and hispanic music was playing at that y2k party. So kinda connected it with this pic 🤞🏽. Onto the next one!!!"
            },
            {
                title: "luther (with sza)",
                artist: "Kendrick Lamar, SZA",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/luther (with sza).mp3",
                albumImage: "pics/pt4.jpg",
                story: "You prolly thinking why tf is this mf Jonathan in this pic 🤣. Wait wait wait give me some time to explain. So Luther reminds me of that lil bonding moment we had when we were watching the Super Bowl at the same time. Even though I was watching it with Jonathan and you were watching at your hostess job with all those drunk white old dudes, I felt like you were right there with me. I KNOW THAT MAY OF SOUNDED WEIRD. But the way we were just talking about it with each other, debating on what the hell was going on, and you convincing me that it was actually historical was really cool to me. And rememorable asf. I miss those types of convos with you. I miss you. anyways hope you enjoy and hit them strictly with that fye. ONTO THE NEXT SONGGGG !!!!"
            },
            {
                title: "A Lonely Night",
                artist: "The Weeknd",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/A Lonely Night.mp3",
                albumImage: "pics/pt5.JPG",
                story: "This is like a two parter. so pt. 1! YOU PUT ME ON TO THESE TWO SONGSSS FRRRR. Idk if you remember but we were getting ready to sleep in your old dorm and this song popped up I was like wtffff this is good asf and I am a The Weeknd fan so I was shocked that I didn't know. Which is like another like damn this girl just keeps shocking me. Anyways, while we were getting ready to sleep you were taking care of my skin, telling me what to put on, taking some blackheads off, and just telling me random facts about skin. I would perhaps argue that this is my favorite interest that you have that attracts me to you. And while this song was playing, I really like how you were like if you like that then you'd like this… (pt.2 is next!!) (that last sentence made no sense, hope you can understand me lmfao)"
            },
            {
                title: "Love To Lay",
                artist: "The Weeknd",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Love To Lay.mp3",
                albumImage: "pics/pt6.jpg",
                story: "FIRE FIRE FIRE FIRE FIRE. RAHRAHESHEAH. LELELELLELE. SHE LOVE TO LAY FRRR. Same night, same moment as pt. 1. It was sooo gooood. (if ima be real idk if i switched these two songs but regardlesssss). It was a song that I took with me and I still listen to to this day. I miss these nights and I would do anything to go back to doing skin care alongside you. Anyways enjoy the rest of this song and onto the nextttttt !!!!"
            },
            {
                title: "Busy Woman",
                artist: "Sabrina Carpenter",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Busy Woman.mp3",
                albumImage: "pics/pt7.jpg",
                story: "OH HEYYYY. Another fact ! I love love love the fact that you are the busiest woman i know fr. Internship, school, RA, social relationships, family, you know how to balance it all. You are so strong and committed to the goals in your life that you will do everything that you can to get there and nothing stops you fr. This pic is from you eating lunch in your break from you j*b. And also this song reminds me of that tiktok you made with your FOX outfits!!! Wish I was still able to see that lawl. You were always fitted up and knew how to look presentable. yum. anyways enjoy this song and ONTO NEXT SONG!!!!!"
            },
            {
                title: "UP!",
                artist: "LoveRance, Iamsu!, Skipper",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/SpotiDown.App - UP_ _Beat The P_ssy UP_ _Street_ - LoveRance.mp3",
                albumImage: "pics/pt8.JPEG",
                story: "OSHITTTTT WE GETTING FREAKY IN THIS BIHHHHH. Nah jk but I think you know why I put this historical masterpiece in this playlist 🫣. It was the song for the pre. And the song that we always look at each other or text each other to let each other know that it is playing wherever it is playing lmfaoo. idk if that sentence made sense but regardless i just want you to know to beat that pussy up up up up up up. Anyways this pic is from a pre beating tf out of usman for some reason lmfaoo . enjoy!!! onto the next madame…"
            },
            {
                title: "NOKIA",
                artist: "Drake",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/NOKIA.mp3",
                albumImage: "pics/pt9.jpg",
                story: "i guess its pregame vibezzz cuz we playing all them bangers and this one is coming from DRIZZY DRAKEEE. WHEN THIS PLAYS I just look at you and sing every lyric that I know and even don't know by just saying random words and sounds. Cuz you was my babygorlll. Anyways it gives mad nostalgic vibes of when I used to visit you and winter cold times and when we would be cuddled up together. And ofc I had to put a picture with you in my drizzy drake sweatshirt. Also that ice cream was gas. Anyways ima @ you like bless me, hit the dance floor, get nasty, impress me (not me… yourself cuz you are an independent woman). anyways if you've skipped songs don't for this cuz it's a banger… anyways into the next !!!!"
            },
            {
                title: "Dark Thoughts",
                artist: "Lil Tecca",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Dark Thoughts.mp3",
                albumImage: "pics/pt10.jpg",
                story: "This song reminds me of this ONE SPECIFIC MOMENT WITH YOU. I was getting ready to meet w Johann and I was stressed asfff about getting to New Jersey on time cuz this dude was so late. But I remember exactly this… you were like calm down, go take a shower, get ready, and I will figure this transportation out for you. Oh my GAWDDDDDD. THAT WAS YOUR PLAN. YOU WANTED ME TO GET DOWN ON ONE KNEE RIGHT THEN AND THERE. anyways, I did exactly that. I took a shower, and I was belting out this song in the shower which made you and Taran laugh lol. I don't really like this pic of myself but it was the only one that kinda related to this moment cuz it was the FIFA volunteer thing. Anyways KNOW MY (girl) SO BAD so enjoy the rest of the song and see you on the next !!!"
            },
            {
                title: "Bailalo Rocky",
                artist: "Yoan Retro, Ariadne Arana, GMBeats Degranalo",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Bailalo Rocky.mp3",
                albumImage: "pics/pt11.JPEG",
                story: "So this song was a song I got put on during our break. I was blasting this before my Apple interview. Blasting this as my entrance song for my jiu jitsu match and realized that everything I was posting was purely so that you could see it. I quickly realized that I just wanted you to see me succeed. But even when it was looking like I was \"succeeding\", nothing meant much when I couldn't share that with you by my side. Anyways this a hype song so ima change up the tone rq. BÁILALO! Shake them dreads! and enjoy. Can't wait for the next! WHAT IS IT GOING TO BE ???!!!"
            },
            {
                title: "Turn Heads",
                artist: "Dem Franchize Boyz, Lloyd",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Turn Heads.mp3",
                albumImage: "pics/pt12.jpg",
                story: "OSHIT ITS YOUNG LLOYD AND DEM FRANCHIZE BOYS. WE FUCKING GETTING LITTTTT IN THIS PIMPED OUT CHEVROLEEETTT. I remember your post with this song bru. I WAS LIKE COME HERE RIGHT NOW BARK BARK BARK BARK BARK. Anyways, with a sexy song comes a sexy pic. So enjoy this night of us getting sexy and having a sexy time at the sexy dance floor in this sexy night. Enjoy this hype song. And get ready to slow it downnnn realll smoootthh."
            },
            {
                title: "I Can't Wait To Get There",
                artist: "The Weeknd",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/I Can't Wait To Get There.mp3",
                albumImage: "pics/pt13.jpg",
                story: "Im in space Tanya. Help me. Im floating. Drag me down. I can't wait to get there (back to earth #get it). Anyways, we both were like this song is actually mad good wtf. So I thought it was cute how we discovered a song together lawl. I'm pretty sure we discovered it the night we went to eat Ramen. Correct me if i'm wrong. But yea, I didn't realize The Weeknd, in a cool calm dark night, Asian street racing good vibes was in the mix type. It all blended together I guess. Anyways, I play this song at work all the time and I can't bother but to just think about this night with you. So just wanted you to know that I still think about you every single second regardless of where I'm at. Enjoy + next."
            },
            {
                title: "Darling, I (feat. Teezo Touchdown)",
                artist: "Tyler, the Creator, Teezo Touchdown",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/Darling, I (feat. Teezo Touchdown).mp3",
                albumImage: "pics/pt14.jpg",
                story: "TYLERRR NIGHTTT. You look like a model promoting tequila and earning them millions of dollars with this pic lmao. Anyways, I loved this night and sharing it with you. I had an amazing time sharing one of my favorite artists with you and us belting out every single lyric, screaming at every single album cover he was showing, and not giving a fuck about what the people around us was thinking lmfao. We prolly looked a lil crazy but we were in our own little bubble and it was just us vs. the whole world fr. Anyways FOREVER IS NOT TOO LONG, it is exactly pin point picture-perfect just right. Anyways ENJOY or not, I won't judge judy. NEXT SONGGGGG!!!!"
            },
            {
                title: "All I Can Say",
                artist: "Kali Uchis",
                src: "spotify-songs/SpotiDownloader.com - tanya (1)/All I Can Say.mp3",
                albumImage: "pics/pt15.JPG",
                story: "My favorite crash out SONGGG!!! Anyways while stalking your profile and seeing your gorgeous pretty little thang with this song. I was like fuckkkkk, pointed a gun to my jaw, Loaded up the gun, and realized that it's okay cuz I'm bound to see her again the day after your grad lol. Kali Uchis is right there next to Tyler in favorite artists. And this song shows exactly why, cuz she's an amazing singer and it reminds me of an amazing post on your insta. And finally, we reached the very end of this short playlist. As you saw, I just wanted to show you the different songs that remind me of you, the different times that connect me to those songs, and take you on a journey one more time. I am ready to love on you Tanya. and I'm ready to do it loud and proud. With nuclear bombs (fireworks) exploding all around us as Kali Uchis plays in the background (or in our heads). Anyways, before you ended things, I bought something. which comes from the question that I was going to ask in the very beginning of this playlist. And it's if you would like to go to the Kali Uchis concert with me on September 11th, 2025 @ 8:00PM. I wanted to surprise you with these but it didn't end up working. So, if you want to, I would like to at least not let these tickets go to waste and go with you. I know all you wanted is someone to love you hard and loud. And it is fair that it isn't much to ask. So, this is my attempt in doing that. I have more plans on what to do in person with you. But. Do to the circumstances right now, this is the only thing I could think of on doing for you right now. Creating a mini playlist and tell you all the reasons why you are amazing to me. Took me many days. And hours of debugging. Especially connecting to the fuck ass Spotify API. But after 1000+ lines of code later, it seems like it ended up working in the end. And I hope to GOD it is not buggy on your computer. Anyways. you have my number. Or if you deleted it it's (631)805-7596. Hope to hear from you soon. And if I don't then it is okay! I got my answer from that. Anyways, ALL I CAN SAY (get it) is I hope you enjoyed the journey I took you in. Have a good day/night/whenever I gain the courage to send this. You will forever be in my heart Tanya."
            }
        ];

        this.init();
    }

    init() {
        this.setupStartScreen();
        this.loadTrack(this.currentTrack);
        this.bindEvents();
        this.setVolume(50);
    }

    setupStartScreen() {
        const startButton = document.getElementById('startButton');
        const startScreen = document.getElementById('startScreen');
        const musicPlayer = document.getElementById('musicPlayer');

        startButton.addEventListener('click', () => {
            startScreen.style.display = 'none';
            musicPlayer.style.display = 'block';
        });
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
            volumeIcon.textContent = '🤍';
        } else if (volume < 50) {
            volumeIcon.textContent = '💕';
        } else {
            volumeIcon.textContent = '💗';
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
        
        // Hide the clickable hint after first click
        if (!this.albumClickedOnce) {
            const clickableHint = document.querySelector('.clickable-hint');
            if (clickableHint) {
                clickableHint.style.display = 'none';
            }
            this.albumClickedOnce = true;
        }
    }

    updateAlbumCover(trackIndex) {
        const track = this.tracks[trackIndex];
        
        // Reset flip state when changing tracks
        this.albumCover.classList.remove('flipped');
        
        // Update album image for current track
        this.albumImage.src = track.albumImage;
        
        // Update the back text with the story
        this.backText.innerHTML = track.story;
    }
}

// Initialize the music player when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});