const navItems = document.getElementById("nav-items");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navItems.classList.toggle("mob-active");
});

// new Splide('.splide', {
//     type: 'loop',
//     perPage: 1,
//     autoplay: true,
//     interval: 3000,
//     pagination: true,
//     arrows: false
// }).mount();

var splide = new Splide(".splide", {
  type: "loop",
  rewind: true,
  arrows: false,
});

splide.mount();
