

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const songName = $('.cd-name-song')
const singerName = $('.cd-singer')
const cdThumd = $('.cd-thumb')
const audioSrc = $('#audio')
const appContainer = $('.app__container')
const headerContainer = $('.header__container')
const userTabNav = $$('.user-nav__tab-items')
const userTabContents = $$('.user__tab')
const listSong = $('.list-song')
const listSongs = $$('.list-song')
const listSongScroll = $('.list-song__scroll')
const noneIcon = $$('.select-item__icons')
const songAnimateContainer = $('.song-animate-container')
const playerControl = $('.player-controls-bar')
const btnPlays = $$('.btn-toggle-play')
const playerFull = $('.player-full')
const playerFullClose = $('.header__icon-wrap.btn-down')
const bgAnimatePlay = $('.bg__image-animate')
const btnPrverse = $('.btn-prev')
const btnPrverses = $$('.btn-prev')
const btnNexts = $$('.btn-next') 
const btnNext = $('.btn-next') 
const btnRandom = $('.btn.btn-random')
const btnRandoms = $$('.btn.btn-random')
const btnRepeat = $('.btn-repeat')
const btnRepeats = $$('.btn-repeat')
const progressBar = $('.progress-timeline-are .progress-bar')
const progressBars = $$('.progress-timeline-are .progress-bar')
const timeProgressBar = $('.progress-timeline-are .progress-bar-line')
const timeProgressBars = $$('.progress-timeline-are .progress-bar-line')
const progressBarVolume = $('.progress-volume-are .progress-bar')
const progressBarVolumeLine = $('.progress-volume-are .progress-bar .progress-bar-line')
const btnVolume = $('.btn-volume')


const cdThumdPlayer = $('.song-card__card-side')
const songNamePlayer = $('.song-card__song-title')
const singerPlayer = $('.song-card__singer')
const iconPlaying = $('.icon--playing')







const app= {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Sài Gòn Đâu Có Lạnh Đâu',
            singer: 'Changg, LeWiuy',
            path: './assets/music/song14.mp3',
            image: './assets/img/song/song14.jpg'
        },
        {
            name: 'Khuê Mộc Lang',
            singer: 'Hương Ly, Jombie',
            path: './assets/music/song15.mp3',
            image: './assets/img/song/song15.jpg'
        },
        {
            name: 'Có Hẹn Với Thanh Xuân',
            singer: 'Monstar',
            path: './assets/music/song13.mp3',
            image: './assets/img/song/song13.jpg'
        },
        {
            name: 'The Phoenix',
            singer: 'Fall Out Boy',
            path: './assets/music/song12.mp3',
            image: './assets/img/song/song12.jpg'
        },
        {
            name: 'Cưới Thôi',
            singer: 'masew',
            path: './assets/music/song1.mp3',
            image: './assets/img/song/song1.jpg'
        },
        {
            name: 'Độ Tộc 2',
            singer: 'Masew x Pháo x Phúc Du ',
            path: './assets/music/song2.mp3',
            image: './assets/img/song/song2.jpg'
        },
        {
            name: 'Cứ Chill Thôi',
            singer: 'Chillies, Suni Hạ Linh',
            path: './assets/music/song3.mp3',
            image: './assets/img/song/song3.jpg'
        },
        {
            name: 'Muộn Rồi Mà Sao Còn',
            singer: 'Sơn Tùng M-TP',
            path: './assets/music/song6.mp3',
            image: './assets/img/song/song6.jpg'
        },
        {
            name: 'Rồi Tới Luôn',
            singer: 'Nal',
            path: './assets/music/song4.mp3',
            image: './assets/img/song/song4.jpg'
        },
        {
            name: 'Kẻ Theo Đuổi Sánh Sáng',
            singer: 'Huy Vạc',
            path: './assets/music/song7.mp3',
            image: './assets/img/song/song7.jpg'
        },
        {
            name: 'At My Worst',
            singer: 'Pink Sweat',
            path: './assets/music/song10.mp3',
            image: './assets/img/song/song10.jpg'
        },
        {
            name: 'Play Date',
            singer: 'Melanie Martinez',
            path: './assets/music/song11.mp3',
            image: './assets/img/song/song11.jpg'
        },
    ],
    bgImages: [
        {
            nameImg: 'img1',
            path: '../assets/img/bgAnimate/bganimate1.jpg'
        },
        {
            nameImg: 'img2',
            path: '../assets/img/bgAnimate/bganimate2.jpg'
        },
        {
            nameImg: 'img3',
            path: '../assets/img/bgAnimate/bganimate3.jpg'
        },
        {
            nameImg: 'img4',
            path: '../assets/img/bgAnimate/bganimate4.jpg'
        },
        {
            nameImg: 'img5',
            path: '../assets/img/bgAnimate/bganimate5.jpg'
        },
        {
            nameImg: 'img6',
            path: '../assets/img/bgAnimate/bganimate6.jpg'
        },
        {
            nameImg: 'img7',
            path: '../assets/img/bgAnimate/bganimate7.jpg'
        },
        {
            nameImg: 'img8',
            path: '../assets/img/bgAnimate/bganimate8.jpg'
        },
        
    ],

    render: function () {
        // hiển thị danh sách bài hát
        const songInfo = this.songs.map((song, index) => {
            return `
                <div class="list-song__select-item" data-index= "${index}">
                    <div class="select-item__left">
                        <div class="select-item__icons">
                            <i class="fas fa-music"></i>
                        </div>
                        <div class="select-item__song-thumb">
                            <div class="song-thumb__img"
                                style="background-image: url('${song.image}');">
                            </div>
                            <div class="song-thumb__hover">
                                <span class="song-thumb__icon-hover">
                                    <i class="fas fa-play"></i>
                                </span>
                            </div>
                        </div>
                        <div class="select-item__info">
                            <span class="song-title">${song.name}</span>
                            <a href="#" class="song-singer">${song.singer}</a>
                        </div>
                    </div>
                    <div class="select-item__center">
                        <span class="song-duration">00:00</span>
                    </div>
                    <div class="select-item__right">
                        <div class="select-item__action-wrap">
                            <div class="select-item__action-icon">
                                <button class="select-item__action-btn">
                                    <i class="fal fa-microphone-stand"></i>
                                </button>
                            </div>
                            <div class="select-item__action-icon">
                                <button class="select-item__action-btn btn-heart">
                                    <i class="fas fa-heart"></i>
                                </button>
                            </div>
                            <div class="select-item__action-icon">
                                <button class="select-item__action-btn btn-more">
                                    <i class="fal fa-ellipsis-h"></i>
                                </button>
                            </div>
                        </div>
        
                    </div>
                </div>
                `
        })
        // listSongScroll.innerHTML = songInfo.join('')
        for ( const listSong of listSongs) {
            listSong.innerHTML = songInfo.join('')
        }
        
        
        //hiển thị hình ảnh slide chạy trong tab user
        const songSlideAnimate = this.songs.map((song) => {
            return `
            <li class="song-animate-item">
                <div class="song-animate-img"
                    style="background-image: url('${song.image}');">
                </div>
            </li>`
        })
        songAnimateContainer.innerHTML = songSlideAnimate.join('')
        

    },

    animateShow: function () {

        const songSlide = $$('.song-animate-item')
        for(let i = 0; i < songSlide.length; i++) {
            if (i === 0) {
                songSlide[i].classList.add('first')
            } else if (i === 1) {
                songSlide[i].classList.add('second')
            } else {
                songSlide[i].classList.add('third')
            }
        }
        
        const slideAnimateItems = $$('.song-animate-item')
        
        var slideIndex = 1;
        function songAnimate() {
            const slideAnimateFirst = $('.song-animate-item.first');
            const slideAnimateSecond = $('.song-animate-item.second');
            const slideAnimateThird = slideAnimateItems[slideIndex === slideAnimateItems.length - 1 ? 0 : slideIndex + 1]

            slideAnimateFirst.classList.replace('first', 'third');
            slideAnimateSecond.classList.replace('second', 'first');
            slideAnimateThird.classList.replace('third', 'second');
            slideIndex++;
            if(slideIndex >= slideAnimateItems.length) {
                slideIndex = 0;
            }
            setTimeout(songAnimate, 3000)
        }  

        songAnimate();
        const bgAnimates = $$('.bg__image-animate li')
        var bgIndex = 1;
        function bgAnimate() {
            const bgAnimateExit = $('.bg__image-animate li.exit');
            const bgAnimateEnter = $('.bg__image-animate li.enter');
            const bgAnimateAdd = bgAnimates[bgIndex === bgAnimates.length - 1 ? 0 : bgIndex + 1]
            
            bgAnimateExit.classList.remove('exit')
            bgAnimateEnter.classList.replace('enter','exit')

            bgAnimateAdd.classList.add('enter')
            bgIndex++
            if(bgIndex >= bgAnimates.length) {
                bgIndex = 0
            }
            setTimeout(bgAnimate, 10000)
        }
        
        bgAnimate()
    },
    defineProperty: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },
    // hàm xử lý các event trên website
    handleEvent: function () {
        const _this = this
        // đổi màu header khi user scroll
        appContainer.onscroll = function() {
            const appScroll = Math.floor(appContainer.scrollTop)
            if (appScroll === 0) {
                headerContainer.style.backgroundColor = 'transparent';
            } else {
                headerContainer.style.backgroundColor = '#170f23';
            }
        }

        // xử lý mở tab khi người dùng click chuột vào thanh điều hướng trong tab user
        userTabNav.forEach((tab, index) => {
            const userTabContent = userTabContents[index]
            tab.onclick = function () {
                $('.user-nav__tab-items.isActive').classList.remove('isActive');
                $('.user__tab.isActive').classList.remove('isActive');

                this.classList.add('isActive');
                userTabContent.classList.add('isActive');
            }
        })

        // cd quay khi phát nhạc
        const cdThumdAnimate = cdThumd.animate([{transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumdAnimate.pause()

        // logo quay khi phát nhạc
        const logoThumdAnimate = $('.player-full__header-logo').animate([{transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        logoThumdAnimate.pause()

        // xử lý play/pause bài hát khi click vào nút play
        for (const btnPlay of btnPlays) {
            btnPlay.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }
        }

        // khi click vào nút next
        for (const btnNext of btnNexts) {
            btnNext.onclick = function() {
                if(_this.isRandom) {
                    _this.randomSong()
                } else {
                    _this.nextSong();
                }
                audio.play();
                _this.scrollActiveSong()

            }
        }

         // khi click vào nút prev
        for (const btnPrverse of btnPrverses ) {
            btnPrverse.onclick = function() {
                _this.prevSong();
                audio.play();
                _this.scrollActiveSong()
            }
        }
        
        // khi nhạc đang phát
        audio.onplay = function () {
            _this.isPlaying = true
            playerControl.classList.add('playing')
            cdThumdAnimate.play()
            logoThumdAnimate.play()
            bgAnimatePlay.classList.add('play')
            iconPlaying.classList.add('isplay')
        }
        // khi nhạc đang dừng
        audio.onpause = function () {
            _this.isPlaying = false
            playerControl.classList.remove('playing')
            cdThumdAnimate.pause()
            logoThumdAnimate.pause()
            bgAnimatePlay.classList.remove('play')
            iconPlaying.classList.remove('isplay')

        }
        // tự động chuyển bài
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else {
                btnNext.click()
            }
        }

        // khi click vào nút random 
        for(const btnRandom of btnRandoms) {
            btnRandom.onclick = function() {
                _this.isRandom = !_this.isRandom
                btnRandom.classList.toggle('active', _this.isRandom)
            }
        }
        // khi click vào nút repeat
        for(const btnRepeat of btnRepeats ) {
            btnRepeat.onclick = function() {
                _this.isRepeat = !_this.isRepeat
                btnRepeat.classList.toggle('active', _this.isRepeat)
            }
        }
        
        // xử lý thanh timeline
        audio.ontimeupdate = function() {
            if (audio.play) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                for (const timeProgressBar of timeProgressBars) {
                    timeProgressBar.style.width = progressPercent + '%'
                }
            }
            _this.loadCurrentTime()
            
        }
        // xử lý tua thời gian bài hát
        for (const progressBar of progressBars) {
            progressBar.onclick = function(e) {
                const seekTime = Math.floor((e.offsetX / progressBar.clientWidth) * audio.duration)
                audio.currentTime = seekTime
                audio.play()
            }
        }
        // xử lý âm thanh bài hát
        progressBarVolume.onclick = (e) => {
            const volumeChange = Math.floor((e.offsetX / progressBarVolume.clientWidth) * 100)
            progressBarVolumeLine.style.width = volumeChange + '%';
            audio.volume = progressBarVolumeLine.clientWidth / 100
        }

        // mute volume khi người dùng click vào volume icon
        btnVolume.onclick = () => {
            progressBarVolumeLine.style.width = 0 + '%';
            audio.volume = 0
        }

        // xử lý khi người dùng click vào bài hát
        for (const listSong of listSongs) {
            listSong.onclick = (e) => {
                const songNode = e.target.closest('.list-song__select-item:not(.active)')
                if (songNode || e.target.closest('.select-item__action-icon')) {
                    if (songNode) {
                        // _this.currentIndex = songNode.getAttribute('data-index')
                        _this.currentIndex = Number(songNode.dataset.index)
                        _this.loadCurrentSong()
                        audio.play()
                    }
                    if (e.target.closest('.select-item__action-icon')) {
                       
                    }
                }
            }
        }

        // xử lý modal theme
        const btnTheme = $('.btn-theme')
        const modalTheme = $('.modal-theme')
        const modalContainer = $('.modal__container')
        const modeClose = $('.modal__btn-close')
        btnTheme.onclick = () => {
            modalTheme.classList.add('open')
        }

        function closeModal() {
            modalTheme.classList.remove('open')
        }

        modeClose.onclick = () => {
            closeModal()
        }

        modalTheme.onclick = () => {
            closeModal()
        }

        modalContainer.onclick = (e) => {
            e.stopPropagation()
        }

        $('#player-Primary').onclick = function (e) {
            const playerLeftItem1 = e.target.closest('.cd-wrap')
            const playerLeftItem2 = e.target.closest('.cd-act')
            const playerBtnNode = e.target.closest('.player-controls__item .btn')
            const playerBtnRightNode = e.target.closest('.player-controls__right .player-controls__item')
            const playerTimelineNode = e.target.closest('.player-controls__item.progress-timeline-are')
            if (!playerLeftItem1 && !playerLeftItem2 && !playerBtnNode && !playerBtnRightNode &&!playerTimelineNode) {
                playerFull.classList.replace('close', 'open')
            }
        }

        playerFullClose.onclick = function() {
            playerFull.classList.replace('open', 'close')
        }

    },

    scrollActiveSong: function () {
        const activeSongs = $$('.list-song__select-item.active')
        const activeSong = $('.list-song__select-item.active')
        setTimeout(function() {
            for(const activeSong of activeSongs) {
                activeSong.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                })
            }
        }, 300)

        setTimeout(function() {
            $('.list-song__select-item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 300)
    }, 

    loadCurrentSong: function() {
        songName.textContent = this.currentSong.name
        songNamePlayer.textContent = this.currentSong.name
        singerName.textContent = this.currentSong.singer
        singerPlayer.textContent = this.currentSong.singer
        cdThumd.style.backgroundImage = `url(${this.currentSong.image})`
        cdThumdPlayer.style.backgroundImage = `url(${this.currentSong.image})`
        audioSrc.src = this.currentSong.path

        // load màu active khi bài hát được load
            const songActive = $('.list-song__select-item.active')
            
            //step 1: gỡ class active
            
            if (songActive) {
                songActive.classList.remove('active')
            }
            //step 2: add class active khi chuyển bài
            const songItems = $$('.list-song__select-item')
            songItems.forEach((song, index) => {
                if (index === app.currentIndex) {
                    song.classList.add('active')
                }
            })
        this.loadDurationTime()
    },

    loadCurrentTime: function () {
        const timeStarts = $$('.time-left')
        const currTime = audio.currentTime
        // tính thời gian
        // tính số phút
        let currMin = Math.floor(currTime / 60) 
        if (currMin < 10) {
            currMin = `0${currMin}`
        }
        // tính số giây
        let currSec = Math.floor(currTime % 60)
        if (currSec < 10) {
            currSec = `0${currSec}`
        }
        for(const timeStart of timeStarts) {
            timeStart.innerText = `${currMin}:${currSec}`
        }
       
    },


    loadDurationTime: () => {
        audio.oncanplay= () => {
            const timeEnds = $$('.time-right')
            const timeDuration = $$('.song-duration')
            const duraTime = audio.duration
            // tính thời gian
            // tính số phút
            let duraMin = Math.floor(duraTime / 60) 
            if (duraMin < 10) {
                duraMin = `0${duraMin}`
            }
            // tính số giây
            let duraSec = Math.floor(duraTime % 60)
            if (duraSec < 10) {
                duraSec = `0${duraSec}`
            }
            for (const timeEnd of timeEnds) {
                timeEnd.innerText = `${duraMin}:${duraSec}`
            }
        }
    },

    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong()
    },

    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length -1;
        }
        this.loadCurrentSong()
    },

    randomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random()* this.songs.length);
        } while(newIndex === this.currentIndex);
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    hideElement: function () {
        var j;
        playerFull.onmousemove = function(){
                clearTimeout(j);
                playerFull.classList.remove('isHide')
                j = setTimeout(hide, 5000)
        }
        function hide() {
            if ($('.player-full.open')) {
                playerFull.classList.add('isHide')
            }
        }
    },

    start: function () {
        this.render()
        this.animateShow()
        this.defineProperty()
        this.handleEvent()
        this.scrollActiveSong()
        this.loadCurrentSong()
        // this.loadCurrentTime()
        this.hideElement()
    }
}
app.start()

