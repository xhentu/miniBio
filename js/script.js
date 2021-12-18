const width = window.innerWidth;
const height = window.innerHeight;

console.log(width, height);

let born = document.getElementsByTagName('button')[0];
born.addEventListener("click", () => {
  alert("the one")
})


//

function openDiv(evt, divName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("leftSideInside");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(divName).style.display = "block";
  evt.currentTarget.className += " active";
}