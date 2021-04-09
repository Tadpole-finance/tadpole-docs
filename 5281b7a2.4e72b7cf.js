(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{103:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=a.a.createContext({}),s=function(e){var t=a.a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||u[b]||o;return r?a.a.createElement(m,i(i({ref:t},d),{},{components:r})):a.a.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var d=2;d<o;d++)c[d]=r[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},81:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),o=(r(0),r(103)),c={id:"architecture",title:"Tadpole Architecture"},i={unversionedId:"architecture",id:"architecture",isDocsHomePage:!1,title:"Tadpole Architecture",description:"CToken, CErc20 and CEther",source:"@site/docs/architecture.md",slug:"/architecture",permalink:"/docs/architecture",version:"current",sidebar:"someSidebar",previous:{title:"Contract Addresses",permalink:"/docs/contract-addresses"},next:{title:"Smart Contract Methods",permalink:"/docs/methods"}},l=[{value:"CToken, CErc20 and CEther",id:"ctoken-cerc20-and-cether",children:[]},{value:"Comptroller",id:"comptroller",children:[]},{value:"TAD",id:"tad",children:[]},{value:"JumpRateModelV3",id:"jumpratemodelv3",children:[]},{value:"Careful Math",id:"careful-math",children:[]},{value:"ErrorReporter",id:"errorreporter",children:[]},{value:"Exponential",id:"exponential",children:[]},{value:"SafeToken",id:"safetoken",children:[]},{value:"CollateralModel",id:"collateralmodel",children:[]},{value:"CTokenFactory",id:"ctokenfactory",children:[]},{value:"PriceOracleV1",id:"priceoraclev1",children:[]}],d={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"ctoken-cerc20-and-cether"},"CToken, CErc20 and CEther"),Object(o.b)("p",null,"The Tadpole cTokens, which are self-contained borrowing and lending contracts. CToken contains the core logic and CErc20 and CEther add public interfaces for Erc20 tokens and ether, respectively. Each CToken is assigned an interest rate and risk model (see InterestRateModel and Comptroller sections), and allows accounts to ",Object(o.b)("em",{parentName:"p"},"mint")," (supply capital), ",Object(o.b)("em",{parentName:"p"},"redeem")," (withdraw capital), ",Object(o.b)("em",{parentName:"p"},"borrow")," and ",Object(o.b)("em",{parentName:"p"},"repay a borrow"),". Each CToken is an ERC-20 compliant token where balances represent ownership of the market."),Object(o.b)("h2",{id:"comptroller"},"Comptroller"),Object(o.b)("p",null,"The risk model contract, which validates permissible user actions and disallows actions if they do not fit certain risk parameters. For instance, the Comptroller enforces that each borrowing user must maintain a sufficient collateral balance across all cTokens."),Object(o.b)("h2",{id:"tad"},"TAD"),Object(o.b)("p",null,"The Tadpole platform token. Holders of this token have the ability to govern the protocol via the governor contract. TAD is also used to pay the listing fees to add a new ERC-20 to the money markets."),Object(o.b)("h2",{id:"jumpratemodelv3"},"JumpRateModelV3"),Object(o.b)("p",null,"Contracts which define interest rate models. These models algorithmically determine interest rates based on the current utilization of a given market (that is, how much of the supplied assets are liquid versus borrowed)."),Object(o.b)("h2",{id:"careful-math"},"Careful Math"),Object(o.b)("p",null,"Library for safe math operations."),Object(o.b)("h2",{id:"errorreporter"},"ErrorReporter"),Object(o.b)("p",null,"Library for tracking error codes and failure conditions."),Object(o.b)("h2",{id:"exponential"},"Exponential"),Object(o.b)("p",null,"Library for handling fixed-point decimal numbers."),Object(o.b)("h2",{id:"safetoken"},"SafeToken"),Object(o.b)("p",null,"Library for safely handling Erc20 interaction."),Object(o.b)("h2",{id:"collateralmodel"},"CollateralModel"),Object(o.b)("p",null,"Contracts which define collateral rate models. Currently collateral rates are defined manually by admin. Our goal is to make CollateralModel which can determine collateral rates algorithmically based on various variables like the token's liquidity, volatility, etc."),Object(o.b)("h2",{id:"ctokenfactory"},"CTokenFactory"),Object(o.b)("p",null,"A contract factory to generate cToken. To add a new market into Tadpole, user send a request to Comptroller.createMarket() and it will call CTokenFactory to generate a new cToken smart contract into Ethereum network."),Object(o.b)("h2",{id:"priceoraclev1"},"PriceOracleV1"),Object(o.b)("p",null,"Simple price oracle before we move to a more complex oracle to support an open lending ecosystem."))}s.isMDXComponent=!0}}]);