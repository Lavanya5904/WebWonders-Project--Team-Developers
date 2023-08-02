document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider-of-div");
    const prevArrow = document.querySelector(".previousarrow");
    const nextArrow = document.querySelector(".nextwalaarrow");
  
    let slideIndex = 0;
  
    function showSlide(index) {
      if (index < 0) {
        slideIndex = slider.children.length - 1;
      } else if (index >= slider.children.length) {
        slideIndex = 0;
      }
  
      const slideWidth = slider.children[0].clientWidth;
      slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
                                                                                                                         
    prevArrow.addEventListener("click", () => {
      showSlide(--slideIndex);
    });
  
    nextArrow.addEventListener("click", () => {
      showSlide(++slideIndex);
    });
  });
  