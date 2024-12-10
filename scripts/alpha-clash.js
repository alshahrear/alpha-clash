// function play(){
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');

//     const playGroundScreen = document.getElementById('play-ground');
//     playGroundScreen.classList.remove('hidden');
// }
function handleKeyBoardButtonPress(event){
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        const currentScoreElement = document.getElementById('current-score');
        const currentElementText = currentScoreElement.innerText;
        const currentScore = parseInt(currentElementText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed. You lost a life');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;
        currentLifeElement.innerText = newLife;
    }
}
document.addEventListener('keyup', handleKeyBoardButtonPress);

function continueGame(){
    const alphabet = getRandomAlphabet();
    // console.log(alphabet);

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen')
    showElementById('play-ground')
    continueGame()
}