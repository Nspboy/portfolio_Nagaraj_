document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mainNav.classList.toggle("open");
      document.body.style.overflow = mainNav.classList.contains("open")
        ? "hidden"
        : "";
    });

    // Close menu when a nav link is clicked
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mainNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Services toggle
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", () => {
      document
        .querySelectorAll(".service-card")
        .forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });

  // Contact form: Formspree handles submission automatically
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      // Let Formspree handle it. After successful submit, Formspree will redirect or show a success message.
    });
  }

  // Ensure Download CV points to available file; fallback to attached absolute path if project file missing
  const downloadLink = document.getElementById("downloadCv");
  if (downloadLink) {
    const projectPath = "assets/files/Nagaraj_aithal.pdf";
    // try fetch relative path
    fetch(projectPath, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          downloadLink.href = projectPath;
        } else {
          // fallback to absolute path where attached PDF resides (local path)
          const abs = "file:///d:/others/Nagaraj%20aithal.pdf";
          downloadLink.href = abs;
        }
      })
      .catch(() => {
        const abs = "file:///d:/others/Nagaraj%20aithal.pdf";
        downloadLink.href = abs;
      });
  }
});
