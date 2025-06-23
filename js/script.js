document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contactModal");
  const openBtn = document.getElementById("contactBtn");
  const closeBtn = document.querySelector(".modal .close");
  const form = document.getElementById("contactForm");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Спасибо! Ваше сообщение отправлено.");
    form.reset();
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  });
});
