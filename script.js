// aula 5.2 1h10min




const colorsPalette = ['black', 'red', 'green', 'blue']
const colorsPaletteList = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');

const buttonContainer = document.querySelector('.control-container');


const inputText = document.getElementById('board-size');



function createColorPalette() {

  for (let index = 0; index < colorsPalette.length; index += 1) {
    const colors = colorsPalette[index];
    const colorListItem = document.createElement('div');

    if (colors === 'black') {
      colorListItem.className = "color" + " " + colors + " " + "selected"; // Atribui a classe color e selected ao primeiro item
    } else {
      colorListItem.className = "color" + " " + colors; // Atribui a classe color a cada item
    }
    colorListItem.style.backgroundColor = colors
    colorsPaletteList.appendChild(colorListItem);
  }
}

createColorPalette();
//---------------------------------------------//---------------------------------------------

// Cria o quadro com os "pixels"
function createPixelBoard(lines = 5) {
  for (let i = 0; i < lines; i += 1) {
    let line = document.createElement('section');
    board.appendChild(line);
    for (let j = 0; j < lines; j++) {
      let pixel = document.createElement('div');
      pixel.className = ('pixel')
      pixel.addEventListener('click', fillColorPixel);
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
      console.log(j)
    }
  }
}


//   for (let i = 0; i < i; i += 1) {
//       for (let j = 0; j < lines; j++){
//         let pixel = document.createElement('div');
//         pixel.className = ('pixel')
//         pixel.addEventListener('click', fillColorPixel);
//         pixel.style.backgroundColor = 'white';
//         board.appendChild(pixel);
//       }
//   }



//old
// function createPixelBoard() {
//   for (let index = 0; index < 25; index += 1) {
//     let pixel = document.createElement('div');
//     pixel.className = ('pixel')
//     pixel.addEventListener('click', fillColorPixel);
//     pixel.style.backgroundColor = 'white';
//     board.appendChild(pixel);
//   }

// }
createPixelBoard();

//---------------------------------------------//---------------------------------------------


let selectedColor = 'white';
const blackColor = document.querySelector('.black');
const redColor = document.querySelector('.red');
const greenColor = document.querySelector('.green');
const blueColor = document.querySelector('.blue');

function handleChangeTech(event) {
  const techElement = document.querySelector('.selected');
  techElement.classList.remove('selected');
  event.target.classList.add('selected');
  selectedColor = event.target.style.backgroundColor;
  // console.log(selectedColor)
}

blackColor.addEventListener('click', handleChangeTech);
redColor.addEventListener('click', handleChangeTech);
greenColor.addEventListener('click', handleChangeTech);
blueColor.addEventListener('click', handleChangeTech);


//---------------------------------------------//---------------------------------------------

// O Código abaixo foi desenvolvido por João Pster, Pessoa estudante na Trybe - turma 20 - tribo B
function fillColorPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedColor, null);
  const bgColor = cssObj.getPropertyValue('background-color');
  const e = event.target;
  e.style.backgroundColor = bgColor;
}


//-------------------------------------------------------------------------------------------
//| Desafio 9
//-------------------------------------------------------------------------------------------

function clearBoard() {
  const pixelsList = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsList.length; i += 1) {
    pixelsList[i].style.backgroundColor = 'rgba(255, 255, 255)';
  }
}

function validateBoard() {
  iValue = parseInt(inputText.value);
  if (iValue !== NaN) {
    if (iValue >= 5 && iValue <= 50) {
      return true;
    }
  }
  alert('Board inválido!');
  return false;
}

function generateBoard() {
  if (validateBoard()) {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
    createPixelBoard(inputText.value)
  }
}

function createClearButton(buttonName) {
  let buttonContainer = document.querySelector('.control-container');
  let newButton = document.createElement('button');
  let newButtonID = 'clear-board';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  newButton.addEventListener('click', clearBoard);
  buttonContainer.appendChild(newButton);
};

function createGeneratBoardButton(buttonName) {
  let buttonContainer = document.querySelector('.control-container');
  let newButton = document.createElement('button');
  let newButtonID = 'generate-board';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  newButton.addEventListener('click', generateBoard);
  buttonContainer.appendChild(newButton);
};
  createGeneratBoardButton('VQV');
  createClearButton('Limpar');


// Criação de botões genéricos
function createGenericButton(parent, id, text) {
  const newButton = document.createElement('button');
  newButton.innerText = text;
  newButton.id = id;
  parent.appendChild(newButton);
}

// const btnTest = createGenericButton(buttonContainer, 'test-is', 'test')


window.onload = function () {
  // btnTest.addEventListener('click', clearBoard);
}

//-------------------------------------------------------------------------------------------
//| Desafio 10
//-------------------------------------------------------------------------------------------
