let sidebar_btn = document.querySelector('.sidebar-btn')
let sidebar_icon = document.querySelector('.sidebar-btn i')
let sidebar = document.querySelector('aside')
let logo = document.querySelector('.logo')
let mini_logo = document.querySelector('.small-logo')
let music_menu_h3 = document.querySelectorAll('.music-menu h3')
let music_menu_li = document.querySelectorAll('.music-menu ul li')
let music_menu_p = document.querySelectorAll('.music-menu ul li a p')

sidebar_btn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar-hide')
    sidebar_icon.classList.toggle('toggle-sidebar-btn')
    logo.classList.toggle('hide-element')
    mini_logo.classList.toggle('show-element')
    music_menu_h3.forEach(h3 => h3.classList.toggle('hide-element'))
    music_menu_p.forEach(p => p.classList.toggle('hide-element'))
    music_menu_li.forEach(li => li.classList.toggle('menu-gap'))
})

let userMenuBtn = document.querySelector('.user-login-wrapper')
let userDropBtn = document.querySelector('.user-wrapper-dropdown')

userMenuBtn.addEventListener('click', function () {
    userDropBtn.classList.toggle('show-user-dropdown')
})

const songOption = document.querySelectorAll('.song-option')

songOption.forEach(Option => {
    Option.addEventListener('click', function () {
        document.querySelectorAll('.song-option-dropdown').forEach(dropdown => {
            if (dropdown !== this.querySelector('.song-option-dropdown')) {
                dropdown.classList.remove('show-song-option')
            }
        });
        const dropdown = this.querySelector('.song-option-dropdown')
        dropdown.classList.toggle('show-songs-option')
    })
})

let tab1 = document.querySelector('.tab1')
let tab2 = document.querySelector('.tab2')
let tab3 = document.querySelector('.tab3')
let songsWrapper1 = document.querySelector('.songs-wrapper1')
let songsWrapper2 = document.querySelector('.songs-wrapper2')
let songsWrapper3 = document.querySelector('.songs-wrapper3')

function setActiveTab(tab) {
    tab1.classList.remove('active-tab-list')
    tab2.classList.remove('active-tab-list')
    tab3.classList.remove('active-tab-list')

    tab1.classList.remove('active-song-list')
    tab2.classList.remove('active-song-list')
    tab3.classList.remove('active-song-list')

    tab.classList.add('active-tab-list')
    tab.classList.add('active-song-list')
}


tab1.addEventListener('click', () => {
    setActiveTab(tab1)
    songsWrapper1.style.display = 'flex'
    songsWrapper1.classList.add('show_songs')
    songsWrapper2.style.display = 'none'
    songsWrapper3.style.display = 'none'
})
tab2.addEventListener('click', () => {
    setActiveTab(tab2)
    songsWrapper1.style.display = 'none'
    songsWrapper2.style.display = 'flex'
    songsWrapper2.classList.add('show_songs')
    songsWrapper3.style.display = 'none'
})
tab3.addEventListener('click', () => {
    setActiveTab(tab3)
    songsWrapper1.style.display = 'none'
    songsWrapper3.style.display = 'flex'
    songsWrapper3.classList.add('show_songs')
    songsWrapper2.style.display = 'none'
})



let play_prev = document.querySelector('.music-option-prev')
let play_next = document.querySelector('.music-option-next')
let shuffle_mode = document.querySelector('.shuffle-mode')
let repeat_mode = document.querySelector('.repeat-mode')

play_next.addEventListener('click', () => {
    play_next.classList.toggle('music-play-btn-active')
});
play_prev.addEventListener('click', () => {
    play_prev.classList.toggle('music-play-btn-active')
});
shuffle_mode.addEventListener('click', () => {
    shuffle_mode.classList.toggle('music-play-btn-active')
});
repeat_mode.addEventListener('click', () => {
    repeat_mode.classList.toggle('music-play-btn-active')
});


let music_volume_img = document.querySelector('.music-volume img')
let volume_mute = 'assets/img/volume-mute.png';
let volume_on = 'assets/img/volume.svg';


music_volume_img.addEventListener('click', () => {
    audio.muted = !audio.muted;
    music_volume_img.src = audio.muted ? volume_mute : volume_on;
});




let musicBottomBtn = document.querySelector('.music-bottom-btn')
let queueDropdownBox = document.querySelector('.queue-dropdown-box')
let queueBtn = document.querySelector('.queue-btn')

musicBottomBtn.addEventListener('click', () => {
    queueDropdownBox.classList.add('show-queue-box')
})
queueBtn.addEventListener('click', () => {
    queueDropdownBox.classList.remove('show-queue-box')
})

let bottom_toggle_btn = document.querySelector('.bottom-container-btn')
let bottom_toggle_icon = document.querySelector('.bottom-container-btn i')
let bottom_container = document.querySelector('.bottom-container')

bottom_toggle_btn.addEventListener('click', () => {
    bottom_container.classList.toggle('show-bottom-box')
    bottom_toggle_icon.classList.toggle('icon-rotate')
})

let bar = document.querySelector('.bars')


bar.addEventListener('click', () => {
    sidebar.classList.toggle('show-aside')
})


/////////////////////////////////////////////////////////////////
const loader = document.querySelector('.loader');

window.addEventListener("load", () => {
    loader.style.display = "none";
});


let musicPlayer = [
    {
        id: 0,
        photo: 'assets/img/shadmehr-1.png',
        src: 'assets/audio/Shadmehr Aghili - Avaz Nemishi.mp3',
        title: 'Avaz Nemishi',
        artist: 'Shadmehr Aghili'
    },
    {
        id: 1,
        photo: 'assets/img/shervin-1.jpg',
        src: 'assets/audio/Shervin Hajiaghapour - Ta Key (320).mp3',
        title: 'Ta Key',
        artist: 'Shervin Hajiaghapour'
    },
    {
        id: 2,
        photo: 'assets/img/Ashvan-Gharibe.jpg',
        src: 'assets/audio/Ashvan - Gharibe (320).mp3',
        title: 'Gharibe',
        artist: 'Ashvan'
    },
    {
        id: 3,
        photo: 'assets/img/ebi-1.jpg',
        src: 'assets/audio/01 - Naazi Naaz Kon.mp3',
        title: 'Naazi Naaz Kon',
        artist: 'Ebi'
    },
    {
        id: 4,
        photo: 'assets/img/chavoshi-2.jpg',
        src: 'assets/audio/Mohsen Chavoshi - ZendanBan (320).mp3',
        title: 'ZendanBan',
        artist: 'Mohsen Chavoshi'
    },
    {
        id: 5,
        photo: 'assets/img/Erfan-Tahmasebi-Single-Songs.jpg',
        src: 'assets/audio/Erfan Tahmasbi - Hezaro Yek Shab (320).mp3',
        title: 'Hezaro Yek Shab',
        artist: 'Erfan Tahmasbi'
    },
    {
        id: 6,
        photo: 'assets/img/haamim.jpg',
        src: 'assets/audio/Haamim - Ay Setare (320).mp3',
        title: 'Ay Setare',
        artist: 'Haamim'
    },
    {
        id: 7,
        photo: 'assets/img/Sohrab-Pakzad.webp',
        src: 'assets/audio/Sohrab Pakzad - Khate Ghermez (320).mp3',
        title: 'Khate Ghermez',
        artist: 'Sohrab Pakzad'
    },
    {
        id: 8,
        photo: 'assets/img/ErfanTahmasbiDelgir.jpg',
        src: 'assets/audio/Erfan Tahmasbi - Delgir (320).mp3',
        title: 'Delgir',
        artist: 'Erfan Tahmasbi'
    },
    {
        id: 9,
        photo: 'assets/img/ebi-2.png',
        src: 'assets/audio/02 - Ki Ashkato Pak Mikononeh.mp3',
        title: 'Ki Ashkato Pak Mikononeh',
        artist: 'Ebi'
    },
    {
        id: 10,
        photo: 'assets/img/Mohsen-Chavoshi.jpg',
        src: 'assets/audio/Mohsen Chavoshi - Bad Az To (320).mp3',
        title: 'Bad Az To',
        artist: 'Mohsen Chavoshi'
    },
    {
        id: 11,
        photo: 'assets/img/shadmehhr-2.jpg',
        src: 'assets/audio/Daste-Man-Nist-[320].mp3',
        title: 'shadmehhr',
        artist: 'Daste Man Nist'
    },
    {
        id : 12 ,
        photo : 'assets/img/Ashvan-Gharghe-Gerye-1.jpg' ,
        src : 'assets/audio/Ashvan - Gharghe Gerye (320).mp3' ,
        title : 'Gharghe Gerye' ,
        artist : 'Ashvan'
    }
]

let currentSongIndex = 0;
const audio = new Audio();

const playBtn = document.querySelector(".play-button");

const nextBtn = document.querySelector(".music-option-next");
const prevBtn = document.querySelector(".music-option-prev");
const songPhoto = document.querySelector(".song-photo");
const songTittle = document.querySelector(".song-title");
const songArtist = document.querySelector(".song-artist");
const bottomSongTitle = document.querySelector('.music-box-text h2');
const bottomSongArtist = document.querySelector('.music-box-text p');


audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % musicPlayer.length;
    playSong(currentSongIndex);
});


function updateSongInfo(song) {
    songPhoto.src = song.photo;
    songTittle.textContent = song.title;
    songArtist.textContent = song.artist;

    bottomSongTitle.textContent = song.title;
    bottomSongArtist.textContent = song.artist;
}


function playSong(index) {
    const song = musicPlayer[index];
    audio.src = song.src;


     audio.addEventListener('loadedmetadata', () => {
        const durationMinutes = Math.floor(audio.duration / 60);
        const durationSeconds = Math.floor(audio.duration % 60).toString().padStart(2, "0");
        document.getElementById("duration").textContent = `${durationMinutes}:${durationSeconds}`;
    });

    audio.play().then(() => {
        playBtn.classList.add("music-play-btn-active");
    }).catch(error => {
        console.error('Play error:', error);
    });
    updateSongInfo(song);
}


playBtn.addEventListener("click", () => {
    if (!audio.src) {
        playSong(currentSongIndex);
    } else if (audio.paused) {
        audio.play().then(() => {
            playBtn.classList.add("music-play-btn-active");
        }).catch(error => {
            console.error('Play error:', error);
        });
    } else {
        audio.pause();
        playBtn.classList.remove("music-play-btn-active");
    }
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % musicPlayer.length;
    playSong(currentSongIndex);
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + musicPlayer.length) % musicPlayer.length;
    playSong(currentSongIndex);
});

const progressBar = document.querySelector(".progress-bar");
const progressContainer = document.querySelector('.music-play-line');

audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;

    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    const currentMinutes = Math.floor(audio.currentTime / 60);
    const currentSeconds = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    document.getElementById("current-time").textContent = `${currentMinutes}:${currentSeconds}`;
});

progressContainer.addEventListener('click', (e) => {
    if (!audio.duration) return;

    const clickX = e.offsetX;
    const width = progressContainer.clientWidth;
    audio.currentTime = (clickX / width) * audio.duration;
});


/////////////////////////////////////////////////////////////////

document.querySelectorAll('.songs-wrapper1 .song-col').forEach((col, index) => {
  col.addEventListener('click', () => {
    currentSongIndex = index;
    playSong(currentSongIndex);
    highlightCurrentSong();
  });
});

function highlightCurrentSong() {
    document.querySelectorAll('.songs-wrapper1 .song-col').forEach((col, idx) => {
        if (idx === currentSongIndex) {
            col.classList.add('active-song'); 
        } else {
            col.classList.remove('active-song');
        }
    });
}






