const elements = require("./dom_elements");
const images = {
  homeSvg: "../assets/undraw/code_thinking.svg",
};
const links = {
  umuzi: "https://www.umuzi.org",
};
const text = {
  headingIntro: [["WHO AM I?"]],
  intro: [
    [
      "I'm an aspiring web-developer and all-round programmer, who's currently learning JavaScript for front-end development and Node.JS for back-end development, with the goal of becoming a full-stack web developer.",
    ],
    [
      "As someone who is highly focused and attentive to detail, I am always keen on giving each project I work on it's own unique design and even though I tend to lean more towards the design aspect of coding I'm able to appreciate the functionality that backend can offer to enhance any project.",
    ],
  ],
};
module.exports = {
  home: {
    createIntroDiv: (load) => {
      if (!load) {
        elements.selfPortrait.classList.toggle("rotate");
        elements.show.forEach((element) => {
          element.classList.toggle("fade-in");
        });
        setTimeout(() => {
          elements.selfPortrait.classList.toggle("rotate");
          elements.show.forEach((element) => {
            element.classList.toggle("fade-in");
          });
        }, 1000);
      }
      let divExist = false,
        div1;
      currLinkStyle("home");
      currPageTitle("home");
      elements.divs.forEach((div) => {
        div.getAttribute("div") === "home"
          ? (divExist = true)
          : (divExist = divExist);
      });
      if (divExist === true) {
        removeContent("home");
      } else {
        elements.divs.forEach((div) => {
          if (div.classList.contains("empty-div") !== undefined) {
            div.classList.contains("empty-div") ? (div1 = div) : (div1 = div1);
          }
        });
        div1.classList.add("img-text");
        div1.classList.remove("empty-div");
        div1.setAttribute("div", "home");
        div1.setAttribute("display", "flex");
        const introDiv = `
          <img src=${images.homeSvg} alt="person_sitting" class="project-img" />
          <div class="project-details">
            <h4 class="text-underline"> ${text.headingIntro[0][0]} </h4>
            <p style="text-align: left;" class="type-writer">
              ${text.intro[0][0]}
              <br><br>
              ${text.intro[1][0]}
              <br><br>
            </p>
            <a href=${links.umuzi} id="deco" target="_blank"> Umuzi.org</a>
          </div>`;
        div1.innerHTML = introDiv;
      }
    },
  },
  contact: {
    createContactDiv: () => {
      elements.selfPortrait.classList.toggle("rotate");
      elements.show.forEach((element) => {
        element.classList.toggle("fade-in");
      });
      setTimeout(() => {
        elements.selfPortrait.classList.toggle("rotate");
        elements.show.forEach((element) => {
          element.classList.toggle("fade-in");
        });
      }, 1000);
      currLinkStyle("contact");
      currPageTitle("contact");
      removeContent("contact");
    },
  },
  portfolio: {
    createPortfolioDiv: () => {
      currLinkStyle("portfolio");
      currPageTitle("portfolio");
      removeContent("portfolio");
    },
  },
};

function removeContent(page) {
  elements.divs.forEach((div) => {
    //show relevant content
    if (page === "contact") {
      if (div.getAttribute("div") === ("home" || "portfolio"))
        div.style.display = "none";
      if (div.getAttribute("div") === "contact")
        div.style.display = div.getAttribute("display");
    }
    if (page === "home") {
      if (div.getAttribute("div") === ("contact" || "portfolio"))
        div.style.display = "none";
      if (div.getAttribute("div") === "home")
        div.style.display = div.getAttribute("display");
    }
    if (page === "portfolio") {
      if (div.getAttribute("div") === ("contact" || "home"))
        div.style.display = "none";
      if (div.getAttribute("div") === "portfolio")
        div.style.display = div.getAttribute("display");
    }
  });
}

function currLinkStyle(page) {
  elements.textLinks.forEach((link) => {
    // move underline to current link
    if (link.classList.contains("bold-onclick", "text-underline"))
      link.classList.remove(...link.classList);
    if (link.getAttribute("page") === page)
      link.classList.add("bold-onclick", "text-underline");
  });
}

function currPageTitle(page) {
  elements.pageTitle.innerText =
    page === "home" ? "HOME" : page === "portfolio" ? "PORTFOLIO" : "CONTACT";
}
