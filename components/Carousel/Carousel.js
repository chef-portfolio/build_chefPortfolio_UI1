class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.left = carousel.querySelector(".left-button");
    this.right = carousel.querySelector(".right-button");
    this.image = carousel.querySelectorAll(".image-content");
    this.currentIndex = 0;
    this.changeDirection();
    setInterval(() => {
      if (this.image[this.currentIndex].style.display === 'block')
      {
        this.image[this.currentIndex].style.display = 'none'
        if (this.currentIndex === this.image.length - 1)
        {
          this.currentIndex = 0;
        }
        this.currentIndex += 1;
        this.image[this.currentIndex].style.display = "block";
      } else
      {
        this.image[this.currentIndex].style.display = "block";
      }
    }, 2000);
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
    this.image[this.currentIndex].addEventListener("click", () => window.location.href = "https://chef-portfolio.netlify.com");
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
    this.image[this.currentIndex].addEventListener("click", () => window.location.href = "https://chef-portfolio.netlify.com");
  };
  changeDirection = () => {
    this.left.addEventListener("click", () => this.moveLeft());
    this.right.addEventListener("click", () => this.moveRight());
    this.image[this.currentIndex].addEventListener("click", () => window.location = "https://chef-portfolio.netlify.com");
  };
}

let carousel = document.querySelector(".carousel");

new Carousel(carousel);
