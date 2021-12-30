(()=>{"use strict";var e,t={898:(e,t,r)=>{var n=r(363),a=r.n(n);const o=ReactDOM;var l=r.n(o),i=r(711),c=r(974),s=r(163);const u=s.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2%;
  height: 100%;
`,d=s.ZP.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3%;
  margin: 0 5%;
  flex-wrap: wrap;
`,m=s.ZP.span`
  font-size: 40px;
  font-weight: bold;
  color: #3e3e3e;
`;var p,f,h,g,v,x,b,w,E;function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}const y=function(e){return n.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58.189 58.189"},e),p||(p=n.createElement("path",{d:"M29.095 39.268h9.446c1.701 0 3.346.609 4.638 1.716l9.128 7.828c.611.524 1.505.614 2.184.183 9.496-6.01-2.022-29.728-4.305-34.034-.242-.457-.641-2.936-1.126-3.113l-7.676-2.791a2.248 2.248 0 00-2.017.242s-2.164 1.383-2.649 1.383H21.744c-.485 0-2.921-1.383-2.921-1.383a2.25 2.25 0 00-2.017-.242L9.13 11.848c-.486.177-.884 2.656-1.126 3.113-2.283 4.306-13.801 28.024-4.305 34.034.68.43 1.574.34 2.184-.183l9.128-7.828a7.129 7.129 0 014.638-1.716h9.446z",fill:"#38454f"})),f||(f=n.createElement("circle",{cx:36.786,cy:30.268,r:4,fill:"#546a79"})),h||(h=n.createElement("circle",{cx:13.786,cy:20.268,r:4,fill:"#546a79"})),g||(g=n.createElement("circle",{cx:43.786,cy:16.268,r:2,fill:"#ebba16"})),v||(v=n.createElement("circle",{cx:39.786,cy:20.268,r:2,fill:"#7383bf"})),x||(x=n.createElement("circle",{cx:47.786,cy:20.268,r:2,fill:"#d75a4a"})),b||(b=n.createElement("circle",{cx:43.786,cy:24.268,r:2,fill:"#61b872"})),w||(w=n.createElement("path",{d:"M31.786 11.712c0-.192-.019-.38-.054-.561a1.077 1.077 0 00-.215-.469h-2.479c-.085.007-.165.03-.251.03-.087 0-.167-.022-.251-.03h-2.489a1 1 0 00-.192.4 3.007 3.007 0 000 1.271 3.014 3.014 0 002.404 2.314 3.002 3.002 0 003.527-2.955z",fill:"#afb6bb"})),E||(E=n.createElement("path",{d:"M27.286 27.921H24v-3.286a.714.714 0 00-.714-.714h-2.571a.714.714 0 00-.714.714v3.286h-3.286a.714.714 0 00-.714.714v2.571c0 .395.32.714.714.714H20v3.286c0 .395.32.714.714.714h2.571c.395 0 .714-.32.714-.714V31.92h3.286c.395 0 .714-.32.714-.714v-2.571a.713.713 0 00-.713-.714z",fill:"#546a79"})))},C=({GameGridComponent:e,ControlsComponent:t})=>a().createElement(u,null,a().createElement(d,null,a().createElement(y,{width:60,height:60}),a().createElement(m,null,"Conway's Game of Life")),a().createElement(e,null),a().createElement(t,null)),k=s.ZP.div`
  display: flex;
  flex-grow: 9;
  // height: 600px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #3e3e3e;
  box-shadow: 3px 3px 4px 0px #64f096;
`,R=s.ZP.canvas`
  width: 100%; 
  height: 100%;  
`,G=({viewModel:e})=>a().createElement(k,{id:"canvas-container"},a().createElement(R,{ref:e.canvasRef})),M=s.ZP.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
  gap: 1%;
  margin: 0 5%;

  @media(max-width: 700px) {
    flex-wrap: wrap;
  }
`,O=s.ZP.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`,P=s.ZP.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`,B=s.ZP.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`,L=s.ZP.button`
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  width: 120px;
  font-weight: bold;
  color: #027b2d;

  &:hover {
    background-color: #78a889;
    color: white;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`,z=s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`,_=s.ZP.input`
  outline: none;
`,T=s.ZP.select`
  width: 212px;
  height: 35px;
  padding: 8px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  color: #027b2d;
  font-weight: bold;
  outline: none;

  &:disabled {
    opacity: 0.4;
    background: #efefefd4;
  }

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`;var I,Z,N;function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}const H=function(e){return n.createElement("svg",j({id:"velocity_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},e),I||(I=n.createElement("defs",null,n.createElement("style",null,".velocity_svg__cls-2{fill:#2d3e50}"))),Z||(Z=n.createElement("path",{d:"M106.99 41.916c-2.447-2.028-4.689-.712-6.162.456-7.624 6.038-14.046 10.769-20.93 15.98-7.576 5.736-15.41 11.667-23.82 18.394-6.393 5.114-7.88 12.127-4.078 19.24 1.063 2.32 3.556 4.38 6.844 5.648a14.197 14.197 0 005.132 1c4.566 0 8.776-2.455 12.003-7.14 6.46-9.382 11.92-17.632 17.699-26.368 4.51-6.817 8.48-13.208 13.64-20.806 1.642-2.42 1.517-4.873-.329-6.404z",fill:"#027b2d"})),N||(N=n.createElement("path",{className:"velocity_svg__cls-2",d:"M64.002 38.076a49.132 49.132 0 0118.558 5.45c.85.446 1.689.922 2.504 1.423.83-.653 1.659-1.31 2.484-1.964q5.037-3.99 10.079-7.972a62.62 62.62 0 00-9.112-4.699 59.952 59.952 0 00-1.841-.74A63.014 63.014 0 001.02 88.342h5.646a56.291 56.291 0 015.99-21.262A54.661 54.661 0 0125.96 50.3a52.828 52.828 0 0118.13-10.04 51.036 51.036 0 0119.912-2.185zM126.98 88.343q0-.611-.015-1.222a4.469 4.469 0 00.01-.516c-.098-2.445-.25-4.904-.59-7.33a62.08 62.08 0 00-11.635-28.469l-4.595 6.77-6.195 9.131a44.628 44.628 0 011.6 4.429 44.163 44.163 0 011.645 17.207z"})))},A=({viewModel:e})=>a().createElement(M,null,a().createElement(T,{id:"seeds",name:"seeds",onChange:t=>e.onSelectChange(t.target.value),onFocus:()=>e.onSelectFocus(),value:e.seedSelected,disabled:e.gameStarted},a().createElement("option",{key:"Select-0",value:"Select",style:{cursor:"pointer"}},"SELECT AN INITIAL SEED"),a().createElement("option",{key:"Random-1",value:"Random",style:{cursor:"pointer"}},"RANDOM"),e.SeedsNameArray.map(((t,r)=>a().createElement("option",{key:r,value:t,style:{cursor:"pointer"}},e.SeedsNameToShowInTheScreen[t].toUpperCase())))),a().createElement(O,{onClick:t=>e.onClickStartGameBtn(t),disabled:e.gameStarted},"Start"),a().createElement(z,null,a().createElement(H,{width:30}),a().createElement(_,{type:"range",id:"generationSpeed",name:"generationSpeed",min:1,max:50,defaultValue:1,onChange:t=>e.onSliderPositionCallback(t)})),a().createElement(P,{onClick:t=>e.onClickStopGameBtn(t),disabled:!e.gameStarted},"Stop"),a().createElement(B,{onClick:t=>e.onClickResetGameBtn(t)},"Reset"),a().createElement(L,{onClick:t=>e.onClickCentralizeGameBtn(t)},"Centralize")),D=(0,n.createContext)(null),W=({children:e})=>{const[t,r]=(0,n.useState)([]),o=(0,n.useRef)([]),[l,i]=(0,n.useState)(null),[c,s]=(0,n.useState)(1),[u,d]=(0,n.useState)(20),[m,p]=(0,n.useState)(0),[f,h]=(0,n.useState)(0),g=(0,n.useRef)({x:0,y:0}),v=(0,n.useRef)(0),x={matrix:t,setMatrix:r,ticksInterval:l,setTicksInterval:i,generationSpeed:c,setGenerationSpeed:s,matrixRef:o,cellSize:u,setCellSize:d,canvasWidth:m,setCanvasWidth:p,canvasHeight:f,setCanvasHeight:h,dragRef:g,generateMatrix:(e=!1)=>{let n=[];e||(n=[...t]);for(let e=0;e<m;e++){n[e]||(n[e]=[]);for(let t=0;t<f;t++)n[e][t]||(n[e][t]=0)}o.current=n,r(n)},scaleRef:v,CELL_SIZE:20};return a().createElement(D.Provider,{value:x}," ",e," ")},F=()=>{const{matrix:e,setMatrix:t,cellSize:r,setCellSize:a,canvasWidth:o,setCanvasWidth:l,canvasHeight:i,setCanvasHeight:c,dragRef:s,generateMatrix:u,scaleRef:d,matrixRef:m}=(0,n.useContext)(D),p=(0,n.useRef)(null),f=(0,n.useRef)(null),[h,g]=(0,n.useState)(null),v=(0,n.useRef)(!1),x=(0,n.useRef)(!1),[b,w]=(0,n.useState)({x:0,y:0});(0,n.useEffect)((()=>(O(),E(),p.current.addEventListener("mousedown",k),p.current.addEventListener("mouseup",R),p.current.addEventListener("mousemove",G),p.current.addEventListener("mousewheel",P,!1),window.addEventListener("resize",M),function(){p.current.removeEventListener("mousedown",k),p.current.removeEventListener("mouseup",R),p.current.removeEventListener("mousemove",G),p.current.removeEventListener("mousewheel",P,!1),window.removeEventListener("resize",M)})),[]),(0,n.useEffect)((()=>{S()}),[e,b,r]),(0,n.useEffect)((()=>{E(),u(),S()}),[i,o]);const E=()=>{const e=p.current;e.width=o,e.height=i;const t=e.getContext("2d");t.fillStyle="rgb(100, 240, 150)",t.strokeStyle="rgb(90, 90, 90)",t.lineWidth=1,f.current=t,g(t)},S=()=>{C(),y();const t=e.length;for(let n=0;n<t;n++)for(let t=0;t<e[n].length;t++)1===e[n][t]&&f.current.fillRect(t*r+1+s.current.x,n*r+1+s.current.y,r-1,r-1)},y=()=>{for(let e=s.current.x%r;e<o;e+=r)f.current.beginPath(),f.current.moveTo(e+.5,0),f.current.lineTo(e+.5,i),f.current.stroke();for(let e=s.current.y%r;e<i;e+=r)f.current.beginPath(),f.current.moveTo(0,e+.5),f.current.lineTo(o,e+.5),f.current.stroke()},C=()=>{f.current.clearRect(0,0,p.current.width,p.current.height)},k=(0,n.useCallback)((e=>{e.preventDefault(),v.current=!0}),[]),R=(0,n.useCallback)((e=>{e.preventDefault(),v.current=!1,(e=>{if(x.current)return;const n=e.offsetX,a=Math.ceil(e.offsetY-1*Math.ceil(e.offsetY/r)-Math.ceil(e.offsetY/r)*(1/4)),o=Math.max(a,1),l=e.target.width,i=e.target.height,c=Math.round(l/r),s=Math.round(i/r);let u=0,d=0;for(let e=0;e<c*r&&!(n>e&&n<=e+r);e+=r)u++;for(let e=0;e<s*r&&!(o>e&&o<=e+r);e+=r)d++;let p=JSON.parse(JSON.stringify(m.current));p[d][u]=1,m.current=p,t(p)})(e),x.current=!1}),[]),G=(0,n.useCallback)((e=>{if(e.preventDefault(),!v.current)return;x.current=!0;const t=e.movementX+s.current.x,r=e.movementY+s.current.y;s.current={x:t,y:r},w({x:t,y:r})}),[]),M=(0,n.useCallback)((()=>{O()}),[]),O=()=>{const e=document.getElementById("canvas-container"),t=e.offsetWidth,n=e.offsetHeight,a=n-n%r+1;l(t-t%r),c(a)},P=(0,n.useCallback)((e=>{e.preventDefault(),e.stopPropagation();const t=d.current;let n=d.current;n+=-.01*e.deltaY,n=Math.min(Math.max(-3,n),3),d.current=n;if(t===n)return;let o=r;t<n?o*=2:o/=2,o>160?o=160:o<2.5&&(o=2.5),a(o)}),[]);return{canvasRef:p}},J=["Beehive","BlinkerOscillator","Beacon","Glider","SmallExploder","Exploder","TenCellRow","LightweightSpaceship","Tumbler","GosperGliderGun"],Y={Beehive:"Beehive",BlinkerOscillator:"Blinker Oscillator",Beacon:"Beacon",Glider:"Glider",SmallExploder:"Small Exploder",Exploder:"Exploder",TenCellRow:"Ten Cell Row",LightweightSpaceship:"Lightweight Spaceship",Tumbler:"Tumbler",GosperGliderGun:"Gosper Glider Gun"},U={Beehive:e=>(e=>{e[20][20]=1,e[20][21]=1,e[21][19]=1,e[21][22]=1,e[22][20]=1,e[22][21]=1})(e),BlinkerOscillator:e=>(e=>{e[20][20]=1,e[20][21]=1,e[20][22]=1})(e),Beacon:e=>(e=>{e[20][20]=1,e[20][21]=1,e[21][20]=1,e[22][23]=1,e[23][22]=1,e[23][23]=1})(e),Glider:e=>(e=>{e[20][20]=1,e[21][21]=1,e[22][19]=1,e[22][20]=1,e[22][21]=1})(e),SmallExploder:e=>(e=>{e[20][20]=1,e[21][19]=1,e[21][20]=1,e[21][21]=1,e[22][19]=1,e[22][21]=1,e[23][20]=1})(e),Exploder:e=>(e=>{e[20][18]=1,e[20][20]=1,e[20][22]=1,e[21][18]=1,e[21][22]=1,e[22][18]=1,e[22][22]=1,e[23][18]=1,e[23][22]=1,e[24][18]=1,e[24][20]=1,e[24][22]=1})(e),TenCellRow:e=>(e=>{e[20][15]=1,e[20][16]=1,e[20][17]=1,e[20][18]=1,e[20][19]=1,e[20][20]=1,e[20][21]=1,e[20][22]=1,e[20][23]=1,e[20][24]=1})(e),LightweightSpaceship:e=>(e=>{e[20][15]=1,e[20][16]=1,e[20][17]=1,e[20][18]=1,e[21][14]=1,e[21][18]=1,e[22][18]=1,e[23][15]=1,e[23][17]=1})(e),Tumbler:e=>(e=>{e[20][18]=1,e[20][19]=1,e[20][21]=1,e[20][22]=1,e[21][18]=1,e[21][19]=1,e[21][21]=1,e[21][22]=1,e[22][19]=1,e[22][21]=1,e[23][17]=1,e[23][19]=1,e[23][21]=1,e[23][23]=1,e[24][17]=1,e[24][19]=1,e[24][21]=1,e[24][23]=1,e[25][17]=1,e[25][18]=1,e[25][22]=1,e[25][23]=1})(e),GosperGliderGun:e=>(e=>{e[20][10]=1,e[20][11]=1,e[21][10]=1,e[21][11]=1,e[20][19]=1,e[20][20]=1,e[21][18]=1,e[21][20]=1,e[22][18]=1,e[22][19]=1,e[22][26]=1,e[22][27]=1,e[23][26]=1,e[23][28]=1,e[24][26]=1,e[20][32]=1,e[20][33]=1,e[19][32]=1,e[19][34]=1,e[18][33]=1,e[18][34]=1,e[30][34]=1,e[30][35]=1,e[30][36]=1,e[31][34]=1,e[32][35]=1,e[19][44]=1,e[19][45]=1,e[18][44]=1,e[18][45]=1,e[25][45]=1,e[25][46]=1,e[26][45]=1,e[26][47]=1,e[27][45]=1})(e)},V=()=>{const e=F();return a().createElement(G,{viewModel:e})},q=()=>{const e=(()=>{const{matrix:e,setMatrix:t,matrixRef:r,ticksInterval:a,setTicksInterval:o,generationSpeed:l,setGenerationSpeed:i,canvasWidth:c,canvasHeight:s,generateMatrix:u,dragRef:d}=(0,n.useContext)(D),[m,p]=(0,n.useState)(!1),[f,h]=(0,n.useState)("Select");(0,n.useEffect)((()=>{if(null===a)return;clearInterval(a);const e=setInterval((()=>v()),1e3*l);o(e)}),[l]);const g=e=>{e.stopPropagation(),m&&(clearInterval(a),o(null),p(!1))},v=()=>{let e=JSON.parse(JSON.stringify(r.current));r.current.forEach(((t,n)=>{t.forEach(((t,a)=>{const o=w(n,a,r.current);1===t?x(n,a,e,o):b(n,a,e,o)}))})),r.current=e,t(e)},x=(e,t,r,n)=>{2!==n&&3!==n&&(r[e][t]=0)},b=(e,t,r,n)=>{3===n&&(r[e][t]=1)},w=(e,t,r)=>e>=1&&e<=c-2&&t>=1&&t<=s-2?[r[e][t-1],r[e][t+1],r[e-1][t-1],r[e-1][t],r[e-1][t+1],r[e+1][t-1],r[e+1][t],r[e+1][t+1]].filter((e=>1===e)).length:0,E=(0,n.useCallback)((e=>{const t=parseInt(e.target.value);i(0!==t?1/t:1)}),[]);return{onClickStartGameBtn:e=>{if(e.stopPropagation(),null!==a)return;const t=setInterval((()=>v()),1e3*l);o(t),p(!0)},onClickStopGameBtn:g,onClickResetGameBtn:e=>{e.stopPropagation(),g(e),d.current={x:0,y:0},u(!0),p(!1)},onClickCentralizeGameBtn:e=>{e.stopPropagation(),d.current={x:0,y:0},u()},onSliderPositionCallback:E,gameStarted:m,SeedsNameArray:J,onSelectChange:n=>{if("Select"===n||m)return;const a=[...e];if("Random"!==n)U[n](a);else{const e=Math.floor(Math.random()*J.length);U[J[e]](a)}r.current=a,h(n),t(a)},SeedsNameToShowInTheScreen:Y,seedSelected:f,onSelectFocus:()=>{h("Select")}}})();return a().createElement(A,{viewModel:e})},X=()=>a().createElement(W,null,a().createElement(C,{GameGridComponent:V,ControlsComponent:q})),K=()=>a().createElement(i.VK,{basename:"/Conway-Game-Of-Life-React"},a().createElement(c.Z5,null,a().createElement(c.AW,{path:"/",element:a().createElement(X,null)})));const Q=function(){return a().createElement(K,null)},$=s.vJ`
  body {
    margin: 0;
    padding-bottom: 20px;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #949494;
  }
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;l().render(a().createElement(a().StrictMode,null,a().createElement($,null),a().createElement(Q,null)),document.getElementById("root"))},363:e=>{e.exports=React}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],i=!0,c=0;c<r.length;c++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[c])))?r.splice(c--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,i,c]=r,s=0;if(l.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(c)var u=c(n)}for(t&&t(r);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[l[s]]=0;return n.O(u)},r=self.webpackChunkConway_Game_Of_Life_React=self.webpackChunkConway_Game_Of_Life_React||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[423],(()=>n(898)));a=n.O(a)})();