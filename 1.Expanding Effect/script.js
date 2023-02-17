const panels = document.querySelectorAll(".panel");
let currentActive = document.querySelector(".active");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    if (!e.target.classList.contains("active")) {
      currentActive.classList.remove("active");
      currentActive = e.target;
      currentActive.classList.add("active");
    }
  });
});
