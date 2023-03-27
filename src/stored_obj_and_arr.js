const str = {
    cardLinkIcon: "➜",
    cardLinkTitle: "View More",
    portfolioCategories: {
      skills: "TECH SKILLS",
      currProj: "CURRENT PROJECTS",
      compProj: "COMPLETED PROJECTS",
    }
};

const cardsContent = [
  {
    img: "../assets/icons/py.png",
    title: "PYTHON",
    link: "https://www.sololearn.com/profile/25472119",
  },
  {
    img: "../assets/icons/js.png",
    title: "JAVASCRIPT",
    link: "https://www.freecodecamp.org/fcc44702f65-8d01-4507-9afb-4e03b1dbf7ce",
  },
  { img: "../assets/icons/html.png", title: "HTML", link: "https://www.sololearn.com/profile/25472119" },
  { img: "../assets/icons/css.png", title: "CSS", link: "https://www.sololearn.com/profile/25472119" },
  { img: "../assets/icons/postgresql.jpg", title: "POSTGRESQL", link: "https://www.sololearn.com/profile/25472119" },
  { img: "../assets/icons/docker.png", title: "DOCKER" },
  { img: "../assets/icons/jasmine.png", title: "JASMINE" },
  { img: "../assets/icons/git.png", title: "GIT" },
  { img: "../assets/icons/node.png", title: "NODE" },
  { img: "../assets/icons/webpack.png", title: "WEBPACK" },
];

const currProjectsContent = [
  {
    img: "../assets/project-previews/project-preview(personal).jpg",
    title: "FIRST PERSONAL WEBSITE",
    alt: "personal_website_preview",
    repoLink: "https://github.com/Lindo-code/personal_website.git",
    link: "#",
    objectives: ["Create personal website", "Host website on Github Pages"],
    tools: ["Javascript", "HTML", "CSS", "CSS Grid", "Flexbox"]
  },
  {
    img: "../assets/project-previews/project-preview(bullies).jpg",
    title: "BULLIES TRAINING WEBSITE",
    alt: "bullies_training_website_preview",
    repoLink: "https://github.com/Lindo-code/personal_website.git",
    link: "#",
    objectives: ["Revamp bullies training website", "Host revamped website on Github Pages"],
    tools: ["Javascript Basics", "HTML Basics", "CSS Basics", "CSS Grid", "Flexbox"],
  },
  {
    img: "../assets/project-previews/project-preview(writer).jpg",
    title: "WRITER WEBSITE",
    alt: "writer_website_preview",
    repoLink: "https://github.com/Lindo-code/writer-website",
    link: "https://lindo-code.github.io/writer-website",
    objectives: ["Create writer portfolio website", "Host website on Github Pages", "Publish website"],
    tools: ["Javascript Basics", "HTML Basics", "CSS Basics", "CSS Grid", "Flexbox"],
  },
];

const complProjectsContent = [
  {
    img: "../assets/project-previews/project-preview(sunny).jpg",
    title: "SUNNYSIDE AGENCY LANDING PAGE",
    alt: "landing_page_preview",
    repoLink: "https://github.com/Lindo-code/sunnyside-agency-landing-page-main",
    link: "https://lindo-code.github.io/sunnyside-agency-landing-page-main/",
    objectives: ["Create responsive landing page", "Host Sunnyside Agency Landing Page on Github Pages", "Publish Landing Page"],
    tools: ["Javascript", "HTML", "CSS", "CSS Grid", "Flexbox"]
  },
  {
    img: "../assets/project-previews/project-preview(semitone).jpg",
    title: "SEMITONE DIFFERENCE",
    alt: "app_preview",
    repoLink: "#",
    link: "https://lindo-code.github.io/ecnereffid_enotimes/",
    objectives: ["Create Semitone Difference App", "Host App on Github Pages", "Publish App"],
    tools: ["Javascript Basics", "HTML Basics", "CSS Basics", "CSS Grid", "Flexbox", "Jasmine", "Webpack"],
  },
  {
    img: "../assets/project-previews/project-preview(memory).jpg",
    title: "MEMORY: CARD GAME",
    alt: "card_game_preview",
    repoLink: "#",
    link: "https://lindo-code.github.io/emag-yromem-my/",
    objectives: ["Create Semitone Difference App", "Host App on Github Pages", "Publish App"],
    tools: ["Javascript Basics", "HTML Basics", "CSS Basics", "CSS Grid", "Flexbox", "Jasmine", "Webpack"],
  },
];
module.exports = {cardsContent, str, currProjectsContent, complProjectsContent};