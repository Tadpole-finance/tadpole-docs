(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var a=r(0),o=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(r),b=a,m=p["".concat(i,".").concat(b)]||p[b]||u[b]||n;return r?o.a.createElement(m,l(l({ref:t},s),{},{components:r})):o.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return d}));var a=r(3),o=r(7),n=(r(0),r(105)),i={id:"developer-rewards",title:"Developer Rewards Program"},l={unversionedId:"developer-rewards",id:"developer-rewards",isDocsHomePage:!1,title:"Developer Rewards Program",description:"Earn TAD token by contributing Tadpole Finance development",source:"@site/docs/developer-rewards.md",slug:"/developer-rewards",permalink:"/docs/developer-rewards",version:"current",sidebar:"someSidebar",previous:{title:"How to Test",permalink:"/docs/testnet-platform"},next:{title:"Contract Addresses",permalink:"/docs/contract-addresses"}},c=[{value:"What is Developer Rewards program?",id:"what-is-developer-rewards-program",children:[]},{value:"How do I participate in Developer Rewards Program?",id:"how-do-i-participate-in-developer-rewards-program",children:[]},{value:"How are the rewards calculated?",id:"how-are-the-rewards-calculated",children:[]},{value:"How long will Developer Rewards program be held?",id:"how-long-will-developer-rewards-program-be-held",children:[]},{value:"How do I get more information about technical details of Tadpole Finance?",id:"how-do-i-get-more-information-about-technical-details-of-tadpole-finance",children:[]},{value:"How do I ask if I have some questions regarding this program?",id:"how-do-i-ask-if-i-have-some-questions-regarding-this-program",children:[]}],s={rightToc:c};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Earn TAD token by contributing Tadpole Finance development"),Object(n.b)("h3",{id:"what-is-developer-rewards-program"},"What is Developer Rewards program?"),Object(n.b)("p",null,"Tadpole Finance is managed as an open source project. We invite all developers to participate in developing this project. As the reward, 10% of the TAD supply (Tadpole Finance platform token) will be distributed to developers who contribute to the Tadpole Finance codebase."),Object(n.b)("h3",{id:"how-do-i-participate-in-developer-rewards-program"},"How do I participate in Developer Rewards Program?"),Object(n.b)("p",null,"Participating this program is very easy. You can find issues you want to resolve and features you want to develop through official Github and roadmap. You can participate in all repositories, both smart contracts, frontend, and other supporting infrastructure."),Object(n.b)("p",null,"To get started, please fork the repository at ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Tadpole-finance"}),"https://github.com/Tadpole-finance")," to your personal Github account. And after developing an issue or a feature, feel free to make a pull request to the main repositories. Your pull request will go through the review stage. And if the code review passes, your code will be merged and you are entitled to a reward."),Object(n.b)("p",null,"Pull Requests eligible for rewards must have the following criteria:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In accordance with the roadmap and objectives of Tadpole Finance."),Object(n.b)("li",{parentName:"ul"},"Describe in detail the changes, improvements or improvements that have been made."),Object(n.b)("li",{parentName:"ul"},"Include test results (if any)."),Object(n.b)("li",{parentName:"ul"},"Applies to all repositories on Github @ Tadpole-finance"),Object(n.b)("li",{parentName:"ul"},"PR is not just fixing typos / grammar.")),Object(n.b)("h3",{id:"how-are-the-rewards-calculated"},"How are the rewards calculated?"),Object(n.b)("p",null,"The distribution of rewards will be measured based on a score that represents the level of difficulty and the significance of your contribution to the Tadpole Finance ecosystem. Score is defined as follows:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"score: very-low (1)"),Object(n.b)("li",{parentName:"ul"},"score: low (2)"),Object(n.b)("li",{parentName:"ul"},"score: medium-low (3)"),Object(n.b)("li",{parentName:"ul"},"score: medium (5)"),Object(n.b)("li",{parentName:"ul"},"score: medium-high (8)"),Object(n.b)("li",{parentName:"ul"},"score: high (13)"),Object(n.b)("li",{parentName:"ul"},"score: very-high (21)"),Object(n.b)("li",{parentName:"ul"},"score: critical (34)")),Object(n.b)("p",null,"*) the numbers are calculated based on fibonacci if you are curious."),Object(n.b)("p",null,"The core developers will determine a score for each incoming pull request by assigning a label to it. The score is subjective and final."),Object(n.b)("p",null,"Every month, a reward of 8333 TAD will be distributed to contributors by calculating from the ratio of score obtained by each developer compared to the total score issued for that month."),Object(n.b)("p",null,'For example, user1 made a pull request "fix rounding bugs" and this is labeled as \u201cscore:very-low(1)\u201d. At the end of the month, the total score from all pull requests is 97. The calculation of the reward obtained by user1 is:'),Object(n.b)("p",null,"1/97 * 8333 = 85.90 TAD"),Object(n.b)("p",null,"After the calculation is finished, user1 will get 85.90 TAD in his Ethereum wallet. The reward will be distributed around the 10th of each month."),Object(n.b)("h3",{id:"how-long-will-developer-rewards-program-be-held"},"How long will Developer Rewards program be held?"),Object(n.b)("p",null,"This rewards program will last for 1 year, starting from December 2020."),Object(n.b)("h3",{id:"how-do-i-get-more-information-about-technical-details-of-tadpole-finance"},"How do I get more information about technical details of Tadpole Finance?"),Object(n.b)("p",null,"Check our ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/tadpole-finance"}),"GitHub repositories")," and ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://doc.tadpole.finance/"}),"this documentation portal"),". We will keep adding more technical documentations from time to time."),Object(n.b)("h3",{id:"how-do-i-ask-if-i-have-some-questions-regarding-this-program"},"How do I ask if I have some questions regarding this program?"),Object(n.b)("p",null,"Let\u2019s discuss them at dev Telegram group: ",Object(n.b)("a",Object(a.a)({parentName:"p"},{href:"https://t.me/TadpoleFinance"}),"https://t.me/TadpoleFinance"),"."))}d.isMDXComponent=!0}}]);