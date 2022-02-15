// function createMatrix() {
//   for (let i = 0; i < 5; i += 1) {
//     for (let j = 0; j < 5; j += 1) {
//     }
//   };
// };
// for(value of colorsPalette)
  // {

  // }



// createMatrix();
function createColorPalette() {
  const colorsPalette = ['black', 'red', 'green', 'blue']
  const colorsPaletteList = document.querySelector('#color-palette');

  for (let index = 0; index < colorsPalette.length; index += 1) {
    const colors = colorsPalette[index];
    const colorListItem = document.createElement('div');
  
    colorListItem.className = "color" + " " + colors; // Atribui a classe color a cada item
    // colorListItem.innerHTML = colors;

    colorsPaletteList.appendChild(colorListItem);
    
  }
}

createColorPalette();

let changeColor = document.querySelector('.black')
changeColor.style.backgroundColor = 'black'

function createPixelBoard() {
  
  const pixelBoard = document.querySelector('#pixel-board');
  
  for (let index = 0; index < 25; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = ('pixel')
    pixel.style.color = 'white';
    pixelBoard.appendChild(pixel);
  
  } 

}
  createPixelBoard();
  

