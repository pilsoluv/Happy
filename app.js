const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const togglePageBtn = document.getElementById("togglePageBtn");
const fullscreenBtn = document.getElementById("fullscreenBtn");

togglePageBtn?.addEventListener("click", () => {
  screen1.classList.toggle("active");
  screen2.classList.toggle("active");
});

fullscreenBtn?.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    await document.documentElement.requestFullscreen();
  } else {
    await document.exitFullscreen();
  }
});

document.querySelectorAll(".student-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("checked");
    btn.style.background = btn.classList.contains("checked") ? "#ffca1b" : "";
  });
});