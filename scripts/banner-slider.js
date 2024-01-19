document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let slideIndex = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll(".slider img");
    if (index < 0) {
      slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
      slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
  });

  nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
  });


  showSlide(slideIndex);
});