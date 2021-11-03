let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let images = ["monday.jpg","tuesday.jpg","wednesday.jpg","thursday.jpg","friday.jpg","saturday.jpg","sunday.jpg"];
let prevday;

for(i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName('day')[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("day")[i].id = days[i];
}

document.getElementById('monday').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='MidtermProject/assets/" + images[0] + "'>";

function setActive(e){

  prevday = document.getElementsByClassName("active")[0].id;
  let indexPrev = days.indexOf(prevday);
  console.log("prevday" + prevday);

  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday + "day").style.display = "none";
  }


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  console.log("Current day" + day);

  var indexNew = days.indexOf(day);

  document.getElementById(day + "day").style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpg'>";

}

function buttonOne(){
  console.log("clicked buttonOne");
  alert("Are you sure?");
//  document.getElementById("second.html").addEventListener();
}
