const menu = document.querySelector(".menu img");
const navItems = document.querySelector("nav");
console.log(menu.src);

class MobileMenu {
  constructor(menu, navItems) {
    this.menu = menu;
    this.navItems = navItems;
    this.menu.addEventListener("click", this.showMenu);
  }

  showMenu = () => {
    if (this.navItems.className === "show")
    {
      this.menu.src = '../../img/menu.png';
    } else
    {
      this.menu.src = '../../img/cancel.png';
    }
    this.navItems.classList.toggle("show");
  };
}

new MobileMenu(menu, navItems);
