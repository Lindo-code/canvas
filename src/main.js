const {
  copyright,
  animateName,
  animateImageContainer,
  animateNavBar,
  animateRedLine,
  spinPortrait,
  openLinksInNewTab,
  showAll,
  homePage,
  contactPage,
  portfolioPage,
} = require("./utils/helper-functions");
const elements = require("./dom_elements");

window.onload = () => {
  copyright();
  animateName();
  animateImageContainer();
  animateNavBar();
  animateRedLine();
  spinPortrait();
  showAll();
  homePage(true);
};

elements.imageLinks.forEach(openLinksInNewTab);
elements.textLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    const url = navLink.getAttribute("page");
    (url === "home") ? homePage(false) : (url === "portfolio") ? portfolioPage() : contactPage();
  })
},);


// function scrollFunction() {
//   (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? query.scrollBtn.style.display = "block" : query.scrollBtn.style.display = "none";
// };

// function delay(url) {
//   setTimeout(function() {
//       window.open(url, "_blank") = url;
//   }, 1000);
// };
