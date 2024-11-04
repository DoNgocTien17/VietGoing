// Baler
const images = [
  "/img/baler1.jpg",
  "/img/itemPopular.jpg",
  "/img/baler3.jpeg",
  "/img/imgPopular.jpg",
  "/img/itemPopular.jpg",
  "/img/baler3.jpeg",
];

let currentIndex = 0;

function changeImage() {
  const currentImage = document.getElementById("slider-image-1");
  const nextImage = document.getElementById("slider-image-2");

  const nextIndex = (currentIndex + 1) % images.length;

  nextImage.src = images[nextIndex];

  currentImage.style.transition = "none";
  currentImage.style.transform = "translateX(0)";

  nextImage.style.transition = "none";
  nextImage.style.transform = "translateX(100%)";
  nextImage.style.display = "block";

  nextImage.offsetHeight;

  requestAnimationFrame(() => {
    currentImage.style.transition = "transform 0.8s ease-in-out";
    nextImage.style.transition = "transform 0.8s ease-in-out";

    currentImage.style.transform = "translateX(-100%)";
    nextImage.style.transform = "translateX(0)";

    setTimeout(() => {
      currentImage.src = images[nextIndex];

      currentImage.style.transition = "none";
      currentImage.style.transform = "translateX(0)";
      nextImage.style.display = "none";

      currentIndex = nextIndex;
    }, 800);
  });
}
setInterval(changeImage, 2000);
//End Baler

//Choose
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

const choose1 = document.querySelector(".choose1");
const choose2 = document.querySelector(".choose2");

choose1.classList.add("hidden-left");
choose2.classList.add("hidden-right");

observer.observe(choose1);
observer.observe(choose2);
// End Choose

//Popular
$(document).ready(function () {
  // Khởi tạo Owl Carousel
  var owl = $(".rowSilde").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: false,
    // autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<img src="/img/prev.png" alt="" class="imgPrev" />',
      '<img src="/img/next.png" class="imgNext" alt="" />',
    ],
    item: 3,
  });

  window.moveSlide = function (direction) {
    if (direction === -1) {
      owl.trigger("prev.owl.carousel");
    } else if (direction === 1) {
      owl.trigger("next.owl.carousel");
    }
  };
});
//END Popular

//TYPE
const typeSlider = document.querySelector(".typeInfo");
const items = document.querySelectorAll(".itemType");
const prevBtn = document.querySelector(".typePrev");
const nextBtn = document.querySelector(".typeNext");

function moveNext() {
  const firstItem = typeSlider.firstElementChild;

  items.forEach((item) => {
    item.style.transition = "transform 0.3s ease-in-out";
    item.style.transform = "translateX(-100%)";
  });

  setTimeout(() => {
    typeSlider.appendChild(firstItem);

    items.forEach((item) => {
      item.style.transition = "none";
      item.style.transform = "translateX(0)";
    });
  }, 300);
}

function movePrev() {
  const lastItem = typeSlider.lastElementChild;

  items.forEach((item) => {
    item.style.transition = "none";
    item.style.transform = "translateX(-100%)";
  });

  typeSlider.insertBefore(lastItem, typeSlider.firstElementChild);

  lastItem.offsetHeight;

  items.forEach((item) => {
    item.style.transition = "transform 0.3s ease-in-out";
    item.style.transform = "translateX(0)";
  });
}

nextBtn.addEventListener("click", moveNext);
prevBtn.addEventListener("click", movePrev);
//END TYPE

//Scroll Top
const scrollToTop = document.querySelector(".lastFooter");

scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
//END Scroll Top
