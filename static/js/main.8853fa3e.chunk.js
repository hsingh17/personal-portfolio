(this.webpackJsonpnew_website=this.webpackJsonpnew_website||[]).push([[0],[,,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/github.04be58c1.svg"},,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/heroku.cbe6ad10.svg"},,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/cpp.2441702d.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/css.5da907d7.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/react.ae626225.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/express.734e301f.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/html.aff8a9cb.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/js.fd46ca41.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/node.20b6ca74.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/postgres.eac8091f.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/python.6a8b2999.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/powershell.80d69ba8.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/git.f7d62831.svg"},function(e,t,i){},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/cookbook_app.33a5661b.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/mnist_project.51529620.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/connect4.7aa7951e.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/tetris.71bc968b.gif"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/maze_solver.7d3bacf0.jpg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/nexus_bot.4376160d.jpg"},function(e,t,i){},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/ftb.5b1a147f.svg"},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var n=i(1),r=i(6),c=i.n(r),s=i(3),a=(i(11),i.p+"static/media/monogram.53344437.svg"),o=i(0),l="hide",d="show",u="clamp(100px, 20vh, 400px)";var h=function(e){var t=e.height,i=e.width,r=i<=930?l:d,c=i<=930?d:l,h=Object(n.useState)(""),j=Object(s.a)(h,2),b=j[0],f=j[1],m=function(){f(window.scrollY>=t?"sticky-nav":"")},p=function(){var e=document.getElementById("menu"),t=e.style.height===u;e.style.height=t?"0px":u};return Object(n.useEffect)((function(){window.addEventListener("scroll",m);var e=document.getElementById("menu");return i>930&&e.style.height===u&&p(),function(){window.removeEventListener("scroll",m)}}),[i,t]),Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:b,children:[Object(o.jsx)("a",{href:"#hero",children:Object(o.jsx)("img",{id:"monogram",src:a,alt:"monogram"})}),Object(o.jsx)("a",{href:"#about-me",className:r,children:"About Me"}),Object(o.jsx)("a",{href:"#projects",className:r,children:"Projects"}),Object(o.jsx)("a",{href:"#education",className:r,children:"Education"}),Object(o.jsx)("a",{href:"#experience",className:r,children:"Experience"}),Object(o.jsx)("a",{href:"#contact",className:r,children:"Contact"}),Object(o.jsx)("a",{id:"menu-button",className:c,onClick:function(){p()},children:"\u2630"}),Object(o.jsxs)("div",{id:"menu",children:[Object(o.jsx)("a",{href:"#about-me",onClick:function(){p()},children:"About Me"}),Object(o.jsx)("a",{href:"#projects",onClick:function(){p()},children:"Projects"}),Object(o.jsx)("a",{href:"#education",onClick:function(){p()},children:"Education"}),Object(o.jsx)("a",{href:"#experience",onClick:function(){p()},children:"Experience"}),Object(o.jsx)("a",{href:"#contact",onClick:function(){p()},children:"Contact"})]})]})})},j=(i(13),15),b=Math.PI/180;var f=function(e){var t=e.height,i=e.width,r=Object(n.useRef)(),c=Object(n.useRef)(),s=Object(n.useRef)(),a=[],l=0,d=function(){return{x:Math.floor(Math.random()<.5?-1:1)*Math.floor(Math.random()*i),y:-Math.floor(Math.random()*t),v:7+Math.random()}},u=function e(t){void 0!==c.current&&(h(),f(),m()),r.current=requestAnimationFrame(e),c.current=t},h=function(){var e=s.current.getContext("2d");e.fillStyle="rgba(24, 32, 48, 0.3)",e.fillRect(0,0,i,t)},f=function(){var e=s.current.getContext("2d");e.fillStyle="#FFFFFF",a.forEach((function(n,r){e.translate(n.x+7.5,n.y+7.5),e.rotate(-l*b),e.translate(-(n.x+7.5),-(n.y+7.5)),e.fillRect(n.x,n.y,j,j),e.resetTransform(),n.x>i||n.y>t?a[r]=d():(n.x+=n.v,n.y+=n.v)})),(l+=10)>360&&(l=0)},m=function(){var e=s.current.getContext("2d");e.fillStyle="rgba(24, 32, 48, 0.6)",e.fillRect(0,0,i,t)};return Object(n.useEffect)((function(){return function(e){for(var t=0;t<e;t++)a.push(d())}(35),r.current=requestAnimationFrame(u),function(){return cancelAnimationFrame(r.current)}}),[t,i]),Object(o.jsx)("canvas",{ref:s,width:i,height:t,id:"background"})},m=(i(14),i(2)),p=i.p+"static/media/resume.85e1494c.svg",g=i.p+"static/media/email.09f59b22.svg",v=i.p+"static/media/Harjot_Singh_Resume.28ede43a.pdf";var O=function(e){var t=Object(n.useRef)(),i=Object(n.useRef)(new IntersectionObserver(e.observerHandler));return Object(n.useEffect)((function(){i.current.observe(t.current)}),[]),Object(o.jsxs)("section",{ref:t,id:"hero",children:[Object(o.jsx)("h1",{id:"name",children:"Harjot Singh"}),Object(o.jsx)("h2",{id:"title",children:"Aspiring Software Engineer"}),Object(o.jsxs)("div",{id:"socials",children:[Object(o.jsx)("a",{href:"https://github.com/hsingh17",children:Object(o.jsx)("img",{src:m.default,alt:"github"})}),Object(o.jsx)("a",{href:v,children:Object(o.jsx)("img",{src:p,alt:"resume"})}),Object(o.jsx)("a",{href:"mailto: hsingh172000@gmail.com",children:Object(o.jsx)("img",{src:g,alt:"email"})})]})]})},x=(i(15),[{name:"C++",img:i(16)},{name:"CSS",img:i(17)},{name:"React",img:i(18)},{name:"Express",img:i(19)},{name:"Heroku",img:i(4)},{name:"HTML",img:i(20)},{name:"Javascript",img:i(21)},{name:"NodeJS",img:i(22)},{name:"PostgreSQL",img:i(23)},{name:"Python",img:i(24)},{name:"Powershell",img:i(25)},{name:"Git",img:i(26)}]),w=Math.PI/180;function k(){var e=Array.from(x),t=Object(n.useRef)(),i=Object(n.useRef)(),r=0,c=function e(n){var c=document.getElementById("skills-spinner"),s=getComputedStyle(c).width,a=Number(s.substring(0,s.indexOf("px")))/2;if(void 0!==i.current){var o=Array.from(c.children).slice(1),l=360/o.length;o.forEach((function(e,t){r>360&&(r=0);var i=(r+l*t)*w,n=a*Math.cos(i),c=a*Math.sin(-i);e.style.transform="translate(".concat(n,"px, ").concat(c,"px)"),r+=.05}))}t.current=requestAnimationFrame(e),i.current=n};return Object(n.useEffect)((function(){return t.current=requestAnimationFrame(c),function(){return cancelAnimationFrame(t.current)}}),[]),Object(o.jsxs)("div",{id:"skills-spinner",children:[Object(o.jsx)("span",{id:"hacker-man",children:"\ud83d\udc68\u200d\ud83d\udcbb"}),e.map((function(e,t){return Object(o.jsx)("img",{src:e.img.default,alt:e.name},t)}))]})}var y=function(e){var t=Object(n.useRef)(),i=Object(n.useRef)(new IntersectionObserver(e.observerHandler));return Object(n.useEffect)((function(){i.current.observe(t.current)}),[]),Object(o.jsxs)("section",{id:"about-me",children:[Object(o.jsx)("h1",{children:"About Me \ud83d\ude00"}),Object(o.jsxs)("div",{id:"about-me-container",ref:t,children:[Object(o.jsx)("div",{className:"hook",children:Object(o.jsx)("p",{children:"I am a recent Computer Science graduate from UC Davis. Currently, I like exploring web development technologies. I still have so much to learn, but I hope you enjoy my portfolio. Here are some technologies I have experience in:"})}),Object(o.jsx)(k,{})]})]})},C=(i(27),[{title:"Cookbook App",description:"Full stack web app that displays over 200 meals to a user. \n                            Project features recipe browsing/search, filtering recipes,\n                            user authentication via a cookie-based session and PostgreSQL,\n                            add/delete meals from favorites when logged in.",links:[{url:"https://github.com/hsingh17/Cookbook",logo:i(2),alt:"github"},{url:"https://hsingh17-cookbook.herokuapp.com/",logo:i(4),alt:"heroku"}],date:"June 2022",image:i(28),skills:["React","Node","Express","PostgreSQL","Heroku","Bootstrap"]},{title:"MNIST Handwritten Digit Classifier",description:"Developed a basic Convolutional Neural Network (CNN) that classifies \n                            handwritten numbers. Designed a frontend where users can \n                            write numbers,and the CNN makes a prediction on what user wrote. \n                            Hosted on Heroku",links:[{url:"https://github.com/hsingh17/Handwritten-Digit-Classifier",logo:i(2),alt:"github"},{url:"https://handwritten-digit-classifier.herokuapp.com/",logo:i(4),alt:"heroku"}],date:"August 2021",image:i(29),skills:["Javascript","Python","Tensorflow","Node","Express","HTML","CSS","Heroku"]},{title:"Connect 4",description:"Developed a recreation of Connect 4 in Javascript. \n                            Game features working local and online multiplayer. \n                            Implemented a simple opponent AI with the minimax algorithm. \n                            Project is hosted on Heroku",links:[{url:"https://github.com/hsingh17/Connect4",logo:i(2),alt:"github"},{url:"https://hsingh17-connect4.herokuapp.com/",logo:i(4),alt:"heroku"}],date:"October 2020",image:i(30),skills:["Javascript","Node","Express","Socket.io","Heroku"]},{title:"Tetris",description:"Developed a recreation of Tetris in C++ with the \n                            Simple Fast Media Library (SFML)",links:[{url:"https://github.com/hsingh17/Tetris",logo:i(2),alt:"github"}],date:"August 2019",image:i(31),skills:["C++","SFML"]},{title:"A* Maze Solver",description:"Developed a text-based maze solver in C++ \n                            using the A* pathfinding algorithm.",links:[{url:"https://github.com/hsingh17/MazeSolver",logo:i(2),alt:"github"}],date:"July 2019",image:i(32),skills:["C++"]},{title:"Discord Chat Bot",description:"Developed a chat bot for the communication software Discord in Python \n                            using the Discord.py library. Chat bot made requests to Riot Games' \n                            public API to fetch a user's League of Legends statistics.",links:[{url:"https://github.com/hsingh17/Nexus_Bot",logo:i(2),alt:"github"}],date:"December 2018",image:i(33),skills:["Python","Discord.py","Riot Games API"]}]);function N(e){var t=e.data,i=e.setVisible;return Object(o.jsx)("div",{className:"opaque-wrapper",children:Object(o.jsxs)("div",{className:"project-popout",children:[Object(o.jsx)("img",{src:t.image.default,alt:t.title}),Object(o.jsx)("div",{className:"close-btn",onClick:function(){i(!1)},children:Object(o.jsx)("h1",{children:"\xd7"})}),Object(o.jsx)("h3",{className:"title",children:t.title}),Object(o.jsx)("h3",{className:"date",children:t.date}),Object(o.jsx)("p",{children:t.description}),Object(o.jsx)("div",{className:"skills-container",children:Array.from(t.skills).map((function(e,t){return Object(o.jsx)("span",{className:"skill",children:e},t)}))}),Object(o.jsx)("div",{className:"links-container",children:Array.from(t.links).map((function(e,t){return Object(o.jsx)("a",{href:e.url,children:Object(o.jsx)("img",{src:e.logo.default,alt:e.alt})},t)}))})]})})}function S(e){var t=Object(n.useRef)(),i=Object(n.useRef)(new IntersectionObserver(e.observerHandler)),r=e.data,c=Object(n.useState)(!1),a=Object(s.a)(c,2),l=a[0],d=a[1];return Object(n.useEffect)((function(){i.current.observe(t.current)}),[]),Object(o.jsxs)("div",{className:"tile-wrapper",onClick:function(e){!function(e){"tile-wrapper"===e.target.className&&d(!0)}(e)},"data-title":r.title,ref:t,children:[Object(o.jsx)("img",{className:"tile-img",src:r.image.default,alt:r.title}),l?Object(o.jsx)(N,{data:r,setVisible:d}):null]})}var E=function(e){return Object(o.jsxs)("section",{id:"projects",children:[Object(o.jsx)("h1",{children:"Recent Projects \ud83d\udea7"}),Object(o.jsx)("div",{id:"project-tiles",children:Array.from(C).map((function(t,i){return Object(o.jsx)(S,{data:t,observerHandler:e.observerHandler},i)}))})]})},H=(i(34),i.p+"static/media/ucd.0fa63af0.svg");var I=function(e){var t=Object(n.useRef)(),i=Object(n.useRef)(new IntersectionObserver(e.observerHandler));return Object(n.useEffect)((function(){i.current.observe(t.current)}),[]),Object(o.jsxs)("section",{id:"education",children:[Object(o.jsx)("h1",{children:"Education \ud83c\udf93"}),Object(o.jsxs)("div",{id:"education-container",ref:t,children:[Object(o.jsx)("div",{id:"ucd-logo",children:Object(o.jsx)("img",{src:H,alt:"UCD Logo"})}),Object(o.jsxs)("div",{id:"education-info",children:[Object(o.jsx)("h2",{id:"uni-name",children:"University of California, Davis"}),Object(o.jsx)("h3",{id:"time-spent",children:"September 2018 - June 2022"}),Object(o.jsx)("h3",{id:"major",children:"Bachelor of Science, Computer Science"})]})]})]})},R=[{title:"Student Assistant",company:"Franchise Tax Board",description:"In this role, I assist the Paper Data Capture Operations \n                  team by providing technological support to their \n                  business customers. This either means resolving \n                  hardware/software issues on ibml FUSiON scanners \n                  or implementing data fixes in Microsoft SQL \n                  Server/Oracle SQL Server. I also have developed \n                  a command-line based PowerShell script to \n                  automate reoccuring Microsoft SQL Server data fixes.",dateStart:"September 2021",dateEnd:"Current",img:i(35)}];i(36);function A(e){var t=e.job,i=t.title,r=t.company,c=t.description,s=t.dateStart,a=t.dateEnd,l=t.img,d=e.viewClass,u=Object(n.useRef)(),h=Object(n.useRef)(new IntersectionObserver(e.observerHandler));return Object(n.useEffect)((function(){h.current.observe(u.current)}),[]),Object(o.jsxs)("div",{className:"job-grid ".concat(d),ref:u,children:[Object(o.jsx)("img",{id:"job-img",className:d,src:l.default,alt:r}),Object(o.jsx)("div",{id:"bar",className:d}),Object(o.jsxs)("div",{id:"job-company-date",className:d,children:[Object(o.jsx)("span",{id:"job-company",className:d,children:r}),Object(o.jsx)("span",{id:"job-dates",className:d,children:"".concat(s,"-").concat(a)})]}),Object(o.jsx)("div",{id:"job-title",className:d,children:i}),Object(o.jsx)("div",{id:"job-desc",className:d,children:c})]})}var M=function(e){var t=e.width,i=Object(n.useRef)(),r=Object(n.useRef)(new IntersectionObserver(e.observerHandler)),c=t>=768?"desktop":"mobile";return Object(n.useEffect)((function(){r.current.observe(i.current)}),[]),Object(o.jsxs)("section",{id:"experience",ref:i,children:[Object(o.jsx)("h1",{children:"Experience \ud83d\udcbc"}),Object(o.jsx)("div",{id:"experience-container",children:Array.from(R).map((function(t,i){return Object(o.jsx)(A,{job:t,viewClass:c,observerHandler:e.observerHandler},i)}))})]})};i(37);var P=function(e){var t=Object(n.useRef)(),i=Object(n.useRef)(new IntersectionObserver(e.observerHandler));return Object(n.useEffect)((function(){i.current.observe(t.current)}),[]),Object(o.jsxs)("section",{id:"contact",children:[Object(o.jsx)("h1",{children:"Contact Me \ud83d\udce7"}),Object(o.jsxs)("div",{id:"contact-container",ref:t,children:[Object(o.jsx)("p",{children:"If you would like to contact me, do so with the following email:"}),Object(o.jsx)("code",{children:"hsingh172000[at]gmail[dot]com"})]})]})};i(38);function F(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.style.opacity="1","tile-wrapper"!==e.target.className&&(e.target.style.transform="translateY(0px)"),t.disconnect())}))}var L=function(){var e=Object(n.useState)(window.innerHeight),t=Object(s.a)(e,2),i=t[0],r=t[1],c=Object(n.useState)(window.innerWidth),a=Object(s.a)(c,2),l=a[0],d=a[1],u=function(){r(window.innerHeight),d(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",u),function(){window.removeEventListener("resize",u)}}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{height:i,width:l}),Object(o.jsx)(h,{height:i,width:l}),Object(o.jsx)(O,{observerHandler:F}),Object(o.jsx)(y,{observerHandler:F}),Object(o.jsx)(E,{observerHandler:F}),Object(o.jsx)(I,{observerHandler:F}),Object(o.jsx)(M,{width:l,observerHandler:F}),Object(o.jsx)(P,{observerHandler:F})]})};c.a.render(Object(o.jsx)(L,{}),document.getElementById("root"))}],[[39,1,2]]]);
//# sourceMappingURL=main.8853fa3e.chunk.js.map