const colorsPalette = ['black', 'red', 'green', 'blue']
const colorsPaletteList = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');
const buttonContainer = document.querySelector('.control-container');
const inputText = document.getElementById('board-size');

//-- Cria a palheta de cores.
function createColorPalette() {
  for (let index = 0; index < colorsPalette.length; index += 1) {
    const colors = colorsPalette[index];
    const colorListItem = document.createElement('div');
    if (colors === 'black') {
      colorListItem.className = "color" + " " + colors + " " + "selected"; // Atribui a classe color e selected ao primeiro item
      colorListItem.style.backgroundColor = colors
    } else {
      colorListItem.className = "color" + " " + colors; // Atribui a classe color a cada item
      colorListItem.style.backgroundColor = 'rgb' + generateRGB();
    }
    colorsPaletteList.appendChild(colorListItem);
  }
}
createColorPalette();

//-- Cria o quadro com os pixels.
function createPixelBoard(lines) {
  for (let i = 0; i < lines; i += 1) {
    let line = document.createElement('div');
    line.style.width = '2500px'
    board.appendChild(line);
    for (let j = 0; j < lines; j++) {
      let pixel = document.createElement('div');
      pixel.className = ('pixel')
      pixel.addEventListener('click', fillColorPixel);
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}
createPixelBoard(5);

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

// O C??digo abaixo foi desenvolvido por Jo??o Pster, Pessoa estudante na Trybe - turma 20 - tribo B
function fillColorPixel(event) {
  const selectedColor = document.querySelector('.selected');
  const cssObj = window.getComputedStyle(selectedColor, null);
  const bgColor = cssObj.getPropertyValue('background-color');
  const e = event.target;
  e.style.backgroundColor = bgColor;
}
//-------------------------------------------------------------------------------------------
function clearBoard() {
  const pixelsList = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelsList.length; i += 1) {
    pixelsList[i].style.backgroundColor = 'rgba(255, 255, 255)';
  }
}

let iValue = 5;
function validateBoard() {
  iValue = parseInt(inputText.value);
  if(iValue > 0 ){
    if (iValue < 5) {
      iValue = 5;
    } else if (iValue > 50) {
      iValue = 50;
    }    
    return true;
  }
  alert('Board inv??lido!');
  return false;
}

function generateBoard() {
  if (validateBoard()) {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
    createPixelBoard(iValue)
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

// Cria????o de bot??es gen??ricos
function createGenericButton(parent, id, text) {
  const newButton = document.createElement('button');
  newButton.innerText = text;
  newButton.id = id;
  parent.appendChild(newButton);
}

function generateRGB() {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256) 
  return '(' + red + ', ' + green + ', ' + blue + ')';
}

// const btnTest = createGenericButton(buttonContainer, 'test-is', 'test')

window.onload = function () {
  // createColorPalette();
  // btnTest.addEventListener('click', clearBoard);
}

//-------------------------------------------------------------------------------------------
//| Desafio 10
//-------------------------------------------------------------------------------------------
