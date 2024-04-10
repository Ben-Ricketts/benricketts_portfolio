let hamburgerMenu = document.getElementById("hamburger-menu-icon");
let modalWindow = document.getElementById("modal-window");

let isClicked = false;

const toggleMenu = () => {
  isClicked = !isClicked;
  console.log(isClicked);

  if (isClicked === true) {
    modalWindow.classList.remove("hidden");
  } else {
    modalWindow.classList.add("hidden");
  }
};

hamburgerMenu.addEventListener("click", toggleMenu);

export { toggleMenu };
