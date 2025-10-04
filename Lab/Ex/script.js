document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#carouselExampleIndicators");
  const playPauseBtn = document.querySelector("#playPauseBtn");

  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3500,  // autoplay interval
    ride: "carousel" // start autoplaying
  });

  let isPlaying = true; // starts with autoplay ON

  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      carousel.pause(); // stop autoplay
      playPauseBtn.textContent = "Play";
    } else {
      carousel.cycle(); // resume autoplay
      playPauseBtn.textContent = "Pause";
    }
    isPlaying = !isPlaying;
  });
});

const themeSwitch = document.getElementById("themeSwitch");
const html = document.documentElement;

// Default theme
html.setAttribute("data-bs-theme", "light");
themeSwitch.checked = true;

themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    html.setAttribute("data-bs-theme", "light"); // green background toggle
  } else {
    html.setAttribute("data-bs-theme", "dark"); // black background toggle
  }
});
