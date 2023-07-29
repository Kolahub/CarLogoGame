
const newGame = document.querySelector('.new-game');
const input = document.querySelector('.input');
const check = document.querySelector('.check');
const logo = document.querySelector('.logo');
const next = document.querySelector('.next');
const scoreValue = document.querySelector('.scoreValue');
const highScoreValue = document.querySelector('.highScoreValue');
const display = document.querySelector('.display');
const heartOne = document.querySelector('.heart--1');
const heartTwo = document.querySelector('.heart--2');
const heartThree = document.querySelector('.heart--3');

let numbersArray,
  result,
  step1,
  step2,
  randomIndex,
  random,
  carName,
  h,
  highScore,
  playing;
const init = function () {
  display.textContent = 'starting game...';
  display.style.color = 'rgba(251, 255, 1, 0.708)';
  scoreValue.textContent = 0;
  carName = '';
  random = '';
  score = 0;
  h = 1;
  logo.classList.add('hideLogo');
  heartOne.classList.remove('heart--1');
  heartTwo.classList.remove('heart--2');
  heartThree.classList.remove('heart--3');
  scoreValue.textContent = 0;
  playing = true;
  next.disabled = false;
  check.disabled = false;
  step1 = '';
  step2 = '';
  result = '';
  numbersArray = createArrayOfNumbers(1, 25);
};
init();
highScore = '';
function getRandomNumber(min, max) {
  step1 = max - min + 1;
  step2 = Math.random() * step1;
  result = Math.floor(step2) + min;
  return result;
}
function createArrayOfNumbers(start, end) {
  let myArray = [];
  for (let i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}
//numbersArray = createArrayOfNumbers(1,25);
next.addEventListener('click', () => {
  if (playing) {
    if (numbersArray.length == 0) {
      console.log('No More Random Numbers');
      if (score === 25) {
        document.getElementById('audio').play();
        display.textContent = 'YOU THE GAME';
        display.style.color = '#188738';
      } else if (score < 25) {
        display.textContent = "YOU TRIED 👏 ";
        document.getElementById('audioclap').play();
        display.style.color = 'gba(251, 255, 1, 0.708)';
      }
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highScoreValue').textContent = highScore;
      }
      return;
    }
    randomIndex = getRandomNumber(0, numbersArray.length - 1);
    random = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);
    logo.classList.remove('hideLogo');
    logo.src = `img/logo-${random}.png`;
    console.log(random);
    if (random === 1) {
      carName = 'bentley';
    } else if (random === 2) {
      carName = 'bmw';
    } else if (random === 3) {
      carName = 'ferrari';
    } else if (random === 4) {
      carName = 'ford';
    } else if (random === 5) {
      carName = 'honda';
    } else if (random === 6) {
      carName = 'lamborghini';
    } else if (random === 7) {
      carName = 'maserati';
    } else if (random === 8) {
      carName = 'porsche';
    } else if (random === 9) {
      carName = 'tesla';
    } else if (random === 10) {
      carName = 'toyota';
    } else if (random === 11) {
      carName = 'chevrolet';
    } else if (random === 12) {
      carName = 'buick';
    } else if (random === 13) {
      carName = 'cadillac';
    } else if (random === 14) {
      carName = 'chrysler';
    } else if (random === 15) {
      carName = 'lincoln';
    } else if (random === 16) {
      carName = 'lexus';
    } else if (random === 17) {
      carName = 'acura';
    } else if (random === 18) {
      carName = 'infiniti';
    } else if (random === 19) {
      carName = 'suzuki';
    } else if (random === 20) {
      carName = 'smart';
    } else if (random === 21) {
      carName = 'borgward';
    } else if (random === 22) {
      carName = 'aston martin';
    } else if (random === 23) {
      carName = 'changan';
    } else if (random === 24) {
      carName = 'hongqi';
    } else if (random === 25) {
      carName = 'nio';
    }
    next.disabled = true;
    check.disabled = false;
    console.log(carName);
  }
});

check.addEventListener('click', function () {
  if (playing) {
    next.disabled = false;
    check.disabled = true;

    guess = String(input.value).toLocaleLowerCase();
    input.value = '';
    if (!guess) {
      display.textContent = 'Wrong! No input.';
      return false;
    }
    if (guess === carName) {
      display.textContent = 'Correct';
      display.style.color = '#188738';
      document.getElementById('audioCorrect').play()
      score++;
      scoreValue.textContent = score;
    } else if (guess !== carName) {
      if (h === 1) {
        display.textContent = 'wrong';
        heartOne.classList.add(`heart--${h}`);
        display.style.color = '#a11b22';
        document.getElementById('audio2').play();
        h++;
      } else if (h === 2) {
        display.textContent = 'wrong';
        heartTwo.classList.add(`heart--${h}`);
        display.style.color = '#fc030f';
        document.getElementById('audio2').play();
        h++;
      } else if (h === 3) {
        display.textContent = 'You lost the game';
        heartThree.classList.add(`heart--${h}`);
        display.style.color = '#fc030f';
        document.getElementById('audio1').play();
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highScoreValue').textContent = highScore;
        } else {
          document.querySelector('.highScoreValue').textContent = highScore;
        }
        playing = false;
      }
    }
  }
});

newGame.addEventListener('click', init);
