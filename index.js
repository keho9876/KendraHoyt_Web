console.log("Hello World");

let imgs = 6;
let img;
// let artworks = 19;
// let artwork;

for (i = 0; i < imgs; i++){
  img = 1+i;
  document.getElementById('stuff').innerHTML += "<img src= 'about/" + img + ".jpg'" + "class='aboutimg' id='img" + img + "' />";
}

// for (i = 0; i < artworks; i++){
//   artwork = 1+i;
//   document.getElementById('create').innerHTML += "<img src= 'ksartwork/" + artwork + ".jpg'" + "class='creations' id='artwork" + artwork + "' />";
// }
