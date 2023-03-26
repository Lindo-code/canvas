(()=>{var e={663:e=>{e.exports={year:document.querySelector(".year"),showTitle:document.querySelector(".title"),imageDiv:document.querySelector(".top-image-container"),navBar:document.querySelector(".nav-bar"),redLine:document.querySelector(".text-underline-long"),pageTitle:document.querySelector(".curr-page-title"),selfPortrait:document.querySelector(".flip-card-inner"),imageLinks:document.querySelectorAll("#link"),textLinks:document.querySelectorAll("#text-link"),show:document.querySelectorAll(".appear"),divs:document.querySelectorAll(".empty-div")}},96:(e,t,o)=>{const i=o(663),a=[["WHO AM I?"]],r=[["I'm an aspiring web-developer and all-round programmer, who's currently learning JavaScript for front-end development and Node.JS for back-end development, with the goal of becoming a full-stack web developer."],["As someone who is highly focused and attentive to detail, I am always keen on giving each project I work on it's own unique design and even though I tend to lean more towards the design aspect of coding I'm able to appreciate the functionality that backend can offer to enhance any project."]];function n(e){i.divs.forEach((t=>{"contact"===e&&("home"===t.getAttribute("div")&&(t.style.display="none"),"contact"===t.getAttribute("div")&&(t.style.display=t.getAttribute("display"))),"home"===e&&("contact"===t.getAttribute("div")&&(t.style.display="none"),"home"===t.getAttribute("div")&&(t.style.display=t.getAttribute("display"))),"portfolio"===e&&("contact"===t.getAttribute("div")&&(t.style.display="none"),"portfolio"===t.getAttribute("div")&&(t.style.display=t.getAttribute("display")))}))}function s(e){i.textLinks.forEach((t=>{t.classList.contains("bold-onclick","text-underline")&&t.classList.remove(...t.classList),t.getAttribute("page")===e&&t.classList.add("bold-onclick","text-underline")}))}function l(e){i.pageTitle.innerText="home"===e?"HOME":"portfolio"===e?"PORTFOLIO":"CONTACT"}e.exports={home:{createIntroDiv:e=>{e||(i.selfPortrait.classList.toggle("rotate"),i.show.forEach((e=>{e.classList.toggle("fade-in")})),setTimeout((()=>{i.selfPortrait.classList.toggle("rotate"),i.show.forEach((e=>{e.classList.toggle("fade-in")}))}),1e3));let t,o=!1;if(s("home"),l("home"),i.divs.forEach((e=>{"home"===e.getAttribute("div")&&(o=!0)})),!0===o)n("home");else{i.divs.forEach((e=>{void 0!==e.classList.contains("empty-div")&&e.classList.contains("empty-div")&&(t=e)})),t.classList.add("img-text"),t.classList.remove("empty-div"),t.setAttribute("div","home"),t.setAttribute("display","flex");const e=`\n          <img src=../assets/undraw/code_thinking.svg alt="person_sitting" class="project-img" />\n          <div class="project-details">\n            <h4 class="text-underline"> ${a[0][0]} </h4>\n            <p style="text-align: left;" class="type-writer">\n              ${r[0][0]}\n              <br><br>\n              ${r[1][0]}\n              <br><br>\n            </p>\n            <a href=https://www.umuzi.org id="deco" target="_blank"> Umuzi.org</a>\n          </div>`;t.innerHTML=e}}},contact:{createContactDiv:()=>{i.selfPortrait.classList.toggle("rotate"),i.show.forEach((e=>{e.classList.toggle("fade-in")})),setTimeout((()=>{i.selfPortrait.classList.toggle("rotate"),i.show.forEach((e=>{e.classList.toggle("fade-in")}))}),1e3),s("contact"),l("contact"),n("contact")}},portfolio:{createPortfolioDiv:()=>{s("portfolio"),l("portfolio"),n("portfolio")}}}},225:(e,t,o)=>{const{copyright:i,animateName:a,animateImageContainer:r,animateNavBar:n,animateRedLine:s,spinPortrait:l,openLinksInNewTab:c,showAll:d,homePage:m,contactPage:g}=o(321),u=o(663);window.onload=()=>{i(),a(),r(),n(),s(),l(),d(),m(!0)},u.imageLinks.forEach(c),u.textLinks.forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("page");"home"===t?m(!1):"portfolio"===t?portfolioPage():g()}))}))},357:e=>{const t={form:document.querySelector(".my-form"),status:document.querySelector(".my-form-status")};e.exports={handleSubmit:e=>{e.preventDefault();const o=new FormData(e.target);if(fetch(e.target.action,{method:t.form.method,body:o,headers:{Accept:"application/json"}}).then((e=>{e.ok?(t.status.innerHTML="Thanks for your submission!",t.form.reset()):e.json().then((e=>{Object.hasOwn(e,"errors")?t.status.innerHTML=e.errors.map((e=>e.message)).join(", "):t.status.innerHTML="Oops! There was a problem submitting your form"}))})),error)throw t.status.innerHTML="Oops! There was a problem submitting your form",new Error(error)}}},321:(e,t,o)=>{const i=o(663),{home:a,contact:r,portfolio:n}=o(96);e.exports={copyright:()=>{const e=`${(new Date).getFullYear()}`;i.year.innerText=e},animateName:()=>{setTimeout((()=>{i.showTitle.style.opacity=1,i.showTitle.style.marginLeft=0,i.showTitle.classList.toggle("bounce-in-left")}),1e3)},animateImageContainer:()=>{setTimeout((()=>{i.imageDiv.classList.toggle("bounce-in-top")}),500)},animateNavBar:()=>{setTimeout((()=>{i.navBar.style.opacity=1,i.navBar.style.marginRight=0,i.navBar.classList.toggle("bounce-in-right")}),1e3)},animateRedLine:()=>{i.redLine.style.opacity=1,i.redLine.style.margin="1em 10% 1em 10%"},spinPortrait:()=>{setTimeout((()=>{i.selfPortrait.classList.toggle("rotate")}),2e3)},openLinksInNewTab:e=>{e.addEventListener("click",(t=>{const o=e.getAttribute("href");t.preventDefault(),window.setTimeout((()=>{window.open(o)}),1e3)}))},homePage:e=>{a.createIntroDiv(e)},contactPage:()=>{r.createContactDiv()},portfolioPage:()=>{n.createPortfolioDiv()},showAll:()=>{setTimeout((()=>{i.show.forEach((e=>{e.classList.toggle("fade-in")}))}),2200)}}}},t={};function o(i){var a=t[i];if(void 0!==a)return a.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,o),r.exports}o(225),o(357)})();