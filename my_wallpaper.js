//your parameter variables go here!
let flowerSize = 50;
let flowerPetalColor = '#FFA500'; 
let flowerCenterColor = '#FFFFFF'; 
let stemColor = '#008000';


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background('#FFFACD'); 

}

function my_symbol() {
  drawFlower(40, 70 , flowerSize);
  drawFlower(100, 100 , flowerSize);
  drawFlower(160, 70 , flowerSize)
  
}

// drawFlower(100, 100 , flowerSize);

function drawFlower(x, y, size) {

  let petalColor = flowerPetalColor;
  
  let petalSize = size / 2;
  let centerSize = size / 3;
  let stemLength = size * 1.75;

  if(y < 80){
    petalColor = '#4169e1'
  }
  

  push(); 
  translate(x, y);

  stroke(stemColor);
  strokeWeight(4);
  line(0, 0, 0, stemLength);


  noStroke();
  fill(petalColor);
  ellipse(-petalSize, 0, petalSize, petalSize); 
  ellipse(petalSize, 0, petalSize, petalSize); 
  ellipse(0, -petalSize, petalSize, petalSize); 
  ellipse(0, petalSize, petalSize, petalSize); 


  fill(flowerCenterColor);
  ellipse(0, 0, centerSize, centerSize);

  pop(); 
}

function windowResized() {
  resizeCanvas(2000, 1000); 
  wallpaper_background();
  my_symbol(); 
  redraw();
}