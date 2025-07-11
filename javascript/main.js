document.addEventListener("DOMContentLoaded", () => {
  // ✅ Scroll to Top Button
  const btn = document.getElementById("scrollBtn");

  window.onscroll = function () {
    if (!btn) return;
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  window.scrollToTop = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Form Validation + Success Message
  const form = document.querySelector("form");
  const msg = document.getElementById("msg");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.textContent = "Please fill in all fields.";
        return;
      }

      msg.style.color = "green";
      alert("Message sent successfully!");
      form.reset();
    });
  }

  // 🌙 Theme Toggle
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // 📱 Mobile Nav Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
