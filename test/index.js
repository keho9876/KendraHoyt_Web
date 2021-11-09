console.log('hello!');

let imgs = 6;
let img;

for(i=0;i<imgs;i++){
  img = 1+i;
document.getElementById('stuff').innerHTML += "<img src='about/" + img + ".jpg'" + "class='aboutimg' id='img" + img+ "' />";
}
