webpackJsonp([0],[,,function(t,a,e){"use strict";var s=e(1),n=e(54),i=e(37),r=e.n(i),l=e(41),o=e.n(l);s.a.use(n.a);var c=new n.a({mode:"history",routes:[{path:"/home",redirect:"/"},{path:"/",name:"Home",component:r.a,meta:{link:"#home"}},{path:"/about",component:r.a,meta:{link:"#about"}},{path:"/projects",component:r.a,meta:{link:"#projects"}},{path:"/contact",component:r.a,meta:{link:"#contact"}},{path:"*",component:o.a}],scrollBehavior:function(t,a,e){if(e)return e;if(t.hash){var s=document.querySelector(t.hash);return void(s&&s.scrollIntoView({behavior:"smooth"}))}if(t.matched.some(function(t){return t.meta.link})){var n=document.querySelector(t.meta.link);return void(n&&n.scrollIntoView({behavior:"smooth"}))}return{x:0,y:0}}});a.a=c},function(t,a){},,function(t,a,e){e(18);var s=e(0)(e(7),e(43),null,null);t.exports=s.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(1),n=e(5),i=e.n(n),r=e(2),l=e(4),o=e.n(l),c=e(3);e.n(c);o.a.polyfill(),s.a.config.productionTip=!1,new s.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(35),n=e.n(s),i=e(32),r=e.n(i);a.default={name:"about",components:{fun:n.a},data:function(){return{resumeSrc:r.a,showFun:!1}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"contact"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(31),n=e.n(s),i=e(29),r=e.n(i),l=e(30),o=e.n(l),c=[{src:n.a,link:"https://www.instagram.com/p/BGlj2LfgW_g/",caption:"I studied abroad in Hong Kong in 2016."},{src:r.a,link:"https://www.instagram.com/p/BIUNhwiDwFy/",caption:"XiaoLongBao. I love cooking."},{src:o.a,link:"https://www.instagram.com/p/BOwOhpPjsqt/",caption:"I love dogs and they love me back."}],u={book:"Orientalism - Edward Said",album:"Exchange - The JuJu",podcast:"Code Switch - NPR"};a.default={name:"fun",data:function(){return{pictures:c,favorites:u}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"grid"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(36),n=e.n(s),i=e(40),r=e.n(i),l=e(38),o=e.n(l),c=e(33),u=e.n(c),f=e(42),d=e.n(f),m=e(34),p=e.n(m),v=e(39),b=e.n(v);a.default={name:"home",components:{grid:n.a,navbar:r.a,intro:o.a,about:u.a,projects:d.a,contact:p.a,links:b.a},data:function(){return{pageIndex:0,showGrid:!1}},methods:{toggleGrid:function(){this.showGrid=!this.showGrid}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"intro"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"links"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"navbar",props:["pageIndex"],data:function(){return{index:this.pageIndex}},methods:{emitToggle:function(){this.$emit("toggle")}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"notfound"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=[{title:"Explorations",url:"http://bernard.wang/explorations",list:{Expertise:"Front-end / Web Design",Details:"Personal project showcasing my work in Art & Design classes throughout college. Uses Flickr to host images and a Handlebars to build the page.",Credits:"",Year:"2017"}},{title:"Lisa Vuong Portfolio",url:"http://lisavuong.com/",list:{Expertise:"Front-end",Details:"Portfolio site for my dear friend and fellow shiba fan. Coded entirely in vanilla JS and Sass, the site   also uses custom built gallery sliders.",Credits:"Web Design: Lisa Vuong",Year:"2015"}},{title:"IBM Maelstrom",url:"http://bernard.wang/mael-nano/",list:{Expertise:"Project Management / Web Design / Front-end",Details:"Website built for IBM Maelstrom, a ten week design program in Austin, TX. Part of a week long micro-project involving other branding and style deliverables.",Credits:"Web Design: Meme Betadam, Kei Yumino / Project Management: Tobi Oyadiran",Year:"2016"}},{title:"This site!",list:{Expertise:"Front-end / Web Design",Details:"Personal site and portfolio built with Vue.js, Webpack, Tachyons and PugJS. Visit archive.bernard.wang to view previous versions of this site!",Credits:"",Year:(new Date).getFullYear()}}];a.default={name:"projects",data:function(){return{projects:s}}}},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a,e){t.exports=e.p+"static/img/bao.42638f8.png"},function(t,a,e){t.exports=e.p+"static/img/dog.b3431d9.png"},function(t,a,e){t.exports=e.p+"static/img/hk.8a1af9b.png"},function(t,a,e){t.exports=e.p+"static/img/resume.209f2c2.pdf"},function(t,a,e){e(26);var s=e(0)(e(8),e(51),"data-v-5ea6bee2",null);t.exports=s.exports},function(t,a,e){e(24);var s=e(0)(e(9),e(49),"data-v-526f62b5",null);t.exports=s.exports},function(t,a,e){e(25);var s=e(0)(e(10),e(50),"data-v-58d0e9d8",null);t.exports=s.exports},function(t,a,e){e(27);var s=e(0)(e(11),e(52),"data-v-62d85801",null);t.exports=s.exports},function(t,a,e){e(21);var s=e(0)(e(12),e(46),"data-v-32e84d1a",null);t.exports=s.exports},function(t,a,e){e(22);var s=e(0)(e(13),e(47),"data-v-3b1b0b7e",null);t.exports=s.exports},function(t,a,e){e(23);var s=e(0)(e(14),e(48),"data-v-4ebaf50e",null);t.exports=s.exports},function(t,a,e){e(19);var s=e(0)(e(15),e(44),"data-v-16eab70b",null);t.exports=s.exports},function(t,a,e){e(28);var s=e(0)(e(16),e(53),"data-v-76b0e1ac",null);t.exports=s.exports},function(t,a,e){e(20);var s=e(0)(e(17),e(45),"data-v-2a043c96",null);t.exports=s.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("router-view",{attrs:{id:"app"}})},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"fixed mt5-ns ph0 pr0 w-auto-ns w-100",attrs:{id:"navbar"}},[e("ul",{staticClass:"flex flex-column-ns flex-row items-center pv2-ns pt3 pb4 ma0"},[e("li",{staticClass:"w-100-ns mb3-ns pr3"},[e("h1",{staticClass:"f3 mv0"},[e("span",{staticClass:"pointer",on:{click:t.emitToggle}},[t._v("🌺")])])]),e("li",{staticClass:"w-100-ns mb3-ns pr2"},[e("router-link",{staticClass:"lh-solid mv0",attrs:{to:"/"}},[t._v("Home")])],1),e("li",{staticClass:"w-100-ns mb3-ns pr2"},[e("router-link",{staticClass:"lh-solid mv0",attrs:{to:"/about"}},[t._v("About")])],1),e("li",{staticClass:"w-100-ns mb3-ns pr2"},[e("router-link",{staticClass:"lh-solid mv0",attrs:{to:"/projects"}},[t._v("Projects")])],1),e("li",{staticClass:"w-100-ns mb3-ns pr2"},[e("router-link",{staticClass:"lh-solid mv0",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"projects"}},[e("h2",{staticClass:"pl-fifth"},[t._v("Projects")]),e("div",{staticClass:"cf"},t._l(t.projects,function(a){return e("article",{staticClass:"fl w-100 mb4"},[a.url?e("h4",{staticClass:"pl-fifth mv0"},[e("a",{attrs:{href:a.url}},[t._v(t._s(a.title))])]):e("h4",{staticClass:"pl-fifth mv0"},[t._v(t._s(a.title))]),t._l(a.list,function(a,s){return a?e("div",{staticClass:"cf"},[e("aside",{staticClass:"fl w-100 w-20-ns"},[e("p",{staticClass:"mb0"},[t._v(t._s(s))])]),e("div",{staticClass:"fl w-100 w-80-ns"},[e("p",{staticClass:"mb0"},[t._v(t._s(a))])])]):t._e()})],2)}))])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-100 v-100 ph-page relative"},[t.showGrid?e("grid"):t._e(),e("navbar",{attrs:{pageIndex:t.pageIndex},on:{toggle:t.toggleGrid}}),e("main",{attrs:{id:"home"}},[e("intro"),e("about"),e("projects"),e("contact")],1),e("links")],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"intro"}},[e("h1",{staticClass:"w-90-l w-100 mt0"},[t._v("Hi 👋, I’m Bernard! "),e("br"),t._v(" Welcome to my little space on the internet.")]),e("p",{staticClass:"f4 w-90-l w-100"},[t._v("I am a Front-end Engineer based in Urbana, IL. "),e("br"),t._v(" Currently I'm studying Statistics & Computer Science at the University of Illinois at Urbana Champaign.")]),e("p",{staticClass:"f4 w-60-l w-100"},[t._v("Say hi on "),e("a",{attrs:{href:"https://twitter.com/_bernardwang/",target:"_blank",alt:"twitter"}},[t._v("Twitter")]),t._v(" or email me at "),e("a",{attrs:{href:"mailto:bernard@bernard.wang",target:"_blank",alt:"email"}},[t._v("bernard@bernard.wang")]),t._v(" 😁.")])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{attrs:{id:"links"}},[e("div",{staticClass:"cf"},[e("div",{staticClass:"fl w-100 w-third-l"},[e("h4",{staticClass:"mb0"},[t._v("Information")]),e("ul",[e("li",{staticClass:"w-100"},[e("p",{staticClass:"f5 mv1"},[t._v("Phone: "),e("a",{attrs:{href:"",target:"_blank",alt:"phone"}},[t._v("+1-973-216-9810")])])]),e("li",{staticClass:"w-100"},[e("p",{staticClass:"f5 mv1"},[t._v("Email: "),e("a",{attrs:{href:"mailto:bernard@bernard.wang",target:"_blank",alt:"email"}},[t._v("bernard@bernard.wang")])])])])]),e("div",{staticClass:"fl w-100 w-third-l"},[e("h4",{staticClass:"mb0"},[t._v("Work")]),e("ul",[e("li",{staticClass:"w-100 cf"},[e("p",{staticClass:"fl f5 mv1 w-30"},[t._v("Github:")]),e("p",{staticClass:"fl f5 mv1 w-70"},[e("a",{attrs:{href:"https://github.com/bernardwang",target:"_blank",alt:"github"}},[t._v("bernardwang")])])]),e("li",{staticClass:"w-100 cf"},[e("p",{staticClass:"fl f5 mv1 w-30"},[t._v("Codepen:")]),e("p",{staticClass:"fl f5 mv1 w-70"},[e("a",{attrs:{href:"https://codepen.io/bernardwang/",target:"_blank",alt:"codepen"}},[t._v("bernardwang")])])]),e("li",{staticClass:"w-100 cf"},[e("p",{staticClass:"fl f5 mv1 w-30"},[t._v("LinkedIn:")]),e("p",{staticClass:"fl f5 mv1 w-70"},[e("a",{attrs:{href:"https://www.linkedin.com/in/bernardwang",target:"_blank",alt:"linkedin"}},[t._v("bernardwang")])])])])]),e("div",{staticClass:"fl w-100 w-third-l"},[e("h4",{staticClass:"mb0"},[t._v("Social")]),e("ul",[e("li",{staticClass:"w-100 cf"},[e("p",{staticClass:"fl f5 mv1 w-30"},[t._v("Twitter:")]),e("p",{staticClass:"fl f5 mv1 w-70"},[e("a",{attrs:{href:"https://twitter.com/_bernardwang/",target:"_blank",alt:"twitter"}},[t._v("_bernardwang")])])]),e("li",{staticClass:"w-100 cf"},[e("p",{staticClass:"fl f5 mv1 w-30"},[t._v("Instagram:")]),e("p",{staticClass:"fl f5 mv1 w-70"},[e("a",{attrs:{href:"https://www.instagram.com/_bernardwang/",target:"_blank",alt:"instgram"}},[t._v("_bernardwang")])])])])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"contact"}},[e("h2",{staticClass:"pl-fifth f2 lh-title"},[t._v("Contact")]),e("div",{staticClass:"cf"},[e("aside",{staticClass:"fl w-100 w-20-ns"},[e("p",{staticClass:"mt3-ns pt1-ns"},[t._v("I’m currently available for projects, lets work together!")])]),e("form",{staticClass:"fl w-100 w-80-ns",attrs:{"accept-charset":"utf-8",action:"https://formspree.io/bernard@bernard.wang",method:"POST"}},[e("fieldset",{staticClass:"ba b--transparent pa0 ma0 cf"},[e("legend",{staticClass:"ph0 mh0 fw6 clip"},[t._v("Submit Message")]),e("div",{staticClass:"form-name fl w-100 w-50-ns mb3"},[e("label",{staticClass:"f6 b db mb2",attrs:{for:"name"}},[t._v("Name")]),e("input",{staticClass:"w-90-ns w-100 pa3 ba bg-transparent",attrs:{id:"name",placeholder:"Boaty McBoatface",type:"text",name:"name","aria-describedby":"name-desc"}})]),e("div",{staticClass:"form-email fl w-100 w-50-ns mb3"},[e("label",{staticClass:"f6 b db mb2",attrs:{for:"email-address"}},[t._v("Email address")]),e("input",{staticClass:"w-90-ns w-100 pa3 ba bg-transparent",attrs:{id:"email",placeholder:"hello@email.com",type:"email",name:"email","aria-describedby":"email-desc"}})]),e("div",{staticClass:"form-msg fl w-100 mb3"},[e("label",{staticClass:"f6 b db mb2",attrs:{for:"message"}},[t._v("Message")]),e("textarea",{staticClass:"pa3 mb2 ba w-100",attrs:{id:"message",placeholder:"Hi Bernard! I'm interested in...",name:"message","aria-describedby":"message-desc"}})])]),e("div",{staticClass:"w-100 w-50-ns"},[e("input",{staticClass:"b pa3 ba bg-transparent pointer f5 w-90-ns w-100",attrs:{id:"submit",value:"SEND →",type:"submit"}}),e("input",{attrs:{type:"hidden",name:"_next",value:"//"}})])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"mt3 cf"},[e("div",{staticClass:"fl w-60-l w-100"},[e("h4",{staticClass:"mb0"},[t._v("Pictures with facts")]),e("div",{staticClass:"flex flex-row item-start mt3"},t._l(t.pictures,function(a){return e("figure",{staticClass:"w-100 w-third-l ma0 pr3"},[e("a",{attrs:{href:a.link,target:"_blank"}},[e("img",{staticClass:"w-80",attrs:{src:a.src}}),e("figcaption",[t._v(t._s(a.caption))])])])}))]),e("div",{staticClass:"fl w-40-l w-100 relative"},[e("h4",{staticClass:"mb0"},[t._v("Current favorites")]),e("div",{staticClass:"w-100 flex flex-column"},[e("p",{staticClass:"f5 mb0 w-100"},[t._v("📚 "),e("span",{staticClass:"ml1"},[t._v("Book: "+t._s(t.favorites.book))])]),e("p",{staticClass:"f5 mb0 w-100"},[t._v("🎵 "),e("span",{staticClass:"ml1"},[t._v("Album: "+t._s(t.favorites.album))])]),e("p",{staticClass:"f5 mb0 w-100"},[t._v("🎙️ "),e("span",{staticClass:"ml1"},[t._v("Podcast: "+t._s(t.favorites.podcast))])])])])])},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"about"}},[e("section",[e("h2",{staticClass:"pl-fifth"},[t._v("About")]),e("div",{staticClass:"cf"},[e("aside",{staticClass:"fl w-100 w-20-ns"},[e("p",{staticClass:"mt0"},[t._v("Interested in my resume? Grab a copy "),e("a",{attrs:{href:t.resumeSrc,target:"_blank",alt:"resume"}},[t._v("here")]),t._v("!")])]),t._m(0)]),e("div",{staticClass:"pl-fifth w-100-ns"},[e("button",{staticClass:"f5 lh-copy mt0 pa0 bn b tl pointer bg-transparent link",on:{click:function(a){t.showFun=!t.showFun}}},[t._v(t._s(t.showFun?"- less":"+ more")+" fun")])])]),t.showFun?e("fun"):t._e()],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"fl w-100 w-80-ns"},[e("div",{staticClass:"fl w-100 w-50-ns"},[e("p",{staticClass:"mt0"},[t._v("I'm excited about applying my background in development and design to advance "),e("a",{attrs:{href:"https://civichall.org/civicist/an-education-in-community-technology/",target:"_blank",alt:"community technology"}},[t._v("community tech")]),t._v(". Specifically, I care about using technology to improve public works and empower community organizing.")])]),e("div",{staticClass:"fl w-100 w-50-ns"},[e("p",{staticClass:"mt0"},[t._v("Most recently, I contributed to "),e("a",{attrs:{href:"https://5calls.org",target:"_blank",alt:"5calls.org"}},[t._v("5calls.org")]),t._v(", an open source app that increases civic engagement through constituent calls.")]),e("p",{staticClass:"mt0"},[t._v("Check out more of my work on my "),e("a",{attrs:{href:"https://github.com/bernardwang",target:"_blank",alt:"github"}},[t._v("Github")]),t._v("!")])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-100 h-100 ph-page absolute absolute--fill cf",attrs:{id:"grid"}},[e("div",{staticClass:"fl w-100 w-third-ns h-100 ba b--near-white"},[e("div",{staticClass:"fl w-100 w-50-ns h-100 ba b--near-white"}),e("div",{staticClass:"fl w-100 w-50-ns h-100 ba b--near-white"})]),e("div",{staticClass:"fl w-100 w-third-ns h-100 ba b--near-white"}),e("div",{staticClass:"fl w-100 w-third-ns h-100 ba b--near-white"})])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-100 v-100 ph-page relative"},[e("main",{attrs:{id:"notfound"}},[e("h1",[t._v("404 Sorry not found")])])])}]}}],[6]);
//# sourceMappingURL=app.62a3a57a6747e6da6886.js.map