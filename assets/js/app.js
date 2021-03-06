

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const search = document.querySelector('.header__search')
const searchInput = document.querySelector('.header__search-input')
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
    isBottomToggle: false,
    isNavigationAction: false,
    songs: [
        {
            name: 'S??i G??n ????u C?? L???nh ????u',
            singer: 'Changg, LeWiuy',
            path: './assets/music/song14.mp3',
            image: './assets/img/song/song14.jpg'
        },
        {
            name: 'Khu?? M???c Lang',
            singer: 'H????ng Ly, Jombie',
            path: './assets/music/song15.mp3',
            image: './assets/img/song/song15.jpg'
        },
        {
            name: 'C?? H???n V???i Thanh Xu??n',
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
            name: 'C?????i Th??i',
            singer: 'masew',
            path: './assets/music/song1.mp3',
            image: './assets/img/song/song1.jpg'
        },
        {
            name: '????? T???c 2',
            singer: 'Masew x Ph??o x Ph??c Du ',
            path: './assets/music/song2.mp3',
            image: './assets/img/song/song2.jpg'
        },
        {
            name: 'C??? Chill Th??i',
            singer: 'Chillies, Suni H??? Linh',
            path: './assets/music/song3.mp3',
            image: './assets/img/song/song3.jpg'
        },
        {
            name: 'Mu???n R???i M?? Sao C??n',
            singer: 'S??n T??ng M-TP',
            path: './assets/music/song6.mp3',
            image: './assets/img/song/song6.jpg'
        },
        {
            name: 'R???i T???i Lu??n',
            singer: 'Nal',
            path: './assets/music/song4.mp3',
            image: './assets/img/song/song4.jpg'
        },
        {
            name: 'K??? Theo ??u???i S??nh S??ng',
            singer: 'Huy V???c',
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
    

    render: function () {
        // hi???n th??? danh s??ch b??i h??t
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
        
        
        //hi???n th??? h??nh ???nh slide ch???y trong tab user
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
    // h??m x??? l?? c??c event tr??n website
    handleEvent: function () {

    // x??? l?? ng?????i d??ng m??? r???ng thanh navi
    const bottomBtnToggle = $('.bottom__btn-toggle')
    const bottomBtnOpen = $('.bottom__btn.btn-open')
    const bottomBtnClose = $('.bottom__btn.btn-close')
    const navigationAction = $('.navigation')


    bottomBtnToggle.onclick = function () {
        _this.isBottomToggle = !_this.isBottomToggle;
        bottomBtnToggle.classList.toggle('active', !_this.isBottomToggle)
        _this.isNavigationAction = !_this.isNavigationAction;
        navigationAction.classList.toggle('action', !_this.isNavigationAction)
    }


	// x??? l?? giao di???n khi ng?????i d??ng click v??o thanh t??m ki???m
        searchInput.onfocus = function() {
            Object.assign(search.style, {
                borderBottomRightRadius: "0rem",
                borderBottomLeftRadius: "0rem",
                backgroundColor: "#432275"
            })
        }

        searchInput.onblur = function() {
            Object.assign(search.style, {
                borderBottomRightRadius: "2rem",
                borderBottomLeftRadius: "2rem",
                backgroundColor: "hsla(0,0%,100%,.1)"
            })
        }

        const _this = this
        // ?????i m??u header khi user scroll
        appContainer.onscroll = function() {
            const appScroll = Math.floor(appContainer.scrollTop)
            if (appScroll === 0) {
                headerContainer.style.backgroundColor = 'transparent';
            } else {
                headerContainer.style.backgroundColor = '#170f23';
            }
        }

        // x??? l?? m??? tab khi ng?????i d??ng click chu???t v??o thanh ??i???u h?????ng trong tab user
        userTabNav.forEach((tab, index) => {
            const userTabContent = userTabContents[index]
            tab.onclick = function () {
                $('.user-nav__tab-items.isActive').classList.remove('isActive');
                $('.user__tab.isActive').classList.remove('isActive');

                this.classList.add('isActive');
                userTabContent.classList.add('isActive');
            }
        })

        // cd quay khi ph??t nh???c
        const cdThumdAnimate = cdThumd.animate([{transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumdAnimate.pause()

        // logo quay khi ph??t nh???c
        const logoThumdAnimate = $('.player-full__header-logo').animate([{transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        logoThumdAnimate.pause()

        // x??? l?? play/pause b??i h??t khi click v??o n??t play
        for (const btnPlay of btnPlays) {
            btnPlay.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }
        }

        // khi click v??o n??t next
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

         // khi click v??o n??t prev
        for (const btnPrverse of btnPrverses ) {
            btnPrverse.onclick = function() {
                _this.prevSong();
                audio.play();
                _this.scrollActiveSong()
            }
        }
        
        // khi nh???c ??ang ph??t
        audio.onplay = function () {
            _this.isPlaying = true
            playerControl.classList.add('playing')
            cdThumdAnimate.play()
            logoThumdAnimate.play()
            bgAnimatePlay.classList.add('play')
            iconPlaying.classList.add('isplay')
        }
        // khi nh???c ??ang d???ng
        audio.onpause = function () {
            _this.isPlaying = false
            playerControl.classList.remove('playing')
            cdThumdAnimate.pause()
            logoThumdAnimate.pause()
            bgAnimatePlay.classList.remove('play')
            iconPlaying.classList.remove('isplay')

        }
        // t??? ?????ng chuy???n b??i
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else {
                btnNext.click()
            }
        }

        // khi click v??o n??t random 
        for(const btnRandom of btnRandoms) {
            btnRandom.onclick = function() {
                _this.isRandom = !_this.isRandom
                btnRandom.classList.toggle('active', _this.isRandom)
            }
        }
        // khi click v??o n??t repeat
        for(const btnRepeat of btnRepeats ) {
            btnRepeat.onclick = function() {
                _this.isRepeat = !_this.isRepeat
                btnRepeat.classList.toggle('active', _this.isRepeat)
            }
        }
        
        // x??? l?? thanh timeline
        audio.ontimeupdate = function() {
            if (audio.play) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                for (const timeProgressBar of timeProgressBars) {
                    timeProgressBar.style.width = progressPercent + '%'
                }
            }
            _this.loadCurrentTime()
            
        }
        // x??? l?? tua th???i gian b??i h??t
        for (const progressBar of progressBars) {
            progressBar.onclick = function(e) {
                const seekTime = Math.floor((e.offsetX / progressBar.clientWidth) * audio.duration)
                audio.currentTime = seekTime
                audio.play()
            }
        }
        // x??? l?? ??m thanh b??i h??t
        progressBarVolume.onclick = (e) => {
            const volumeChange = Math.floor((e.offsetX / progressBarVolume.clientWidth) * 100)
            progressBarVolumeLine.style.width = volumeChange + '%';
            audio.volume = progressBarVolumeLine.clientWidth / 100
        }

        // mute volume khi ng?????i d??ng click v??o volume icon
        btnVolume.onclick = () => {
            progressBarVolumeLine.style.width = 0 + '%';
            audio.volume = 0
        }

        // x??? l?? khi ng?????i d??ng click v??o b??i h??t
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

        // x??? l?? modal theme
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

        // load m??u active khi b??i h??t ???????c load
            const songActive = $('.list-song__select-item.active')
            
            //step 1: g??? class active
            
            if (songActive) {
                songActive.classList.remove('active')
            }
            //step 2: add class active khi chuy???n b??i
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
        // t??nh th???i gian
        // t??nh s??? ph??t
        let currMin = Math.floor(currTime / 60) 
        if (currMin < 10) {
            currMin = `0${currMin}`
        }
        // t??nh s??? gi??y
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
            // t??nh th???i gian
            // t??nh s??? ph??t
            let duraMin = Math.floor(duraTime / 60) 
            if (duraMin < 10) {
                duraMin = `0${duraMin}`
            }
            // t??nh s??? gi??y
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

