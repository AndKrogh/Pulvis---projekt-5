// ----------ANNE-SOFIE-------------- //

const wrapper = document.getElementsByClassName('wrapper');
const button = document.getElementById('click');
const button2 = document.getElementById('click2');

button.addEventListener('click', clicked);
button2.addEventListener('click', clicked2);
let scroll = 0;

wrapper[0].addEventListener("scroll", function (event) {
  scroll = wrapper[0].scrollLeft;
});



function clicked () {
  scroll = scroll += 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: 'smooth'
  });
}



function clicked2 () {
  scroll = scroll -= 500;
  wrapper[0].scrollTo({
    left: scroll,
    behavior: 'smooth'
  });
  scroll = wrapper[0].scrollLeft + 50;
  console.log(wrapper[0].scrollLeft);
}




// ----------Eksempel på loop-------------- //
//if (n > slides.length) {slideIndex = 1}
    //if (n < 1) {slideIndex = slides.length}
    //for (i = 0; i < slides.length; i++) {
      //slides[i].style.display = "none";
    //}
    //for (i = 0; i < dots.length; i++) {
      //dots[i].className = dots[i].className.replace(" active", "");
    //}
  //slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
//}


// ----------Eksempel på Kontrolstruktur-------------- //
// var x = 15;
// var y = 10;
  // if (x > y)
    // allert("X er størst");
  //else
    //alert("Y er størst");


// ----------Eksempel på Array-------------- //
//var colors = ["blue", "red", "green"];
//function changeColor(element, color) {
  //element.style.backgroundColor = color;
//}
//function printColors() {
  //var p = document.getElementById('colorsParagraph');

  //for (i = 0; i < colors.length; i++)
    //p.innerHTML += colors[i] + ", ";
//}
