class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = carousel.querySelector(".left-button");
    this.right = carousel.querySelector(".right-button");
    this.image = carousel.querySelectorAll("img");
    this.currentIndex = 0;
    this.changeDirection();
  }

  moveRight = () => {
    this.image[this.currentIndex].style.display = "none";
    if (this.currentIndex === this.image.length - 1) {
      this.currentIndex = 0;
      this.image[this.currentIndex].style.display = "block";
    } else {
      this.currentIndex += 1;
      this.image[this.currentIndex].style.display = "block";
    }
  };
  moveLeft = () => {
    this.image[this.currentIndex].style.display = "none";
    if (this.currentIndex === 0) {
      this.currentIndex = this.image.length - 1;
      this.image[this.currentIndex].style.display = "block";
    } else {
      this.currentIndex -= 1;
      this.image[this.currentIndex].style.display = "block";
    }
  };
  changeDirection = () => {
    this.left.addEventListener("click", () => this.moveLeft());
    this.right.addEventListener("click", () => this.moveRight());
  };
}

let carousel = document.querySelector(".carousel");

new Carousel(carousel);
