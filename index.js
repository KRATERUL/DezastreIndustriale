// Scroll effect: skull slightly moves on scroll
const skull = document.getElementById("skull");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  skull.style.transform = `translateY(${scrollY * 0.1}px)`; // moves 10% of scroll
});

// ENTER BUTTON: scroll to content
const enterBtn = document.getElementById("enterButton");
const content = document.querySelector(".content");

enterBtn.addEventListener("click", () => {
  content.scrollIntoView({ behavior: "smooth" });
});
