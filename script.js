document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filtros-area .btn");
  const projects = document.querySelectorAll(".projeto");

function normalizeText(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = normalizeText(button.textContent);

      projects.forEach(project => {
        const category = normalizeText(project.getAttribute("data-category"));

        if (filter === "todos" || category === filter) {
          project.style.display = "flex";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
});

