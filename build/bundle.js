(()=>{var e={663:e=>{e.exports={year:document.querySelector(".year"),showTitle:document.querySelector(".title"),imageDiv:document.querySelector(".top-image-container"),navBar:document.querySelector(".nav-bar"),redLine:document.querySelector(".text-underline-long"),pageTitle:document.querySelector(".curr-page-title"),selfPortrait:document.querySelector(".flip-card-inner"),imageLinks:document.querySelectorAll("#link"),textLinks:document.querySelectorAll("#text-link"),show:document.querySelectorAll(".appear"),divs:document.querySelectorAll(".empty-div"),content:document.querySelector(".content")}},96:(e,t,i)=>{const o=i(663),{cardsContent:s,str:n,currProjectsContent:r,complProjectsContent:a}=i(402),l=[["WHO AM I?"]],c=[["I'm an aspiring web-developer and all-round programmer, who's currently learning JavaScript for front-end development and Node.JS for back-end development, with the goal of becoming a full-stack web developer."],["As someone who is highly focused and attentive to detail, I am always keen on giving each project I work on it's own unique design and even though I tend to lean more towards the design aspect of coding I'm able to appreciate the functionality that backend can offer to enhance any project."]];function p(e){o.divs.forEach((t=>{"contact"===e&&("home"!==t.getAttribute("div")&&"portfolio"!==t.getAttribute("div")||(t.style.display="none"),"contact"===t.getAttribute("div")&&(t.style.display=t.getAttribute("display"))),"home"===e&&("contact"!==t.getAttribute("div")&&"portfolio"!==t.getAttribute("div")||(t.style.display="none"),"home"===t.getAttribute("div")&&(t.style.display=t.getAttribute("display"))),"portfolio"===e&&("contact"!==t.getAttribute("div")&&"home"!==t.getAttribute("div")||(t.style.display="none"),"portfolio"===t.getAttribute("div")&&(t.style.display=t.getAttribute("display")))}))}function d(e){o.textLinks.forEach((t=>{t.classList.contains("bold-onclick","text-underline")&&t.classList.remove(...t.classList),t.getAttribute("page")===e&&t.classList.add("bold-onclick","text-underline")}))}function g(e){o.pageTitle.innerText="home"===e?"HOME":"portfolio"===e?"PORTFOLIO":"CONTACT"}function m(e){let t=!1;return o.divs.forEach((i=>{i.getAttribute("div")===e&&(t=!0)})),t}function u(){let e;return o.divs.forEach((t=>{void 0!==t.classList.contains("empty-div")&&t.classList.contains("empty-div")&&(e=t)})),e}function h(e){return`<h4 class="text-underline">${e}</h4>`}function f(e){let t="";return e.forEach((e=>{t+=`<li>${e}</li>`})),t}function b(e){let t="";return e.forEach((e=>{t+=`<input type="checkbox" name=${e} value=${e} checked="yes" onclick="return false" />\n            <label>${e}</label> </br>`})),t}e.exports={home:{createIntroDiv:e=>{e||(o.selfPortrait.classList.toggle("rotate"),o.show.forEach((e=>{e.classList.toggle("fade-in")})),setTimeout((()=>{o.selfPortrait.classList.toggle("rotate"),o.show.forEach((e=>{e.classList.toggle("fade-in")}))}),1e3));const t=m("home");if(d("home"),g("home"),!0===t)p("home");else{const e=u();e.classList.add("image-text"),e.classList.remove("empty-div"),e.setAttribute("div","home"),e.setAttribute("display","flex");const t=`\n          <img src=../assets/undraw/code_thinking.svg alt="person_sitting" class="svg-img" />\n          <div class="project-details">\n            <h4 class="text-underline"> ${l[0][0]} </h4>\n            <p style="text-align: left;" class="type-writer">\n              ${c[0][0]}\n              <br><br>\n              ${c[1][0]}\n              <br><br>\n            </p>\n            <a href=https://www.umuzi.org id="deco" target="_blank"> Umuzi.org</a>\n          </div>`;e.innerHTML=t}}},contact:{createContactDiv:()=>{o.selfPortrait.classList.toggle("rotate"),o.show.forEach((e=>{e.classList.toggle("fade-in")})),setTimeout((()=>{o.selfPortrait.classList.toggle("rotate"),o.show.forEach((e=>{e.classList.toggle("fade-in")}))}),1e3),d("contact"),g("contact"),p("contact")}},portfolio:{createPortfolioDiv:()=>{let e,t="",i="";if(o.selfPortrait.classList.toggle("rotate"),o.show.forEach((e=>{e.classList.toggle("fade-in")})),setTimeout((()=>{o.selfPortrait.classList.toggle("rotate"),o.show.forEach((e=>{e.classList.toggle("fade-in")}))}),1e3),d("portfolio"),g("portfolio"),!0===m("portfolio"))p("portfolio");else{const o=u();o.classList.add("projects-container"),o.classList.remove("empty-div"),o.setAttribute("div","portfolio"),o.setAttribute("display","block");for(let t=0;t<a.length;t++)e+=`\n          <h4 class="color">${a[t].title}</h4>\n          <div class="img-text">\n            <div>\n              <img src=${a[t].img} alt=${a[t].alt} class="project-img" />\n            </div>\n            <div class="all-project-details">\n                <h5>OBJECTIVES</h5>\n                <ul class="custom-font" type="circle">\n                  ${f(a[t].objectives)}\n                </ul>\n                <h5>TOOLS USED</h5>\n                <form class="custom-font">\n                  ${b(a[t].tools)}\n                </form>\n                <br>\n                <a href=${a[t].repoLink} class="inline project-icon" target="_blank">\n                  <i class="fab fa-github-square" ></i>\n                </a>\n            </div>\n          </div>`;const l=u();l.classList.add("heading"),l.classList.remove("empty-div"),l.setAttribute("div","portfolio"),l.setAttribute("display","flex");const c=h(n.portfolioCategories.compProj),p=u();p.classList.add("projects-container"),p.classList.remove("empty-div"),p.setAttribute("div","portfolio"),p.setAttribute("display","block");for(let e=0;e<r.length;e++)i+=`\n          <h4 class="color">${r[e].title}</h4>\n          <div class="img-text">\n            <div>\n              <img src=${r[e].img} alt=${r[e].alt} class="project-img" />\n            </div>\n            <div class="all-project-details">\n                <h5>OBJECTIVES</h5>\n                <ul class="custom-font" type="circle">\n                  ${f(r[e].objectives)}\n                </ul>\n                <h5>TOOLS USED</h5>\n                <form class="custom-font">\n                  ${b(r[e].tools)}\n                </form>\n                <br>\n                <a href=${r[e].repoLink} class="inline project-icon" target="_blank">\n                  <i class="fab fa-github-square" ></i>\n                </a>\n            </div>\n          </div>`;const d=u();d.classList.add("heading"),d.classList.remove("empty-div"),d.setAttribute("div","portfolio"),d.setAttribute("display","flex");const g=h(n.portfolioCategories.currProj),m=u();m.classList.add("cards-container"),m.classList.remove("empty-div"),m.setAttribute("div","portfolio"),m.setAttribute("display","grid");for(let e=0;e<s.length;e++)t+=`<div class='card'><h4>${s[e].title}</h4>\n          <img src=${s[e].img} alt="javascript_abbreviation_image" class="skill-img" />\n          <a href=${s[e].link}>\n            <span>${n.cardLinkTitle} <span style="color:red; ">${n.cardLinkIcon}</span></span>\n          </a></div>`;const v=u();v.classList.add("heading"),v.classList.remove("empty-div"),v.setAttribute("div","portfolio"),v.setAttribute("display","flex");const L=h(n.portfolioCategories.skills);console.log(p),v.innerHTML=L,m.innerHTML=t,d.innerHTML=g,p.innerHTML=i,l.innerHTML=c,o.innerHTML=e}}}}},225:(e,t,i)=>{const{copyright:o,animateName:s,animateImageContainer:n,animateNavBar:r,animateRedLine:a,spinPortrait:l,openLinksInNewTab:c,showAll:p,homePage:d,contactPage:g,portfolioPage:m}=i(321),u=i(663);window.onload=()=>{o(),s(),n(),r(),a(),l(),p(),d(!0)},u.imageLinks.forEach(c),u.textLinks.forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("page");"home"===t?d(!1):"portfolio"===t?m():g()}))}))},402:e=>{e.exports={cardsContent:[{img:"../assets/icons/py.png",title:"PYTHON",link:"https://www.sololearn.com/profile/25472119"},{img:"../assets/icons/js.png",title:"JAVASCRIPT",link:"https://www.freecodecamp.org/fcc44702f65-8d01-4507-9afb-4e03b1dbf7ce"},{img:"../assets/icons/html.png",title:"HTML",link:"https://www.sololearn.com/profile/25472119"},{img:"../assets/icons/css.png",title:"CSS",link:"https://www.sololearn.com/profile/25472119"},{img:"../assets/icons/postgresql.jpg",title:"POSTGRESQL",link:"https://www.sololearn.com/profile/25472119"},{img:"../assets/icons/docker.png",title:"DOCKER"},{img:"../assets/icons/jasmine.png",title:"JASMINE"},{img:"../assets/icons/git.png",title:"GIT"},{img:"../assets/icons/node.png",title:"NODE"},{img:"../assets/icons/webpack.png",title:"WEBPACK"}],str:{cardLinkIcon:"➜",cardLinkTitle:"View More",portfolioCategories:{skills:"TECH SKILLS",currProj:"CURRENT PROJECTS",compProj:"COMPLETED PROJECTS"}},currProjectsContent:[{img:"../assets/project-previews/project-preview(personal).jpg",title:"FIRST PERSONAL WEBSITE",alt:"personal_website_preview",repoLink:"https://github.com/Lindo-code/personal_website.git",link:"#",objectives:["Create personal website","Host website on Github Pages"],tools:["Javascript","HTML","CSS","CSS Grid","Flexbox"]},{img:"../assets/project-previews/project-preview(bullies).jpg",title:"BULLIES TRAINING WEBSITE",alt:"bullies_training_website_preview",repoLink:"https://github.com/Lindo-code/personal_website.git",link:"#",objectives:["Revamp bullies training website","Host revamped website on Github Pages"],tools:["Javascript Basics","HTML Basics","CSS Basics","CSS Grid","Flexbox"]},{img:"../assets/project-previews/project-preview(writer).jpg",title:"WRITER WEBSITE",alt:"writer_website_preview",repoLink:"https://github.com/Lindo-code/writer-website",link:"https://lindo-code.github.io/writer-website",objectives:["Create writer portfolio website","Host website on Github Pages","Publish website"],tools:["Javascript Basics","HTML Basics","CSS Basics","CSS Grid","Flexbox"]}],complProjectsContent:[{img:"../assets/project-previews/project-preview(sunny).jpg",title:"SUNNYSIDE AGENCY LANDING PAGE",alt:"landing_page_preview",repoLink:"https://github.com/Lindo-code/sunnyside-agency-landing-page-main",link:"https://lindo-code.github.io/sunnyside-agency-landing-page-main/",objectives:["Create responsive landing page","Host Sunnyside Agency Landing Page on Github Pages","Publish Landing Page"],tools:["Javascript","HTML","CSS","CSS Grid","Flexbox"]},{img:"../assets/project-previews/project-preview(semitone).jpg",title:"SEMITONE DIFFERENCE",alt:"app_preview",repoLink:"#",link:"https://lindo-code.github.io/ecnereffid_enotimes/",objectives:["Create Semitone Difference App","Host App on Github Pages","Publish App"],tools:["Javascript Basics","HTML Basics","CSS Basics","CSS Grid","Flexbox","Jasmine","Webpack"]},{img:"../assets/project-previews/project-preview(memory).jpg",title:"MEMORY: CARD GAME",alt:"card_game_preview",repoLink:"#",link:"https://lindo-code.github.io/emag-yromem-my/",objectives:["Create Semitone Difference App","Host App on Github Pages","Publish App"],tools:["Javascript Basics","HTML Basics","CSS Basics","CSS Grid","Flexbox","Jasmine","Webpack"]}]}},357:e=>{const t={form:document.querySelector(".my-form"),status:document.querySelector(".my-form-status")};e.exports={handleSubmit:e=>{e.preventDefault();const i=new FormData(e.target);if(fetch(e.target.action,{method:t.form.method,body:i,headers:{Accept:"application/json"}}).then((e=>{e.ok?(t.status.innerHTML="Thanks for your submission!",t.form.reset()):e.json().then((e=>{Object.hasOwn(e,"errors")?t.status.innerHTML=e.errors.map((e=>e.message)).join(", "):t.status.innerHTML="Oops! There was a problem submitting your form"}))})),error)throw t.status.innerHTML="Oops! There was a problem submitting your form",new Error(error)}}},321:(e,t,i)=>{const o=i(663),{home:s,contact:n,portfolio:r}=i(96);e.exports={copyright:()=>{const e=`${(new Date).getFullYear()}`;o.year.innerText=e},animateName:()=>{setTimeout((()=>{o.showTitle.style.opacity=1,o.showTitle.style.marginLeft=0,o.showTitle.classList.toggle("bounce-in-left")}),1e3)},animateImageContainer:()=>{setTimeout((()=>{o.imageDiv.classList.toggle("bounce-in-top")}),500)},animateNavBar:()=>{setTimeout((()=>{o.navBar.style.opacity=1,o.navBar.style.marginRight=0,o.navBar.classList.toggle("bounce-in-right")}),1e3)},animateRedLine:()=>{o.redLine.style.opacity=1,o.redLine.style.margin="1em 10% 1em 10%"},spinPortrait:()=>{setTimeout((()=>{o.selfPortrait.classList.toggle("rotate")}),2e3)},openLinksInNewTab:e=>{e.addEventListener("click",(t=>{const i=e.getAttribute("href");t.preventDefault(),window.setTimeout((()=>{window.open(i)}),1e3)}))},homePage:e=>{s.createIntroDiv(e)},contactPage:()=>{n.createContactDiv()},portfolioPage:()=>{r.createPortfolioDiv()},showAll:()=>{setTimeout((()=>{o.show.forEach((e=>{e.classList.toggle("fade-in")}))}),2200)}}}},t={};function i(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i(225),i(357)})();