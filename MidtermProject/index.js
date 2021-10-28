let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
let images = ["monday.jpg","tuesday.jpg","wednesday.jpg","thursday.jpg","friday.jpg","saturday.jpg","sunday.jpg"];
// let dates = ["date0","date1","date2","date4","date5","date6"];
// let quotes = ["quote0","quote1","quote3","quote4","quote5","quote6"];
// let texts = ["text0","text1","text3","text4","text5","text6"];
let prevday;
// let colorArray = ["rgb(254,197,187)","rgb(255,215,186)","rgb(216,226,220)","rgb(236,228,219)","rgb(250,225,221)","rgb(254,200,154)","rgb(236,228,219)"]

for(i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("day")[i].id = days[i];
}

document.getElementById('Monday').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "'>";

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
  // var tempColor;
  // console.log("currentActive =" "day" + indexNew.toString());
  document.getElementById(day + "day").style.display = "block";
  // document.getElementById(item + "item").style.backgroundColor = colorArray[0];
  document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpg'>";


  // if(day == "Monday"){
  //   tempColor=rgb(254,197,187);
  // }
  //
  // if(day == "Tuesdayday"){
  //   tempColor=rgb(255,215,186);
  // }
  //
  // if(day == "Wednesday"){
  //   tempColor=rgb(216,226,220);
  // }
  //
  // if(day == "Thursday"){
  //   tempColor=rgb(236,228,219);
  // }
  //
  // if(day == "Friday"){
  //   tempColor=rgb(250,225,221);
  // }
  //
  // if(day == "Saturday"){
  //   tempColor=rgb(254,200,154);
  // }
  //
  // if(day == "Sunday"){
  //   tempColor=rgb(236,228,219);
  // }
  // document.getElementById(day + "day").style.backgroundColor = tempColor;
}
