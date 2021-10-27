let days = ["Monday","Tuesday","Wednesday"];
let images = ["monday.jpg","tuesday.jpg","wednesday.jpg"];
let prevday;

for(i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";
  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("day")[i].id = days[i];
}

document.getElementById('Monday').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "'>";

function setActive(e){

  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday).style.display = "none";
  //HELP HELP HELP
  //  document.getElementById(prevday).style.display = 'none';
  }


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  day = document.getElementsByClassName('active')[0].id;
  console.log(day);

  //HELP HELP HELP

  //document.getElementById(day +"weekday").style.display = "block";
//document.getElementById(day +"weekday").style.display = "none";
//  document.getElementById(day +"weekday").style.display = "block";
  document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpg'>";

}
