
let meal = ["breakfast","lunch","dinner"];
let images = ["breakfast.jpg","lunch.jpg","dinner.jpg"];
let prevmeal;

for(i=0;i<document.getElementsByClassName("meals").length;i++){
  document.getElementsByClassName("meals")[i].innerHTML = "<h2>" + meal[i] + "</h2>";
  document.getElementsByClassName("meals")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("meals")[i].id = meal[i];
}


  document.getElementById("breakfast").classList.toggle('active');
  document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "'>"

  function setActive(e){

    prevmeal =  document.getElementsByClassName("active")[0].id;
    if(prevmeal != undefined){
      document.getElementById(prevmeal).classList.toggle('active');
          document.getElementById(prevmeal + "menu").style.display = "none";
    }

    if(e.target.tagName == "H2"){
      e.target.parentNode.classList.toggle('active');
    }else {
      e.target.classList.toggle('active');
    }

    meal = document.getElementsByClassName('active')[0].id;
    document.getElementById(meal +"menu").style.display = "block";
    document.getElementById('image').innerHTML = "<img src='assets/" + meal + ".jpg'>";
  }
