console.log("JavaScript Working");

  function buttonOne(){
    console.log("clicked buttonOne");
  }


let day = ["Monday","Tuesday","Wednesday"];
let image = ["monday.jpg", "tuesday.jpg", "wednesday.jpg"]
let first;

for(i=0;i<document.getElementsByClassName("days").length;i++){
  //adding the days of the week
  document.getElementsByClassName('days')[i].innerHTML = "<h2>" + day[i] + "</h2>";
  //adding event listener click to everything  to every tab in the class days
  document.getElementsByClassName('days')[i].addEventListener('click', setActive, false );
  //getting elements by  class name and adding an id of monday, tuesday, ...
  document.getElementsByClassName('days')[i].id = day[i];
}

  document.getElementById("Monday").classList.toggle('active');
  document.getElementById("images").innerHTML ="<img src='assets/" + image[0] + "'>";

//using event target (e) to defermine if clicking h2 or div and impacting those two things independently
  function setActive(e){

  first = document.getElementsByClassName("active")[0].id;
    if(first != undefined){
      document.getElementById(first).classList.toggle("active");
    }


  // prevmeal = document.getElementsByClassName("active")[0].id;
  // if(prevmeal != undefined){
  //   document.getElementById(prevmeal).classList.toggle('active');
  //   document.getElementById(prevmeal + 'weekday').style.display = "none";
  //}

    if(e.target.tagName == "H2"){
      e.target.parentNode.classList.toggle("active");
    }else{
      e.target.classList.toggle("active");
    }

    current = document.getElementsByClassName('active')[0].id;
    console.log('first');

    // weekday = document.getElementsByClassName('active')[0].id;
    //  console.log(weekday);
    // document.getElementById(day + "weekday").style.display = "block";
    document.getElementById('images').innerHTML = "<img src= 'assets/" + first + ".jpg'>";
  }
