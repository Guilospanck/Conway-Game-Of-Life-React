(()=>{"use strict";var e,t={898:(e,t,r)=>{var n=r(363),a=r.n(n);const o=ReactDOM;var l=r.n(o),c=r(711),i=r(974),s=r(163);const u=s.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3%;
`,d=s.ZP.span`
  font-size: 40px;
  font-weight: bold;
  color: #3e3e3e;
`;var p,m,f,h,v,g,x,b,E;function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}const y=function(e){return n.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58.189 58.189"},e),p||(p=n.createElement("path",{d:"M29.095 39.268h9.446c1.701 0 3.346.609 4.638 1.716l9.128 7.828c.611.524 1.505.614 2.184.183 9.496-6.01-2.022-29.728-4.305-34.034-.242-.457-.641-2.936-1.126-3.113l-7.676-2.791a2.248 2.248 0 00-2.017.242s-2.164 1.383-2.649 1.383H21.744c-.485 0-2.921-1.383-2.921-1.383a2.25 2.25 0 00-2.017-.242L9.13 11.848c-.486.177-.884 2.656-1.126 3.113-2.283 4.306-13.801 28.024-4.305 34.034.68.43 1.574.34 2.184-.183l9.128-7.828a7.129 7.129 0 014.638-1.716h9.446z",fill:"#38454f"})),m||(m=n.createElement("circle",{cx:36.786,cy:30.268,r:4,fill:"#546a79"})),f||(f=n.createElement("circle",{cx:13.786,cy:20.268,r:4,fill:"#546a79"})),h||(h=n.createElement("circle",{cx:43.786,cy:16.268,r:2,fill:"#ebba16"})),v||(v=n.createElement("circle",{cx:39.786,cy:20.268,r:2,fill:"#7383bf"})),g||(g=n.createElement("circle",{cx:47.786,cy:20.268,r:2,fill:"#d75a4a"})),x||(x=n.createElement("circle",{cx:43.786,cy:24.268,r:2,fill:"#61b872"})),b||(b=n.createElement("path",{d:"M31.786 11.712c0-.192-.019-.38-.054-.561a1.077 1.077 0 00-.215-.469h-2.479c-.085.007-.165.03-.251.03-.087 0-.167-.022-.251-.03h-2.489a1 1 0 00-.192.4 3.007 3.007 0 000 1.271 3.014 3.014 0 002.404 2.314 3.002 3.002 0 003.527-2.955z",fill:"#afb6bb"})),E||(E=n.createElement("path",{d:"M27.286 27.921H24v-3.286a.714.714 0 00-.714-.714h-2.571a.714.714 0 00-.714.714v3.286h-3.286a.714.714 0 00-.714.714v2.571c0 .395.32.714.714.714H20v3.286c0 .395.32.714.714.714h2.571c.395 0 .714-.32.714-.714V31.92h3.286c.395 0 .714-.32.714-.714v-2.571a.713.713 0 00-.713-.714z",fill:"#546a79"})))},S=({GameGridComponent:e,ControlsComponent:t})=>a().createElement(a().Fragment,null,a().createElement(u,null,a().createElement(y,{width:100,height:100}),a().createElement(d,null,"Conway's Game of Life")),a().createElement(e,null),a().createElement(t,null)),C=s.ZP.div`
  display: block;
  height: 600px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #3e3e3e;
  box-shadow: 3px 3px 4px 0px #64f096;
`,k=s.ZP.canvas`
  width: 100%; 
  height: 100%;  
`,G=({viewModel:e})=>a().createElement(C,{id:"canvas-container"},a().createElement(k,{ref:e.canvasRef,onWheel:t=>e.onWheelEvent(t)})),R=s.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1%;
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
`,M=s.ZP.button`
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
`,L=s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,z=s.ZP.input`
  outline: none;
`,_=s.ZP.select`
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
`;var T,I,Z;function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}const j=function(e){return n.createElement("svg",N({id:"velocity_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},e),T||(T=n.createElement("defs",null,n.createElement("style",null,".velocity_svg__cls-2{fill:#2d3e50}"))),I||(I=n.createElement("path",{d:"M106.99 41.916c-2.447-2.028-4.689-.712-6.162.456-7.624 6.038-14.046 10.769-20.93 15.98-7.576 5.736-15.41 11.667-23.82 18.394-6.393 5.114-7.88 12.127-4.078 19.24 1.063 2.32 3.556 4.38 6.844 5.648a14.197 14.197 0 005.132 1c4.566 0 8.776-2.455 12.003-7.14 6.46-9.382 11.92-17.632 17.699-26.368 4.51-6.817 8.48-13.208 13.64-20.806 1.642-2.42 1.517-4.873-.329-6.404z",fill:"#027b2d"})),Z||(Z=n.createElement("path",{className:"velocity_svg__cls-2",d:"M64.002 38.076a49.132 49.132 0 0118.558 5.45c.85.446 1.689.922 2.504 1.423.83-.653 1.659-1.31 2.484-1.964q5.037-3.99 10.079-7.972a62.62 62.62 0 00-9.112-4.699 59.952 59.952 0 00-1.841-.74A63.014 63.014 0 001.02 88.342h5.646a56.291 56.291 0 015.99-21.262A54.661 54.661 0 0125.96 50.3a52.828 52.828 0 0118.13-10.04 51.036 51.036 0 0119.912-2.185zM126.98 88.343q0-.611-.015-1.222a4.469 4.469 0 00.01-.516c-.098-2.445-.25-4.904-.59-7.33a62.08 62.08 0 00-11.635-28.469l-4.595 6.77-6.195 9.131a44.628 44.628 0 011.6 4.429 44.163 44.163 0 011.645 17.207z"})))},W=({viewModel:e})=>a().createElement(R,null,a().createElement(_,{id:"seeds",name:"seeds",onChange:t=>e.onSelectChange(t.target.value),disabled:e.gameStarted},a().createElement("option",{key:"Select-0",value:"Select",style:{cursor:"pointer"}},"SELECT AN INITIAL SEED"),a().createElement("option",{key:"Random-1",value:"Random",style:{cursor:"pointer"}},"RANDOM"),e.SeedsNameArray.map(((t,r)=>a().createElement("option",{key:r,value:t,style:{cursor:"pointer"}},e.SeedsNameToShowInTheScreen[t].toUpperCase())))),a().createElement(O,{onClick:t=>e.onClickStartGameBtn(t),disabled:e.gameStarted},"Start"),a().createElement(L,null,a().createElement(j,{width:30}),a().createElement(z,{type:"range",id:"generationSpeed",name:"generationSpeed",min:1,max:50,defaultValue:1,onChange:t=>e.onSliderPositionCallback(t)})),a().createElement(M,{onClick:t=>e.onClickStopGameBtn(t),disabled:!e.gameStarted},"Stop"),a().createElement(B,{onClick:t=>e.onClickResetGameBtn(t)},"Reset"),a().createElement(P,{onClick:t=>e.onClickCentralizeGameBtn(t)},"Centralize")),H=(0,n.createContext)(null),A=({children:e})=>{const[t,r]=(0,n.useState)([]),o=(0,n.useRef)([]),[l,c]=(0,n.useState)(null),[i,s]=(0,n.useState)(1),[u,d]=(0,n.useState)(20),[p,m]=(0,n.useState)(0),[f,h]=(0,n.useState)(0),v=(0,n.useRef)({x:0,y:0}),g=(0,n.useRef)(0),x={matrix:t,setMatrix:r,ticksInterval:l,setTicksInterval:c,generationSpeed:i,setGenerationSpeed:s,matrixRef:o,cellSize:u,setCellSize:d,canvasWidth:p,setCanvasWidth:m,canvasHeight:f,setCanvasHeight:h,dragRef:v,generateMatrix:(e=!1)=>{let n=[];e||(n=[...t]);for(let e=0;e<p;e++){n[e]||(n[e]=[]);for(let t=0;t<f;t++)n[e][t]||(n[e][t]=0)}o.current=n,r(n)},scaleRef:g,CELL_SIZE:20};return a().createElement(H.Provider,{value:x}," ",e," ")},D=["Beehive","BlinkerOscillator","Beacon","Glider","SmallExploder","Exploder","TenCellRow","LightweightSpaceship","Tumbler","GosperGliderGun"],F={Beehive:"Beehive",BlinkerOscillator:"Blinker Oscillator",Beacon:"Beacon",Glider:"Glider",SmallExploder:"Small Exploder",Exploder:"Exploder",TenCellRow:"Ten Cell Row",LightweightSpaceship:"Lightweight Spaceship",Tumbler:"Tumbler",GosperGliderGun:"Gosper Glider Gun"},J={Beehive:e=>(e=>{e[20][20]=1,e[20][21]=1,e[21][19]=1,e[21][22]=1,e[22][20]=1,e[22][21]=1})(e),BlinkerOscillator:e=>(e=>{e[20][20]=1,e[20][21]=1,e[20][22]=1})(e),Beacon:e=>(e=>{e[20][20]=1,e[20][21]=1,e[21][20]=1,e[22][23]=1,e[23][22]=1,e[23][23]=1})(e),Glider:e=>(e=>{e[20][20]=1,e[21][21]=1,e[22][19]=1,e[22][20]=1,e[22][21]=1})(e),SmallExploder:e=>(e=>{e[20][20]=1,e[21][19]=1,e[21][20]=1,e[21][21]=1,e[22][19]=1,e[22][21]=1,e[23][20]=1})(e),Exploder:e=>(e=>{e[20][18]=1,e[20][20]=1,e[20][22]=1,e[21][18]=1,e[21][22]=1,e[22][18]=1,e[22][22]=1,e[23][18]=1,e[23][22]=1,e[24][18]=1,e[24][20]=1,e[24][22]=1})(e),TenCellRow:e=>(e=>{e[20][15]=1,e[20][16]=1,e[20][17]=1,e[20][18]=1,e[20][19]=1,e[20][20]=1,e[20][21]=1,e[20][22]=1,e[20][23]=1,e[20][24]=1})(e),LightweightSpaceship:e=>(e=>{e[20][15]=1,e[20][16]=1,e[20][17]=1,e[20][18]=1,e[21][14]=1,e[21][18]=1,e[22][18]=1,e[23][15]=1,e[23][17]=1})(e),Tumbler:e=>(e=>{e[20][18]=1,e[20][19]=1,e[20][21]=1,e[20][22]=1,e[21][18]=1,e[21][19]=1,e[21][21]=1,e[21][22]=1,e[22][19]=1,e[22][21]=1,e[23][17]=1,e[23][19]=1,e[23][21]=1,e[23][23]=1,e[24][17]=1,e[24][19]=1,e[24][21]=1,e[24][23]=1,e[25][17]=1,e[25][18]=1,e[25][22]=1,e[25][23]=1})(e),GosperGliderGun:e=>(e=>{e[20][10]=1,e[20][11]=1,e[21][10]=1,e[21][11]=1,e[20][19]=1,e[20][20]=1,e[21][18]=1,e[21][20]=1,e[22][18]=1,e[22][19]=1,e[22][26]=1,e[22][27]=1,e[23][26]=1,e[23][28]=1,e[24][26]=1,e[20][32]=1,e[20][33]=1,e[19][32]=1,e[19][34]=1,e[18][33]=1,e[18][34]=1,e[30][34]=1,e[30][35]=1,e[30][36]=1,e[31][34]=1,e[32][35]=1,e[19][44]=1,e[19][45]=1,e[18][44]=1,e[18][45]=1,e[25][45]=1,e[25][46]=1,e[26][45]=1,e[26][47]=1,e[27][45]=1})(e)},U=()=>{const e=(()=>{const{matrix:e,cellSize:t,setCellSize:r,canvasWidth:a,setCanvasWidth:o,canvasHeight:l,setCanvasHeight:c,dragRef:i,generateMatrix:s,scaleRef:u}=(0,n.useContext)(H),d=(0,n.useRef)(null),p=(0,n.useRef)(null),[m,f]=(0,n.useState)(null),h=(0,n.useRef)(!1),[v,g]=(0,n.useState)({x:0,y:0});(0,n.useEffect)((()=>(G(),x(),d.current.addEventListener("mousedown",y),d.current.addEventListener("mouseup",S),d.current.addEventListener("mousemove",C),window.addEventListener("resize",k),function(){d.current.removeEventListener("mousedown",y),d.current.removeEventListener("mouseup",S),d.current.removeEventListener("mousemove",C),window.removeEventListener("resize",k)})),[]),(0,n.useEffect)((()=>{b()}),[e,v,t]),(0,n.useEffect)((()=>{x(),s(),b()}),[l,a]);const x=()=>{const e=d.current;e.width=a,e.height=l;const t=e.getContext("2d");t.fillStyle="rgb(100, 240, 150)",t.strokeStyle="rgb(90, 90, 90)",t.lineWidth=1,p.current=t,f(t)},b=()=>{w(),E();const r=e.length;for(let n=0;n<r;n++)for(let r=0;r<e[n].length;r++)1===e[n][r]&&p.current.fillRect(r*t+1+i.current.x,n*t+1+i.current.y,t-1,t-1)},E=()=>{for(let e=i.current.x%t;e<a;e+=t)p.current.beginPath(),p.current.moveTo(e+.5,0),p.current.lineTo(e+.5,l),p.current.stroke();for(let e=i.current.y%t;e<l;e+=t)p.current.beginPath(),p.current.moveTo(0,e+.5),p.current.lineTo(a,e+.5),p.current.stroke()},w=()=>{p.current.clearRect(0,0,d.current.width,d.current.height)},y=(0,n.useCallback)((e=>{e.preventDefault(),h.current=!0}),[]),S=(0,n.useCallback)((e=>{e.preventDefault(),h.current=!1}),[]),C=(0,n.useCallback)((e=>{if(e.preventDefault(),!h.current)return;const t=e.movementX+i.current.x,r=e.movementY+i.current.y;i.current={x:t,y:r},g({x:t,y:r})}),[]),k=(0,n.useCallback)((()=>{G()}),[]),G=()=>{const e=document.getElementById("canvas-container"),r=e.offsetWidth,n=e.offsetHeight,a=n-n%t+1;o(r-r%t),c(a)};return{canvasRef:d,onWheelEvent:e=>{const n=u.current;let a=u.current;if(a+=-.01*e.deltaY,a=Math.min(Math.max(-3,a),3),u.current=a,n===a)return;let o=t;n<a?o*=2:o/=2,o>160?o=160:o<2.5&&(o=2.5),r(o)}}})();return a().createElement(G,{viewModel:e})},V=()=>{const e=(()=>{const{matrix:e,setMatrix:t,matrixRef:r,ticksInterval:a,setTicksInterval:o,generationSpeed:l,setGenerationSpeed:c,canvasWidth:i,canvasHeight:s,generateMatrix:u,dragRef:d}=(0,n.useContext)(H),[p,m]=(0,n.useState)(!1);(0,n.useEffect)((()=>{if(null===a)return;clearInterval(a);const e=setInterval((()=>h()),1e3*l);o(e)}),[l]);const f=e=>{e.stopPropagation(),p&&(clearInterval(a),o(null),m(!1))},h=()=>{let e=JSON.parse(JSON.stringify(r.current));r.current.forEach(((t,n)=>{t.forEach(((t,a)=>{const o=x(n,a,r.current);1===t?v(n,a,e,o):g(n,a,e,o)}))})),r.current=e,t(e)},v=(e,t,r,n)=>{2!==n&&3!==n&&(r[e][t]=0)},g=(e,t,r,n)=>{3===n&&(r[e][t]=1)},x=(e,t,r)=>e>=1&&e<=i-2&&t>=1&&t<=s-2?[r[e][t-1],r[e][t+1],r[e-1][t-1],r[e-1][t],r[e-1][t+1],r[e+1][t-1],r[e+1][t],r[e+1][t+1]].filter((e=>1===e)).length:0,b=(0,n.useCallback)((e=>{const t=parseInt(e.target.value);c(0!==t?1/t:1)}),[]);return{onClickStartGameBtn:e=>{if(e.stopPropagation(),null!==a)return;const t=setInterval((()=>h()),1e3*l);o(t),m(!0)},onClickStopGameBtn:f,onClickResetGameBtn:e=>{e.stopPropagation(),f(e),d.current={x:0,y:0},u(!0),m(!1)},onClickCentralizeGameBtn:e=>{e.stopPropagation(),d.current={x:0,y:0},u()},onSliderPositionCallback:b,gameStarted:p,SeedsNameArray:D,onSelectChange:n=>{if("Select"===n||p)return;const a=[...e];if("Random"!==n)J[n](a);else{const e=Math.floor(Math.random()*D.length);J[D[e]](a)}r.current=a,t(a)},SeedsNameToShowInTheScreen:F}})();return a().createElement(W,{viewModel:e})},q=()=>a().createElement(A,null,a().createElement(S,{GameGridComponent:U,ControlsComponent:V})),Y=()=>a().createElement(c.VK,{basename:"/Conway-Game-Of-Life-React"},a().createElement(i.Z5,null,a().createElement(i.AW,{path:"/",element:a().createElement(q,null)})));const K=function(){return a().createElement(Y,null)},X=s.vJ`
  body {
    margin: 0;
    padding-top: 90px;
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
`;l().render(a().createElement(a().StrictMode,null,a().createElement(X,null),a().createElement(K,null)),document.getElementById("root"))},363:e=>{e.exports=React}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,n),o.exports}n.m=t,e=[],n.O=(t,r,a,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],c=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(c=!1,o<l&&(l=o));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[l,c,i]=r,s=0;if(l.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(i)var u=i(n)}for(t&&t(r);s<l.length;s++)o=l[s],n.o(e,o)&&e[o]&&e[o][0](),e[l[s]]=0;return n.O(u)},r=self.webpackChunkConway_Game_Of_Life_React=self.webpackChunkConway_Game_Of_Life_React||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[423],(()=>n(898)));a=n.O(a)})();