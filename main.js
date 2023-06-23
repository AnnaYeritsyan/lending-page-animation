
window.addEventListener("load", function(){
  document.getElementById("load").style.display = "none"
})

window.onload = function(){
// -------------------------------------------navigation border-bottom
let newpage = document.querySelectorAll(".newpage")
let active = document.getElementsByClassName("actives");
for(let i = 0; i <newpage.length; i++){
newpage[i].addEventListener("click", function(){
active[0].className = active[0].className.replace(" active", "");
this.className += " actives";
console.log(active)
})
}
// -------------------------------------------navigation border-bottom

// ----------------------------animation------------
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
// console.log(elementTop < windowHeight - elementVisible);
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}



window.addEventListener("scroll", reveal);

let leftBtn = document.getElementsByClassName("lefthand")
let rightBtn = document.getElementsByClassName("righthand")
var avatar =  document.querySelector(".avatar")
let name_surname  = document.getElementsByClassName("name_surname")
let profession_name = document.getElementsByClassName("profession")
let comment = document.getElementsByClassName("comment")

let pictures = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg", ]
let name = ["Jena Doe","Jenya Doe", "jihan doe", "john doe"]
let profession = ["Graphic Designer","Senior Graphic Designer", "Chief Digital Officer","CEO Software House"]
let comments = ["Wery useful for task management between team.","Truly awesome collaboration tool and so intuitive it almost feels as though you are interacting with/n a fellow human.",
"The productivity level increases to a great extent with this Mobile Application. Being a PM, having a way to track everything on my mobile phone just makes you even more mobile.",
"Great app, can edit alot without having to take out your laptop, or geting too your stationary pc, so that is a big plus."]
  avatar.src = pictures[0];
  let position = 0;
  
  const moveRight = () => {
      if (position >= pictures.length - 1) {
          position = 0
          avatar.src = pictures[position];
          name_surname[0].textContent = name[position]
          profession_name[0].textContent = profession[position]
          comment[0].textContent = comments[position]
          // console.log(name_surname);
          return;
      }
     avatar.src = pictures[position + 1];
     name_surname[0].textContent = name[position+1]
     profession_name[0].textContent = profession[position+1]
     comment[0].textContent = comments[position+1]
     console.log(name_surname[0]);
      position++;
  }
  
  const moveLeft = () => {
      if (position < 1) {
          position = pictures.length - 1;
          console.log(position);
          avatar.src = pictures[position];
          name_surname[0].textContent = name[position]
          profession_name[0].textContent = profession[position]
          comment[0].textContent = comments[position]
          // console.log(pictures[position]);
          return;
      }
      avatar.src = pictures[position - 1];
      name_surname[0].textContent = name[position-1]
      profession_name[0].textContent = profession[position-1]
      comment[0].textContent = comments[position-1]
      position--;
      // console.log(position);
  }
  
  rightBtn[0].addEventListener("click", moveRight);
  leftBtn[0].addEventListener("click", moveLeft);




}
