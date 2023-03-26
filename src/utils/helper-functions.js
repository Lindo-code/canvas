const elements = require("../dom_elements");
const {home, contact, portfolio} = require("../dynamic");

module.exports = {
  copyright: () => {
    const date = new Date();
    const currYear = date.getFullYear();
    const str = `${currYear}`;
    elements.year.innerText = str;
  },
  animateName: () => {
    setTimeout(() => {
      elements.showTitle.style.opacity = 1;
      elements.showTitle.style.marginLeft = 0;
      elements.showTitle.classList.toggle("bounce-in-left");
    }, 1000);
  },
  animateImageContainer: () => {
    setTimeout(() => {
      elements.imageDiv.classList.toggle("bounce-in-top");
    }, 500);
  },
  animateNavBar: () => {
    setTimeout(() => {
      elements.navBar.style.opacity = 1;
      elements.navBar.style.marginRight = 0;
      elements.navBar.classList.toggle("bounce-in-right");
    }, 1000);
  },
  animateRedLine: () => {
    elements.redLine.style.opacity = 1;
    elements.redLine.style.margin = "1em 10% 1em 10%";
  },
  spinPortrait: () => {
    setTimeout(() => {
      elements.selfPortrait.classList.toggle("rotate");
    }, 2000);
  },
  openLinksInNewTab: (link) => {
    link.addEventListener("click", (e) => {
      const url = link.getAttribute("href");
      e.preventDefault();
      window.setTimeout(() => {
        window.open(url);
      }, 1000);
    });
  },
  homePage: (bool) => {
    home.createIntroDiv(bool);
  },
  contactPage: () => {
    contact.createContactDiv();
  },
  portfolioPage: () => {
    portfolio.createPortfolioDiv();
  },
  showAll: () => {
    setTimeout(() => {
      elements.show.forEach((element) => {
        element.classList.toggle("fade-in");
      });
    }, 2200);
  },
};
