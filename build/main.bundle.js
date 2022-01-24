(()=>{"use strict";var e,t={898:(e,t,r)=>{var n=r(363),a=r.n(n);const l=ReactDOM;var o=r.n(l),c=r(711),i=r(974),s=r(163);const u=s.ZP.div`
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
`;var f,p,h,g,v,x,E,b,S;function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}const y=function(e){return n.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 58.189 58.189"},e),f||(f=n.createElement("path",{d:"M29.095 39.268h9.446c1.701 0 3.346.609 4.638 1.716l9.128 7.828c.611.524 1.505.614 2.184.183 9.496-6.01-2.022-29.728-4.305-34.034-.242-.457-.641-2.936-1.126-3.113l-7.676-2.791a2.248 2.248 0 00-2.017.242s-2.164 1.383-2.649 1.383H21.744c-.485 0-2.921-1.383-2.921-1.383a2.25 2.25 0 00-2.017-.242L9.13 11.848c-.486.177-.884 2.656-1.126 3.113-2.283 4.306-13.801 28.024-4.305 34.034.68.43 1.574.34 2.184-.183l9.128-7.828a7.129 7.129 0 014.638-1.716h9.446z",fill:"#38454f"})),p||(p=n.createElement("circle",{cx:36.786,cy:30.268,r:4,fill:"#546a79"})),h||(h=n.createElement("circle",{cx:13.786,cy:20.268,r:4,fill:"#546a79"})),g||(g=n.createElement("circle",{cx:43.786,cy:16.268,r:2,fill:"#ebba16"})),v||(v=n.createElement("circle",{cx:39.786,cy:20.268,r:2,fill:"#7383bf"})),x||(x=n.createElement("circle",{cx:47.786,cy:20.268,r:2,fill:"#d75a4a"})),E||(E=n.createElement("circle",{cx:43.786,cy:24.268,r:2,fill:"#61b872"})),b||(b=n.createElement("path",{d:"M31.786 11.712c0-.192-.019-.38-.054-.561a1.077 1.077 0 00-.215-.469h-2.479c-.085.007-.165.03-.251.03-.087 0-.167-.022-.251-.03h-2.489a1 1 0 00-.192.4 3.007 3.007 0 000 1.271 3.014 3.014 0 002.404 2.314 3.002 3.002 0 003.527-2.955z",fill:"#afb6bb"})),S||(S=n.createElement("path",{d:"M27.286 27.921H24v-3.286a.714.714 0 00-.714-.714h-2.571a.714.714 0 00-.714.714v3.286h-3.286a.714.714 0 00-.714.714v2.571c0 .395.32.714.714.714H20v3.286c0 .395.32.714.714.714h2.571c.395 0 .714-.32.714-.714V31.92h3.286c.395 0 .714-.32.714-.714v-2.571a.713.713 0 00-.713-.714z",fill:"#546a79"})))},C=({GameGridComponent:e,ControlsComponent:t})=>a().createElement(u,null,a().createElement(d,null,a().createElement(y,{width:60,height:60}),a().createElement(m,null,"Conway's Game of Life")),a().createElement(e,null),a().createElement(t,null)),M=s.ZP.div`
  display: block;
  flex-grow: 9;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #3e3e3e;
  box-shadow: 3px 3px 4px 0px #64f096;
`,k=s.ZP.canvas`
  position: absolute;
`,O=({viewModel:e})=>a().createElement(M,{id:"canvas-container"},a().createElement(k,{ref:e.canvasRef})),R=s.ZP.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 1%;
  margin: 0 5%;

  @media(max-width: 700px) {
    flex-wrap: wrap;
  }
`,G=s.ZP.button`
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
`,I=(0,s.ZP)(G)``,L=(0,s.ZP)(G)``,_=(0,s.ZP)(G)``,P=(0,s.ZP)(G)``,Z=s.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 700px) {
    margin-bottom: 1%;
  }
`,B=s.ZP.input`
  outline: none;
`,z=s.ZP.select`
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
`;var N,j,T;function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},A.apply(this,arguments)}const H=function(e){return n.createElement("svg",A({id:"velocity_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},e),N||(N=n.createElement("defs",null,n.createElement("style",null,".velocity_svg__cls-2{fill:#2d3e50}"))),j||(j=n.createElement("path",{d:"M106.99 41.916c-2.447-2.028-4.689-.712-6.162.456-7.624 6.038-14.046 10.769-20.93 15.98-7.576 5.736-15.41 11.667-23.82 18.394-6.393 5.114-7.88 12.127-4.078 19.24 1.063 2.32 3.556 4.38 6.844 5.648a14.197 14.197 0 005.132 1c4.566 0 8.776-2.455 12.003-7.14 6.46-9.382 11.92-17.632 17.699-26.368 4.51-6.817 8.48-13.208 13.64-20.806 1.642-2.42 1.517-4.873-.329-6.404z",fill:"#027b2d"})),T||(T=n.createElement("path",{className:"velocity_svg__cls-2",d:"M64.002 38.076a49.132 49.132 0 0118.558 5.45c.85.446 1.689.922 2.504 1.423.83-.653 1.659-1.31 2.484-1.964q5.037-3.99 10.079-7.972a62.62 62.62 0 00-9.112-4.699 59.952 59.952 0 00-1.841-.74A63.014 63.014 0 001.02 88.342h5.646a56.291 56.291 0 015.99-21.262A54.661 54.661 0 0125.96 50.3a52.828 52.828 0 0118.13-10.04 51.036 51.036 0 0119.912-2.185zM126.98 88.343q0-.611-.015-1.222a4.469 4.469 0 00.01-.516c-.098-2.445-.25-4.904-.59-7.33a62.08 62.08 0 00-11.635-28.469l-4.595 6.77-6.195 9.131a44.628 44.628 0 011.6 4.429 44.163 44.163 0 011.645 17.207z"})))},D=({viewModel:e})=>a().createElement(R,null,a().createElement(z,{id:"seeds",name:"seeds",onChange:t=>e.onSelectChange(t.target.value),onFocus:()=>e.onSelectFocus(),value:e.seedSelected,disabled:e.gameStarted},a().createElement("option",{key:"Select-0",value:"Select",style:{cursor:"pointer"}},"SELECT AN INITIAL SEED"),a().createElement("option",{key:"Random-1",value:"Random",style:{cursor:"pointer"}},"RANDOM"),e.SeedsNameArray.map(((t,r)=>a().createElement("option",{key:r,value:t,style:{cursor:"pointer"}},e.SeedsNameToShowInTheScreen[t].toUpperCase())))),a().createElement(I,{onClick:t=>e.onClickStartGameBtn(t),disabled:e.gameStarted},"Start"),a().createElement(Z,null,a().createElement(H,{width:30}),a().createElement(B,{type:"range",id:"generationSpeed",name:"generationSpeed",min:1,max:50,defaultValue:1,onChange:t=>e.onSliderPositionCallback(t)})),a().createElement(L,{onClick:t=>e.onClickStopGameBtn(t),disabled:!e.gameStarted},"Stop"),a().createElement(_,{onClick:t=>e.onClickResetGameBtn(t)},"Reset"),a().createElement(P,{onClick:t=>e.onClickCentralizeGameBtn(t)},"Centralize")),W=(0,n.createContext)(null),J=({children:e})=>{const t=(0,n.useRef)(null),[r,l]=(0,n.useState)({}),o=(0,n.useRef)({}),[c,i]=(0,n.useState)(null),[s,u]=(0,n.useState)(1),d=(0,n.useRef)(20),[m,f]=(0,n.useState)(0),[p,h]=(0,n.useState)(0),g=(0,n.useRef)({x:0,y:0}),v=(0,n.useRef)(0),x={matrix:r,setMatrix:l,ticksInterval:c,setTicksInterval:i,generationSpeed:s,setGenerationSpeed:u,matrixRef:o,canvasWidth:m,setCanvasWidth:f,canvasHeight:p,setCanvasHeight:h,dragRef:g,generateMatrix:(e=!1)=>{let t={};e||(t=Object.assign({},o.current));const r=Math.ceil(p/2.5),n=Math.ceil(m/2.5);for(let e=-Math.floor(r/2);e<Math.ceil(r/2);e++){t[e]||(t[e]={});for(let r=-Math.floor(n/2);r<Math.ceil(n/2);r++)t[e][r]||(t[e][r]=0)}o.current=t,l(t)},scaleRef:v,cellSizeRef:d,centralizeCanvas:(e=null,t=null)=>{const r=null!=e?e:m,n=null!=t?t:p,a={x:Math.floor(r/2),y:Math.floor(n/2)};g.current.x=a.x,g.current.y=a.y},MIN_ZOOM:-6,MAX_ZOOM:6,MIN_CELL_SIZE:2.5,MAX_CELL_SIZE:160,CELL_SIZE:20,contextRef:t};return a().createElement(W.Provider,{value:x}," ",e," ")},X=()=>{const{matrix:e,setMatrix:t,cellSizeRef:r,canvasWidth:a,setCanvasWidth:l,canvasHeight:o,setCanvasHeight:c,dragRef:i,scaleRef:s,matrixRef:u,centralizeCanvas:d,generateMatrix:m,MIN_ZOOM:f,MAX_ZOOM:p,MIN_CELL_SIZE:h,MAX_CELL_SIZE:g,CELL_SIZE:v,contextRef:x}=(0,n.useContext)(W),E=(0,n.useRef)(null),[b,S]=(0,n.useState)(null),w=(0,n.useRef)(!1),y=(0,n.useRef)(!1),[C,M]=(0,n.useState)({x:0,y:0}),[k,O]=(0,n.useState)(v);(0,n.useEffect)((()=>{R();const e=z();return l(e.width),c(e.height),d(e.width,e.height),m(),E.current.addEventListener("mousedown",_),E.current.addEventListener("mouseup",P),E.current.addEventListener("mousemove",Z),E.current.addEventListener("mousewheel",N,!1),window.addEventListener("resize",B),function(){E.current.removeEventListener("mousedown",_),E.current.removeEventListener("mouseup",P),E.current.removeEventListener("mousemove",Z),E.current.removeEventListener("mousewheel",N,!1),window.removeEventListener("resize",B)}}),[]),(0,n.useEffect)((()=>{G()}),[e,k,C]),(0,n.useEffect)((()=>{R(),m(),G()}),[o,a]);const R=()=>{const e=E.current;e.width=a,e.height=o;const t=e.getContext("2d",{alpha:!1});t.fillStyle="rgb(100, 240, 150)",t.strokeStyle="rgb(90, 90, 90)",t.lineWidth=1,x.current=t,S(t)},G=()=>{L(),I(),Object.keys(u.current).forEach((e=>{Object.keys(e).length&&Object.keys(u.current[e]).forEach((t=>{const n=u.current[e][t];n&&1===n&&x.current.fillRect(parseInt(t)*r.current+1+i.current.x,parseInt(e)*r.current+1+i.current.y,r.current-1,r.current-1)}))}))},I=()=>{for(let e=i.current.x%r.current;e<a;e+=r.current)x.current.beginPath(),x.current.moveTo(e+.5,0),x.current.lineTo(e+.5,o),x.current.stroke();for(let e=i.current.y%r.current;e<o;e+=r.current)x.current.beginPath(),x.current.moveTo(0,e+.5),x.current.lineTo(a,e+.5),x.current.stroke()},L=()=>{x.current.clearRect(0,0,E.current.width,E.current.height)},_=(0,n.useCallback)((e=>{e.preventDefault(),w.current=!0}),[]),P=(0,n.useCallback)((e=>{e.preventDefault(),w.current=!1,(e=>{if(y.current)return;const n=Math.floor((e.offsetX+-1*i.current.x)/r.current),a=Math.floor((e.offsetY+-1*i.current.y)/r.current),l=Object.assign({},u.current);l[a]||(l[a]={}),1===l[a][n]?l[a][n]=0:l[a][n]=1,u.current=l,t(l)})(e),y.current=!1}),[]),Z=(0,n.useCallback)((e=>{if(e.preventDefault(),!w.current)return;const t=e.movementX+i.current.x,r=e.movementY+i.current.y;y.current=Math.abs(t)>5||Math.abs(r)>5,y.current&&(i.current={x:t,y:r},M({x:t,y:r}))}),[]),B=(0,n.useCallback)((()=>{const e=z();l(e.width),c(e.height)}),[]),z=()=>{const e=document.getElementById("canvas-container"),t=parseInt(window.getComputedStyle(e).padding.replace("px",""));return{width:e.offsetWidth-2*t,height:e.offsetHeight-2*t}},N=(0,n.useCallback)((e=>{e.preventDefault(),e.stopPropagation();const t=s.current;let n=JSON.parse(JSON.stringify(s.current));n+=-.01*e.deltaY,n=Math.min(Math.max(f,n),p),s.current=n;const a=t<n;if(t===n)return;let l=JSON.parse(JSON.stringify(r.current));a?l*=2:l/=2;const o=l<h;l>g?l=g:o&&(l=h),l!==r.current&&(r.current=l,O(l))}),[]);return{canvasRef:E}},F=(e,t,r)=>{r[e]||(r[e]={}),r[e][t]=1},U=["GiantCross","Beehive","BlinkerOscillator","Beacon","Glider","SmallExploder","Exploder","TenCellRow","LightweightSpaceship","Tumbler","GosperGliderGun"],V={GiantCross:"Giant Cross",Beehive:"Beehive",BlinkerOscillator:"Blinker Oscillator",Beacon:"Beacon",Glider:"Glider",SmallExploder:"Small Exploder",Exploder:"Exploder",TenCellRow:"Ten Cell Row",LightweightSpaceship:"Lightweight Spaceship",Tumbler:"Tumbler",GosperGliderGun:"Gosper Glider Gun"},Y={GiantCross:(e,t,r)=>((e,t,r)=>{for(let n=-Math.floor(t/2);n<Math.ceil(t/2);n++){e[n]||(e[n]={});for(let t=-Math.floor(r/2);t<Math.ceil(r/2);t++)Math.abs(n)!==Math.abs(t)&&0!==n&&0!==t?e[n][t]||(e[n][t]=0):e[n][t]=1}})(e,r,t),Beehive:e=>(e=>{F(0,0,e),F(0,1,e),F(1,-1,e),F(1,2,e),F(2,0,e),F(2,1,e)})(e),BlinkerOscillator:e=>(e=>{F(0,0,e),F(0,1,e),F(0,2,e)})(e),Beacon:e=>(e=>{F(0,0,e),F(0,1,e),F(1,0,e),F(2,3,e),F(3,2,e),F(3,3,e)})(e),Glider:e=>(e=>{F(0,0,e),F(1,1,e),F(2,-1,e),F(2,0,e),F(2,1,e)})(e),SmallExploder:e=>(e=>{F(0,0,e),F(1,-1,e),F(1,0,e),F(1,1,e),F(2,-1,e),F(2,1,e),F(3,0,e)})(e),Exploder:e=>(e=>{F(0,-2,e),F(0,0,e),F(0,2,e),F(1,-2,e),F(1,2,e),F(2,-2,e),F(2,2,e),F(3,-2,e),F(3,2,e),F(4,-2,e),F(4,0,e),F(4,2,e)})(e),TenCellRow:e=>(e=>{F(0,-5,e),F(0,-4,e),F(0,-3,e),F(0,-2,e),F(0,-1,e),F(0,0,e),F(0,1,e),F(0,2,e),F(0,3,e),F(0,4,e)})(e),LightweightSpaceship:e=>(e=>{F(0,-5,e),F(0,-4,e),F(0,-3,e),F(0,-2,e),F(1,-6,e),F(1,-2,e),F(2,-2,e),F(3,-5,e),F(3,-3,e)})(e),Tumbler:e=>(e=>{F(0,-2,e),F(0,-1,e),F(0,1,e),F(0,2,e),F(1,-2,e),F(1,-1,e),F(1,1,e),F(1,2,e),F(2,-1,e),F(2,1,e),F(3,-3,e),F(3,-1,e),F(3,1,e),F(3,3,e),F(4,-3,e),F(4,-1,e),F(4,1,e),F(4,3,e),F(5,-3,e),F(5,-2,e),F(5,2,e),F(5,3,e)})(e),GosperGliderGun:e=>(e=>{F(0,-10,e),F(0,-9,e),F(1,-10,e),F(1,-9,e),F(0,-1,e),F(0,0,e),F(1,-2,e),F(1,0,e),F(2,-2,e),F(2,-1,e),F(2,6,e),F(2,7,e),F(3,6,e),F(3,8,e),F(4,6,e),F(0,12,e),F(0,13,e),F(-1,12,e),F(-1,14,e),F(-2,13,e),F(-2,14,e),F(10,14,e),F(10,15,e),F(10,16,e),F(11,14,e),F(12,15,e),F(-1,24,e),F(-1,25,e),F(-2,24,e),F(-2,25,e),F(5,25,e),F(5,26,e),F(6,25,e),F(6,27,e),F(7,25,e)})(e)},q=()=>{const e=X();return a().createElement(O,{viewModel:e})},K=()=>{const e=(()=>{const{matrix:e,setMatrix:t,matrixRef:r,ticksInterval:a,setTicksInterval:l,generationSpeed:o,setGenerationSpeed:c,generateMatrix:i,centralizeCanvas:s,canvasWidth:u,canvasHeight:d,MIN_CELL_SIZE:m}=(0,n.useContext)(W),[f,p]=(0,n.useState)(!1),[h,g]=(0,n.useState)("Select");(0,n.useEffect)((()=>{if(null===a)return;clearInterval(a);const e=setInterval((()=>x()),1e3*o);l(e)}),[o]);const v=e=>{e.stopPropagation(),f&&(clearInterval(a),l(null),p(!1))},x=()=>{let e=JSON.parse(JSON.stringify(r.current));Object.keys(r.current).forEach((t=>{Object.keys(t).length&&Object.keys(r.current[t]).forEach((n=>{const a=r.current[t][n],l=S(parseInt(t),parseInt(n),r.current);1===a?E(parseInt(t),parseInt(n),e,l):b(parseInt(t),parseInt(n),e,l)}))})),r.current=e,t(e)},E=(e,t,r,n)=>{2!==n&&3!==n&&(r[e][t]=0)},b=(e,t,r,n)=>{3===n&&(r[e][t]=1)},S=(e,t,r)=>{let n=0;for(let a=e-1;a<=e+1;a++)for(let l=t-1;l<=t+1;l++){if(a===e&&l===t)continue;if(!r[a])continue;const o=r[a][l];o&&1===o&&n++}return n},w=(0,n.useCallback)((e=>{const t=parseInt(e.target.value);c(0!==t?1/t:1)}),[]);return{onClickStartGameBtn:e=>{if(e.stopPropagation(),null!==a)return;const t=setInterval((()=>x()),1e3*o);l(t),p(!0)},onClickStopGameBtn:v,onClickResetGameBtn:e=>{e.stopPropagation(),v(e),s(),i(!0),p(!1)},onClickCentralizeGameBtn:e=>{e.stopPropagation(),s(),i()},onSliderPositionCallback:w,gameStarted:f,SeedsNameArray:U,onSelectChange:n=>{if("Select"===n||f)return;const a=Object.assign({},e);if("Random"!==n)if("GiantCross"===n){const e=Math.ceil(d/m),t=Math.ceil(u/m);Y[n](a,t,e)}else Y[n](a);else{const e=Math.floor(Math.random()*U.length);Y[U[e]](a)}r.current=a,g(n),t(a)},SeedsNameToShowInTheScreen:V,seedSelected:h,onSelectFocus:()=>{g("Select")}}})();return a().createElement(D,{viewModel:e})},Q=()=>a().createElement(J,null,a().createElement(C,{GameGridComponent:q,ControlsComponent:K})),$=()=>a().createElement(c.VK,{basename:"/Conway-Game-Of-Life-React"},a().createElement(i.Z5,null,a().createElement(i.AW,{path:"/",element:a().createElement(Q,null)})));const ee=function(){return a().createElement($,null)},te=s.vJ`
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
`;o().render(a().createElement(a().StrictMode,null,a().createElement(te,null),a().createElement(ee,null)),document.getElementById("root"))},363:e=>{e.exports=React}},r={};function n(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,n),l.exports}n.m=t,e=[],n.O=(t,r,a,l)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,a,l]=e[u],c=!0,i=0;i<r.length;i++)(!1&l||o>=l)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(c=!1,l<o&&(o=l));if(c){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,a,l]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,l,[o,c,i]=r,s=0;if(o.some((t=>0!==e[t]))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(i)var u=i(n)}for(t&&t(r);s<o.length;s++)l=o[s],n.o(e,l)&&e[l]&&e[l][0](),e[o[s]]=0;return n.O(u)},r=self.webpackChunkConway_Game_Of_Life_React=self.webpackChunkConway_Game_Of_Life_React||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=n.O(void 0,[423],(()=>n(898)));a=n.O(a)})();