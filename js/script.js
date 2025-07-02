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

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !phone || !email || !message) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }

    const subject = encodeURIComponent("Обратная связь с сайта");
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\nEmail: ${email}\nСообщение: ${message}`
    );

    // Замените на ваш email
    const mailToLink = `mailto:alex@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailToLink;

    modal.style.display = "none";
    form.reset();
    document.body.style.overflow = "auto";
  });
});
