(function () {
  const circle = document.querySelector(".circle");
  document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const circleSize = 925; // Tamaño del círculo

    circle.style.left = `${x - circleSize / 2}px`;
    circle.style.top = `${y - circleSize / 2}px`;
  });
})();
