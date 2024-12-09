// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGroundScreen = document.getElementById('play-ground');
//     playGroundScreen.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}