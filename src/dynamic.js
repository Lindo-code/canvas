const elements = require("./dom_elements");
const {
  cardsContent,
  str,
  currProjectsContent,
  complProjectsContent,
} = require("./stored_obj_and_arr");
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
      const divExist = checkIfDivExists("home");
      currLinkStyle("home");
      currPageTitle("home");
      if (divExist === true) {
        removeContent("home");
      } else {
        const div1 = findEmptyDiv();
        div1.classList.add("image-text");
        div1.classList.remove("empty-div");
        div1.setAttribute("div", "home");
        div1.setAttribute("display", "flex");
        const introDiv = `
          <img src=${images.homeSvg} alt="person_sitting" class="svg-img" />
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
      let cards = "", currProjects = "", complProjects;
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
      currLinkStyle("portfolio");
      currPageTitle("portfolio");
      // add heading
      const divExist = checkIfDivExists("portfolio");
      if (divExist === true) {
        removeContent("portfolio");
      } else {
        // Add Completed Projects
        const complProjectsContainer = findEmptyDiv();
        complProjectsContainer.classList.add("projects-container");
        complProjectsContainer.classList.remove("empty-div");
        complProjectsContainer.setAttribute("div", "portfolio");
        complProjectsContainer.setAttribute("display", "block");
        for (let i = 0; i < complProjectsContent.length; i++) {
          complProjects += `
          <h4 class="color">${complProjectsContent[i].title}</h4>
          <div class="img-text">
            <div>
              <img src=${complProjectsContent[i].img} alt=${
            complProjectsContent[i].alt
          } class="project-img" />
            </div>
            <div class="all-project-details">
                <h5>OBJECTIVES</h5>
                <ul class="custom-font" type="circle">
                  ${addList(complProjectsContent[i].objectives)}
                </ul>
                <h5>TOOLS USED</h5>
                <form class="custom-font">
                  ${addTechUsed(complProjectsContent[i].tools)}
                </form>
                <br>
                <a href=${
                  complProjectsContent[i].repoLink
                } class="inline project-icon" target="_blank">
                  <i class="fab fa-github-square" ></i>
                </a>
            </div>
          </div>`;
        };
        // Add completed projects title
        const headingThree = findEmptyDiv();
        headingThree.classList.add("heading");
        headingThree.classList.remove("empty-div");
        headingThree.setAttribute("div", "portfolio");
        headingThree.setAttribute("display", "flex");
        const headingComplProj = headingRedline(
          str.portfolioCategories.compProj
        );
        // Add cuurent projects
        const currProjectsContainer = findEmptyDiv();
        currProjectsContainer.classList.add("projects-container");
        currProjectsContainer.classList.remove("empty-div");
        currProjectsContainer.setAttribute("div", "portfolio");
        currProjectsContainer.setAttribute("display", "block");
        for (let i = 0; i < currProjectsContent.length; i++) {
          currProjects += `
          <h4 class="color">${currProjectsContent[i].title}</h4>
          <div class="img-text">
            <div>
              <img src=${currProjectsContent[i].img} alt=${
            currProjectsContent[i].alt
          } class="project-img" />
            </div>
            <div class="all-project-details">
                <h5>OBJECTIVES</h5>
                <ul class="custom-font" type="circle">
                  ${addList(currProjectsContent[i].objectives)}
                </ul>
                <h5>TOOLS USED</h5>
                <form class="custom-font">
                  ${addTechUsed(currProjectsContent[i].tools)}
                </form>
                <br>
                <a href=${
                  currProjectsContent[i].repoLink
                } class="inline project-icon" target="_blank">
                  <i class="fab fa-github-square" ></i>
                </a>
            </div>
          </div>`;
        };
        // Add current projects title
        const headingTwo = findEmptyDiv();
        headingTwo.classList.add("heading");
        headingTwo.classList.remove("empty-div");
        headingTwo.setAttribute("div", "portfolio");
        headingTwo.setAttribute("display", "flex");
        const headingCurrProj = headingRedline(
          str.portfolioCategories.currProj
        );
        // Add cards container & cards
        const cardsContainer = findEmptyDiv();
        cardsContainer.classList.add("cards-container");
        cardsContainer.classList.remove("empty-div");
        cardsContainer.setAttribute("div", "portfolio");
        cardsContainer.setAttribute("display", "grid");
        for (let i = 0; i < cardsContent.length; i++) {
          cards += `<div class='card'><h4>${cardsContent[i].title}</h4>
          <img src=${cardsContent[i].img} alt="javascript_abbreviation_image" class="skill-img" />
          <a href=${cardsContent[i].link}>
            <span>${str.cardLinkTitle} <span style="color:red; ">${str.cardLinkIcon}</span></span>
          </a></div>`;
        }
        // Add Tech Skills title
        const heading = findEmptyDiv();
        heading.classList.add("heading");
        heading.classList.remove("empty-div");
        heading.setAttribute("div", "portfolio");
        heading.setAttribute("display", "flex");
        const headingSkills = headingRedline(str.portfolioCategories.skills);
        // Add content
        console.log(currProjectsContainer)
        heading.innerHTML = headingSkills;
        cardsContainer.innerHTML = cards;
        headingTwo.innerHTML = headingCurrProj;
        currProjectsContainer.innerHTML = currProjects;
        headingThree.innerHTML = headingComplProj;
        complProjectsContainer.innerHTML = complProjects;
      }
    },
  },
};

function removeContent(page) {
  elements.divs.forEach((div) => {
    //show relevant content
    if (page === "contact") {
      if (
        div.getAttribute("div") === "home" ||
        div.getAttribute("div") === "portfolio"
      )
        div.style.display = "none";
      if (div.getAttribute("div") === "contact")
        div.style.display = div.getAttribute("display");
    }
    if (page === "home") {
      if (
        div.getAttribute("div") === "contact" ||
        div.getAttribute("div") === "portfolio"
      )
        div.style.display = "none";
      if (div.getAttribute("div") === "home")
        div.style.display = div.getAttribute("display");
    }
    if (page === "portfolio") {
      if (
        div.getAttribute("div") === "contact" ||
        div.getAttribute("div") === "home"
      )
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

function checkIfDivExists(page) {
  let divExist = false;
  elements.divs.forEach((div) => {
    div.getAttribute("div") === page
      ? (divExist = true)
      : (divExist = divExist);
  });
  return divExist;
}

function findEmptyDiv() {
  let emptyDiv;
  elements.divs.forEach((div) => {
    if (div.classList.contains("empty-div") !== undefined) {
      div.classList.contains("empty-div")
        ? (emptyDiv = div)
        : (emptyDiv = emptyDiv);
    }
  });
  return emptyDiv;
}

function headingRedline(title) {
  return `<h4 class="text-underline">${title}</h4>`;
}

function addList(objectives) {
  let list = "";
  objectives.forEach((item) => {
    list += `<li>${item}</li>`;
  });
  return list;
}

function addTechUsed(tech) {
  let list = "";
  tech.forEach((item) => {
    list += `<input type="checkbox" name=${item} value=${item} checked="yes" onclick="return false" />
            <label>${item}</label> </br>`;
  });
  return list;
}
