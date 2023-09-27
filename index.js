let imgPath = document.getElementById("menu");
      let nav = document.getElementById("navitem");
      const menuChange = () => {
        if (imgPath.src.match("img/menu.svg")) {
          imgPath.src = "img/close.svg";
          document.body.style.overflowY = "hidden";
        } else {
          imgPath.src = "img/menu.svg";
          document.body.style.overflowY = "auto";
        }
      };
      const menuToggle = () => {
        nav.classList.toggle("hidden");
        nav.classList.toggle("flex");
      };
// Faq
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
});
