console.log('hello!');

let pics = 3;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('div1').innerHTML += "<img src='assets/2018.a/" + pic + ".jpg'" + "class='div1img' id='pic" + pic+ "' />";
}
