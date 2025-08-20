window.addEventListener("DOMContentLoaded", () => {
  gsap.from("#logo", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power3.out",
    onComplete: () => {
      // 動畫完成後可做切換
      document.querySelector(".intro").style.display = "none";
      document.querySelector("#main").style.display = "block";
    },
  });
});

function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
