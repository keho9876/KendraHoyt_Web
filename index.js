console.log("Hello World");

let imgs = 6;
let img;

for (i = 0; i < imgs; i++){
  img = 1+i;
  document.getElementById('stuff').innerHTML += "<img src=Assets/about/" + img + ".jpg'" + "class='aboutimg' id='img" + img + "' />";
}
