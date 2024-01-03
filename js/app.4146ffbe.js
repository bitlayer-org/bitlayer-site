(function(){"use strict";var e={9951:function(e,t,n){var o=n(3862),a=n(3396);const i=e=>((0,a.dD)("data-v-21700742"),e=e(),(0,a.Cn)(),e),r={class:"loading"},s={class:"box"},c=i((()=>(0,a._)("span",{class:"icon"},null,-1)));function l(e,t){return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",s,[c,(0,a.WI)(e.$slots,"default",{},void 0,!0)])])}var u=n(89);const d={},g=(0,u.Z)(d,[["render",l],["__scopeId","data-v-21700742"]]);var p=g;const f={class:"container"};function m(e,t,n,i,r,s){const c=p;return(0,a.wg)(),(0,a.iD)("div",f,[i.layout?((0,a.wg)(),(0,a.j4)((0,a.LL)(i.layout),{key:0})):(0,a.kq)("",!0),(0,a.wy)((0,a.Wm)(c,null,null,512),[[o.F8,i.loadingShow]])])}n(7658);var v=n(2483);const h=()=>{let e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e};var b=n(65),y=n.p+"img/logo.a1765ddd.svg",A=n(4870),w=n(6856);const I=(0,a.uE)('<div class="right" data-v-30610780><a href="https://medium.com/@BitLayerLabs" target="_blank" class="a-img" data-v-30610780><i class="iconfont icon-blog" data-v-30610780></i></a><a href="https://discord.gg/GGSjNyD8nj" target="_blank" class="a-img" data-v-30610780><i class="iconfont icon-discard" data-v-30610780></i></a><a href="https://github.com/bitlayer-org" target="_blank" class="a-img" data-v-30610780><i class="iconfont icon-github" data-v-30610780></i></a></div>',1);var B={__name:"HeaderNav",setup(e){const{locale:t}=(0,w.QT)(),n=(0,v.tv)(),o=(0,A.qj)({scrollVal:0,langActiveIndex:1,navActiveIndex:Number(localStorage.getItem("navIndex"))||0,dropdownHoverIndex:null}),i=e=>{const n=e||t.value;switch(n){case"zh-TW":o.langActiveIndex=1;break;case"en-US":o.langActiveIndex=2;break;case"ja-JP":o.langActiveIndex=3;break;default:o.langActiveIndex=1;break}};(0,a.bv)((async()=>{i()}));const r=()=>{n.push({path:"/"})};return(e,t)=>((0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",{class:"wrapper"},[(0,a._)("div",{class:"left"},[(0,a._)("img",{src:y,class:"logo",alt:"",onClick:r})]),I])]))}};const P=(0,u.Z)(B,[["__scopeId","data-v-30610780"]]);var C=P,j=n(7139);const F={class:"pc-main-content"};function Q(e,t,n,o,i,r){const s=C,c=(0,a.up)("router-view"),l=(0,a.up)("FooterCom");return(0,a.wg)(),(0,a.iD)("div",{class:(0,j.C_)(["main-layout",o.getLangFontClass])},[(0,a.Wm)(s),(0,a._)("div",F,[(0,a.Wm)(c)]),(0,a.Wm)(l)],2)}var S=n.p+"img/footerlogo.57e1bab0.svg";const H=e=>((0,a.dD)("data-v-7b57fcf6"),e=e(),(0,a.Cn)(),e),k={class:"footer-box",id:"footer"},z={class:"wrapper"},L={class:"footer-content"},D={class:"content-box"},O=H((()=>(0,a._)("img",{class:"logo",width:"190",src:S,alt:""},null,-1))),R=["innerHTML"],M=H((()=>(0,a._)("a",{href:"mailto:business@bitlayer.org",class:"email"}," business@bitlayer.org ",-1))),E=H((()=>(0,a._)("div",{class:"site-info"},[(0,a._)("p",null,"Copyright © 2023 All Rights Reserved")],-1)));var T={__name:"Footer",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",z,[(0,a._)("div",L,[(0,a._)("div",D,[O,(0,a._)("p",{class:"info",innerHTML:e.$t("footer.sloganDes")},null,8,R),M]),E])])]))}};const x=(0,u.Z)(T,[["__scopeId","data-v-7b57fcf6"]]);var N=x,W={components:{HeaderNav:C,FooterCom:N},setup(){const{locale:e}=(0,w.QT)(),t=(0,b.oR)(),n=(0,a.Fl)((()=>{const t="en-US"===e.value?"font_en":"font_zh";return t})),o=(0,a.Fl)((()=>t.state.modal.walletModal)),i=(0,a.Fl)((()=>t.state.modal.disconnectModal));return{getLangFontClass:n,walletListShow:o,disconnectShow:i}}};const G=(0,u.Z)(W,[["render",Q],["__scopeId","data-v-290b2b3c"]]);var J=G,U="data:image/png;base64,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";const Y=(0,a.uE)('<div class="right" data-v-86b04560><a href="https://medium.com/@BitLayerLabs" target="_blank" class="a-img" data-v-86b04560><i class="icon icon-blog1" data-v-86b04560></i></a><a href="https://discord.gg/GGSjNyD8nj" target="_blank" class="a-img" data-v-86b04560><i class="icon icon-discord" data-v-86b04560></i></a><a href="https://github.com/bitlayer-org" target="_blank" class="a-img" data-v-86b04560><i class="icon icon-github1" data-v-86b04560></i></a></div>',1);var X={__name:"header",setup(e){const{locale:t}=(0,w.QT)(),n=(0,v.tv)(),o=(0,A.qj)({scrollVal:0,langActiveIndex:1,navActiveIndex:Number(localStorage.getItem("navIndex"))||0,dropdownHoverIndex:null}),i=e=>{const n=e||t.value;switch(n){case"zh-TW":o.langActiveIndex=1;break;case"en-US":o.langActiveIndex=2;break;case"ja-JP":o.langActiveIndex=3;break;default:o.langActiveIndex=1;break}};(0,a.bv)((async()=>{i()}));const r=()=>{n.push({path:"/"})};return(e,t)=>((0,a.wg)(),(0,a.iD)("header",null,[(0,a._)("div",{class:"left"},[(0,a._)("img",{src:U,class:"logo",onClick:r})]),Y]))}};const V=(0,u.Z)(X,[["__scopeId","data-v-86b04560"]]);var Z=V,K=n.p+"img/logo_footer.41c9260e.png";const q=e=>((0,a.dD)("data-v-ccb92472"),e=e(),(0,a.Cn)(),e),_={class:"footer-box",id:"footer"},$={class:"max-width footer-content"},ee={class:"content-box"},te=q((()=>(0,a._)("img",{class:"logo",src:K,alt:""},null,-1))),ne=["innerHTML"],oe=q((()=>(0,a._)("a",{href:"mailto:business@bitlayer.org",class:"email"}," business@bitlayer.org ",-1))),ae=q((()=>(0,a._)("div",{class:"site-info"},[(0,a._)("p",null,"Copyright © 2023 All Rights Reserved")],-1)));var ie={__name:"footer",setup(e){return(e,t)=>((0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("div",$,[(0,a._)("div",ee,[te,(0,a._)("p",{innerHTML:e.$t("footer.sloganDes")},null,8,ne),oe]),ae])]))}};const re=(0,u.Z)(ie,[["__scopeId","data-v-ccb92472"]]);var se=re;n(5110);const ce={class:"m-main-content"};var le={__name:"mDefault",setup(e){const{locale:t,t:n}=(0,w.QT)();window.$t=n;const o=(0,a.Fl)((()=>{const e="zh-TW"===t.value?"":"font_en";return e}));return(e,t)=>{const n=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",{class:(0,j.C_)(["main-layout",(0,A.SU)(o)])},[(0,a.Wm)(Z),(0,a._)("div",ce,[(0,a.Wm)(n)]),(0,a.Wm)(se)],2)}}};const ue=(0,u.Z)(le,[["__scopeId","data-v-eb4b57d6"]]);var de=ue,ge={components:{pcDefault:J,mDefault:de,Loading:p},setup(){const e=(0,v.tv)(),t=(0,b.oR)(),n=()=>{"/"!==location.pathname?e.push({path:location.pathname}):(h(),e.push({path:"/"}))};n();const o=(0,a.Fl)((()=>e.currentRoute.value.meta.layout||"limit")),i=(0,a.Fl)((()=>t.state.loadingShow));return{layout:o,loadingShow:i}}};const pe=(0,u.Z)(ge,[["render",m]]);var fe=pe;const me=[{path:"/",redirect:{name:"home"}},{path:"/pc/home",redirect:{name:"home"}},{path:"/",name:"home",component:()=>n.e(52).then(n.bind(n,1688)),meta:{layout:"pcDefault"}}],ve=[{path:"/",redirect:{name:"h5Home"}},{path:"/h5/home",redirect:{name:"h5Home"}},{path:"/",name:"h5Home",component:()=>n.e(384).then(n.bind(n,384)),meta:{layout:"mDefault"}}];var he=n(5941);he.log(h());const be=[],ye=h()?[...be,...ve]:[...be,...me],Ae=(0,v.p7)({history:(0,v.PO)("/"),routes:ye});Ae.afterEach((()=>{window.scrollTo(0,0)}));var we=Ae,Ie=n(2415),Be={},Pe=(0,b.MT)({state:{browserEev:"bitlayer-test",loadingShow:!1,modal:{},connectWalletList:[]},mutations:{changeLoading(e,t){e.loadingShow=t},changeModal(e,t){document.body.className=t.val?"page-no-scroll":"",e.modal[t.name]=t.val},getUserAddress(e,t){e.userAddress=t}},modules:Be,actions:{},plugins:[(0,Ie.Z)({storage:window.sessionStorage})]});const Ce={};var je=Ce;const Fe={nav:{home:"Home"},footer:{des:"We are the world's largest repository of professionally edited and narrated Supreme Court opinions.",update:"Get more update:",enterAddress:"Enter your email address ...",Subscribe:"Subscribe",nav:"Navigation",About:"About",Library:"Library",Contact:"Contact",Register:"Register",policy:"Terms and Conditions - Privacy Policy",sloganDes:"To become the computing layer  of Bitcoin"},home:{slogan:"The First <span class='two'>Bitcoin security - equivalent </span>Layer2<br/>based on BitVM",h5Slogan:"The First <br/> <span class='two'>Bitcoin security- <br/> equivalent </span> <br/> Layer2 based on BitVM",WhitePaper:"Whitepaper",Bridge:"Bridge into Bitlayer",Mission:" Bitlayer’s Mission",MissionTitle:"To become the computing layer of Bitcoin",MissList:{title1:"Bitcoin security-equivalent",des1:"Bitcoin L1 verification aims for bitcoin-equivalent security. This results in a secure and open development enviroment.",title2:"Build on BitVM",des2:"We build on BitVM and contribute to BitVM. Therefore, Bitcoin can eventually compute everything.",title3:"BitRC-20",des3:"The innovative BitRC-20 asset framework fills the ecosystem with rich asset classes."},communityTitle:"Join the community",community:{title1:"Contribute to Bitlayer",title2:"Join the Discord",title3:"Follow on X",title4:"Explore open positions"}}};var Qe=Fe;const Se={};var He=Se,ke=n(5941);const ze=()=>{ke.log("navigator.language",navigator.language);const e=navigator.language||"";return localStorage.getItem("langType")?localStorage.getItem("langType"):"zh-TW"===e||"en-US"===e||"ja-JP"===e?e:"en-US"},Le=(0,w.o)({legacy:!1,globalInjection:!0,locale:ze(),messages:{"zh-TW":je,"en-US":Qe,"ja-JP":He}});var De=Le,Oe=n(5498);n(4415);const Re={class:"toast-content"};function Me(e,t,n,i,r,s){return(0,a.wg)(),(0,a.j4)(o.uT,{name:"fade"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,j.C_)(["toast",e.type])},[(0,a._)("div",Re,[(0,a._)("span",null,(0,j.zw)(e.msg),1)])],2)])),_:1})}var Ee=(0,a.aZ)({name:"Toast",props:{type:{type:String,default:""},imgIconType:{type:String,default:""},message:{type:String,default:""}},setup(e){let t=(0,A.iH)("");return(0,a.YP)((()=>e.message),(e=>{t.value=e})),{msg:t}}});const Te=(0,u.Z)(Ee,[["render",Me],["__scopeId","data-v-02dd2cbc"]]);var xe=Te,Ne={install:e=>{let t=!1;e.config.globalProperties.$myToast=function(e){if(!t){t=!0;let n=(0,a.Wm)(xe),i=document.createElement("div");(0,o.sY)(n,i),document.body.appendChild(i),n.component.props.message=e.message||"",n.component.props.type=e.type||"",n.component.props.imgIconType=e.imgIconType||"";let r=e.duration||3e3;setTimeout((()=>{document.body.removeChild(i),t=!1,e.onClose&&e.onClose()}),r)}}}},We=n(7516);(0,o.ri)(fe).use(Pe).use(we).use(De).use(Ne).use(Oe.Z).use(We.ZP).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<r&&(r=i));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{52:"b3dfe5b7",384:"ee27d809"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{52:"fe9d3529",384:"e078fa8d"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="Bitlayer:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[a];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var r=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=r,c.request=s,i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=r,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===e||i===t)return a}},o=function(o){return new Promise((function(a,i){var r=n.miniCssF(o),s=n.p+r;if(t(r,s))return a();e(o,s,null,a,i)}))},a={143:0};n.f.miniCss=function(e,t){var n={52:1,384:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",s.name="ChunkLoadError",s.type=i,s.request=r,a[1](s)}};n.l(r,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],s=o[1],c=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(o);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkBitlayer"]=self["webpackChunkBitlayer"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9951)}));o=n.O(o)})();
//# sourceMappingURL=app.4146ffbe.js.map