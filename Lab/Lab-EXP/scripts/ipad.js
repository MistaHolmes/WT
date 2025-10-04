// ipad.js

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Buy button action
const buyBtn = document.getElementById("buy");
if (buyBtn) {
  buyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Redirecting to Apple Store checkout for iPad Air...");
    window.location.href = "./Cart.html"; 
  });
}

// Highlight timeline item on scroll
const timelineItems = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

timelineItems.forEach(item => observer.observe(item));
