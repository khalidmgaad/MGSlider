var sliderItems = document.getElementsByClassName("slider-item");
console.log("Items "+sliderItems.length);
var currentIndex = 0;
function showNext() {
  currentIndex = currentIndex<sliderItems.length-1 ? currentIndex+1 : 0;
  for(i=0;i<sliderItems.length;i++){
    sliderItems[i].classList.remove("active");
  }
  sliderItems[currentIndex].classList.add("active");
}

function showPrev() {
  currentIndex = currentIndex>0 ? currentIndex-1 : sliderItems.length-1;
  for(i=0;i<sliderItems.length;i++){
    sliderItems[i].classList.remove("active");
  }
  sliderItems[currentIndex].classList.add("active");
}

//EDITED