localStorage.setItem("meownyaa", "nya12321");
localStorage.setItem("naalgasa", "hehe1233334");
localStorage.setItem("fdenkara", "12345678");
localStorage.setItem("kalika", "kazken123");
$("form").on("submit", function (e) {
  e.preventDefault();
  const login = $("#login").val(),
    password = $("#password").val(),
    verification = $("#verification").val();
  if (login.length < 7) {
    alert("Login is too short");
  } else if (login.length > 20) {
    alert("Login is too long");
  } else if (password.length < 6) {
    alert("At least 6 symbols in password field");
  } else if (password.length > 30) {
    alert("Not more than 30 symbols in password filed");
  } else if (password !== verification) {
    alert("Passwords don't match");
  } else if (password !== localStorage.getItem(login)) {
    alert("There is no such user");
  } else {
    alert(`You signed in!\nLogin: ${login}\nPassword: ${password}`);
    $("#login").val("");
    $("#password").val("");
    $("#verification").val("");
  }
});

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous','next'];
const galleryItems = document.querySelectorAll('.gallery-item');


class Carousel {
  constructor(container, items, controls){
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery(){
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0,5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  setCurrentState(direction){
    if (direction.className == 'gallery-controls-previous'){
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls(){
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }

  useControls(){
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems , galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();