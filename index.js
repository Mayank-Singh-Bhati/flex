let imgPath = document.getElementById("menu");
      let nav = document.getElementById("navitem");
      const menuChange = () => {
        if (imgPath.src.match("img/menu.svg")) {
          imgPath.src = "img/close.svg";
        } else {
          imgPath.src = "img/menu.svg";
        }
      };
      const menuToggle = () => {
        nav.classList.toggle("hidden");
        nav.classList.toggle("flex");
      }
