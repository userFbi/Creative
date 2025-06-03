document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

// Persist checkbox state using localStorage
const checkboxes = document.querySelectorAll(
  '#packing-form input[type="checkbox"]'
);

checkboxes.forEach((checkbox) => {
  const key = `packing_${checkbox.dataset.item}`;
  checkbox.checked = localStorage.getItem(key) === "true";

  checkbox.addEventListener("change", () => {
    localStorage.setItem(key, checkbox.checked);
  });
});

// Handle slider ONLY for 17th June
const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const slides = slider.querySelectorAll("img.slide");
  const prevBtn = slider.querySelector(".prev-btn");
  const nextBtn = slider.querySelector(".next-btn");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  // Initial show
  showSlide(currentIndex);

  // Event Listeners
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });
});
