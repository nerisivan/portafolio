// Tabs de resumen (Experiencia, Education, etc.)
const resumenBtn = document.querySelectorAll(".resume-btn");

resumenBtn.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const resumeDetails = document.querySelectorAll(".resume-detail");

    resumenBtn.forEach(btn => {
      btn.classList.remove('active')
    });
    btn.classList.add('active')

    resumeDetails.forEach(detail => {
      detail.classList.remove('active')
    });
    resumeDetails[idx].classList.add('active')
  });
});

// Navegación entre secciones (mostrar/ocultar)
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section[id]");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1); // Remover el #

    // Ocultar todas las secciones
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    // Mostrar la sección objetivo
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");

      // Scroll al inicio (opcional, para mejor experiencia)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Actualizar clase active en los enlaces
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Cerrar menú móvil si está abierto
    const nav = document.querySelector("nav");
    const menuIcon = document.getElementById("menu-icon");
    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      menuIcon.classList.remove("bx-x");
    }
  });
});

// Menú móvil (hamburguesa)
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuIcon.classList.toggle("bx-x");
  });
}
