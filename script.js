const startGame = document.querySelector('.start-game');
const getHelp = document.querySelector('.get-help')
const helpInfo = document.querySelector('.help-info');
const overlay =  document.querySelector('.overlay');
const times = document.querySelector('.times')
const overlayFunction = function () {
    helpInfo.classList.add('hidden')
    overlay.classList.add('hidden')
}

startGame.addEventListener('click' , function () {
    window.location.href = "game.html";
})
getHelp.addEventListener('click' , function () {
    helpInfo.classList.remove('hidden')
    overlay.classList.remove('hidden')
})
times.addEventListener('click' , function () {
    overlayFunction();
})
overlay.addEventListener('click' , function () {
    overlayFunction();
})

