/* =========================
   INICIALIZACIÓN GENERAL
========================= */
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     BOTÓN MODO CLARO / OSCURO
  ========================= */
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "theme-toggle";
  toggleBtn.textContent = "🌙";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });

  /* =========================
     ANIMACIONES AL HACER SCROLL
  ========================= */
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  /* =========================
     AVATAR + CHATBOT
  ========================= */
  const avatar = document.getElementById("avatarAssistant");
  const chatbot = document.getElementById("chatbot");
  const chatbotBody = document.getElementById("chatbotBody");
  const chatbotOptions = document.getElementById("chatbotOptions");
  const closeChatbot = document.getElementById("closeChatbot");
  const optionButtons = chatbotOptions.querySelectorAll("button");

  /* Seguridad por si algo no existe */
  if (!avatar || !chatbot) return;

  /* Función para mensajes del bot */
  function addBotMessage(message) {
    const msg = document.createElement("div");
    msg.className = "bot-message";
    msg.innerHTML = message;
    chatbotBody.appendChild(msg);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }

  /* Saludo del avatar al cargar la página */
  window.addEventListener("load", () => {
    avatar.classList.add("wave");
    setTimeout(() => avatar.classList.remove("wave"), 1800);

    chatbot.style.display = "flex";
    chatbotOptions.style.display = "none";

    addBotMessage("Hola 👋 soy <strong>Lo Bot</strong>. ¿Cómo te puedo ayudar?");
  });

  /* Abrir chatbot al hacer click en el avatar */
  avatar.addEventListener("click", () => {
    chatbot.style.display = "flex";
    chatbotOptions.style.display = "flex";
  });

  /* Cerrar chatbot */
  closeChatbot.addEventListener("click", () => {
    chatbot.style.display = "none";
  });

  /* Opciones del chatbot */
  optionButtons.forEach(button => {
    button.addEventListener("click", () => {
      const option = button.dataset.option;
      let response = "";

      switch (option) {
        case "servicios":
          response = `
            🌱 Brindo asesorías personalizadas para PYMES:
            <br>• Contabilidad básica
            <br>• Recursos Humanos
            <br>• Formalización
            <br>• Organización administrativa
          `;
          break;

        case "precios":
          response = `
            💲 Los precios dependen del servicio.
            <br>👉 Escríbeme y lo vemos de forma personalizada.
          `;
          break;

        case "contacto":
          response = `
            📧 <strong>mllanquinaop@correo.uss.cl</strong>
            <br>📱 Déjame tu número de WhatsApp y te contacto.
          `;
          break;

        case "wsp":
          window.open(
            "https://wa.me/56954435762?text=Hola%20Lo,%20quisiera%20información%20sobre%20tus%20servicios",
            "_blank"
          );
          return;
      }

      addBotMessage(response);
    });
  });

});

