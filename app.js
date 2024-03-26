const whiteKeys = [...document.querySelectorAll('path.white-keys')];
// console.log(whiteKeys);

const blackKeys = [...document.querySelectorAll('path.black-keys')];
// console.log(blackKeys);

// myFunction(par1, ...document.querySelectorAll('path.black-keys'), par3)

const keys = [...whiteKeys, ...blackKeys];
// console.log(keys);

let audio;

const playSound = (keyPlayingNow) => {
    if(audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio = new Audio(`./audio/key-${keyPlayingNow}.mp3`);
    audio.play();
};

// () => {}
keys.forEach((key, i) => {
    // console.log(key);
    // console.log(i);

    // data-*=""
    key.dataset.index = i+1;

    key.addEventListener('click', (e) => {
        // console.log(e);
        const specificKey = e.target.dataset.index;
        // console.log(specificKey);
        playSound(specificKey);
    });
});