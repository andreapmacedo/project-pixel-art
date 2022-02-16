// aula 5.2 1h10min
// for(value of colorsPalette)
// {

// }
// let changeColor = document.querySelector('.black')
// changeColor.style.backgroundColor = 'black'

const colorsPalette = ['black', 'red', 'green', 'blue']

function createColorPalette() {
  const colorsPaletteList = document.querySelector('#color-palette');

  for (let index = 0; index < colorsPalette.length; index += 1) {
    const colors = colorsPalette[index];
    const colorListItem = document.createElement('div');

    if (colors === 'black') {
      colorListItem.className = "color" + " " + colors + " " + "selected"; // Atribui a classe color a cada item
    } else {
      colorListItem.className = "color" + " " + colors; // Atribui a classe color a cada item
    }
    colorListItem.style.backgroundColor = colors
    colorsPaletteList.appendChild(colorListItem);
  }
}

createColorPalette();

// Define as cores da palheta
// for (let i in colorsPalette) {
//   let item = document.querySelectorAll('.color')[i];
//   item.style.backgroundColor = colorsPalette[i];
// }





// Cria o quadro com os "pixels"
function createPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < 25; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = ('pixel')
    pixel.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixel);
  }

}
createPixelBoard();
//---------------------------------------------------------------//----------------------------

let selectedColor = 'white';
/*
function selectColor(box) {
  box.addEventListener('click', function (event) {
    // selectedColor = box.style.backgroundColor;
    console.log('color getted');
    console.log(selectedColor);

  });
};


let selectedPaletteBox = document.querySelectorAll('.color');
for(let i in selectedPaletteBox){
  let selectedBox = document.querySelectorAll('.color')[i];
  // selectedBox.addEventListener('click', function (event) {
  //   // selectedColor = box.style.backgroundColor;
  //   console.log('color getted');
  //   console.log(selectedColor);

  // });
  // selectColor(selectedBox);
}
*/
//---------------------------------------------------------------//----------------------------

let selectedColorBox = document.querySelectorAll('.color')[0];
/*
function teste() {
  // console.log('dfajkadsjfkasjdfkioajsdikof')
  selectedColor = selectedColorBox.style.backgroundColor;
  console.log('color getted');
  console.log(selectedColor);
}
window.onload = function () {

  let selectedPaletteItem = document.querySelector('.selected')
  // chamada para uma função externa
  // selectedPaletteItem.addEventListener('click', teste)
  // com função anônima
  // selectedPaletteItem.addEventListener('click', function(){
  //  });
}
*/
//---------------------------------------------------------------//----------------------------

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


//---------------------------------------------------------------//----------------------------

// function setTaskClass() {
//   let selectedColor = document.getElementsByClassName('black selected');
//   let myColor = document.querySelector('.black');
//   myColor.addEventListener('click', function (event) {
//     if (selectedColor.length === 0) {
//       event.target.className = 'color black selected';
//     } else {
//       event.target.className = 'color black';
//     }
//   });
// };

// setTaskClass();
//---------------------------------------------------------------//----------------------------
// function setRedClass() {
//   // let selectedTask = document.getElementsByClassName('color selected');
  
//   let selectedRed = document.getElementsByClassName('color red');
//   let myRed = document.querySelector('.color');

//   myRed.addEventListener('click', function (event) {
//     if (selectedRed.length === 0) {
//       event.target.className = 'color Red selected';
//     } else {
//       event.target.className = 'color';
//     }
//   });
// };

// setRedClass();


//---------------------------------------------------------------//----------------------------

// function getColor() {

//   selectedColorBox.addEventListener('click', function (event) {
//     selectedColor = selectedColorBox.style.backgroundColor;
//     console.log('color getted');
//     console.log(selectedColor);
//     console.log(selectedColor);

//   });
// };

// getColor();

function setColor() {
  // let selectedTask = document.getElementsByClassName('task selected');
  // let days = document.querySelector('#days');
  let selectedBox = document.querySelector('.pixel');
  // let taskColor = taskDiv.style.backgroundColor;

  selectedBox.addEventListener('click', function (event) {
    event.target.style.backgroundColor = selectedColor;
    console.log('color setted');
  });
};

setColor();
