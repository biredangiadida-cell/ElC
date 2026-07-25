
// ELC Professional Website JavaScript

// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Prayer Form
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    alert("🙏 Thank you! Your prayer request has been received. God bless you.");

    form.reset();
  });
}

// Sticky Header Shadow
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.2)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Fade-in Animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
  section.style.transition = "all 0.8s ease";
  observer.observe(section);
});

// Footer Year
const footer = document.querySelector("footer p");
if (footer) {
  footer.innerHTML = "© " + new Date().getFullYear() + " ELC - Everlasting Love Church | All Rights Reserved";
}
