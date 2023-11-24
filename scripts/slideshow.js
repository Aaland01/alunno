var slides = document.getElementsByClassName("slideshow")[0].children;
positionStack();
setInterval(slideshow,5000);

function positionStack() {
  for(var slide of slides) {
    if(slide.dataset.status!="active") {
      //Stacks all inactive slides to the right of the viewport
      slide.style.zIndex = -1;
      slide.style.left = "100%";
    }
    else {
      slide.style.zIndex = 0;
      slide.style.left=0;
    }
  }
}

function slideshow() {
  var active;
  var nextIndex;
  //Finds the active slide and the next slides index
  for(var slide of slides) {
    if(slide.dataset.status == "active") {
      active = slide;
      nextIndex = parseInt(slide.dataset.index)+1;
      break;
    }
  }

  //Overflow correction for index
  if(nextIndex>slides.length-1) {
    nextIndex = 0;
  }


  for(var slide of slides) {
    //Only does something once it finds the slide with the right index
    if(slide.dataset.index==nextIndex) {
      //changes z-indexes so the slide being moved out, can
      //slide underneath the active slide to rejoin the stack
      //on the right
      active.style.zIndex = -1;
      slide.style.zIndex = 0;

      //Slides the slides to the left
      active.style.left="-100%";
      slide.style.left="0";
      
      //Changes status for each slide
      active.dataset.status = "inactive";
      slide.dataset.status = "active";
      
      //After 2000ms slides the previously active slide to the right
      //delay is to let the animation finish
      setTimeout(function() {
        active.style.left="100%";
      },2000);
    }
  }
}