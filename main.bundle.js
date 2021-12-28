(()=>{"use strict";var e,t={932:(e,t,n)=>{var r=n(363),o=n.n(r);const a=ReactDOM;var l=n.n(a),i=n(974),c=n(711);const s=({GameGridComponent:e,ControlsComponent:t})=>o().createElement(o().Fragment,null,o().createElement(e,null),o().createElement(t,null));var u=n(163);const d=u.ZP.div`
  display: block;
  height: 600px;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: #3e3e3e;
  box-shadow: 3px 3px 4px 0px #64f096;
`,m=u.ZP.canvas`
  width: 100%; 
  height: 100%;  
`,p=({viewModel:e})=>o().createElement(d,{id:"canvas-container"},o().createElement(m,{ref:e.canvasRef})),f=u.ZP.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1%;
`,v=u.ZP.button`
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
`,g=u.ZP.button`
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
`,h=u.ZP.button`
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
`,b=u.ZP.button`
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
`,x=u.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,E=u.ZP.input`
  
`;var w,y,k;function C(){return C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}const S=function(e){return r.createElement("svg",C({id:"velocity_svg__Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 128 128"},e),w||(w=r.createElement("defs",null,r.createElement("style",null,".velocity_svg__cls-2{fill:#2d3e50}"))),y||(y=r.createElement("path",{d:"M106.99 41.916c-2.447-2.028-4.689-.712-6.162.456-7.624 6.038-14.046 10.769-20.93 15.98-7.576 5.736-15.41 11.667-23.82 18.394-6.393 5.114-7.88 12.127-4.078 19.24 1.063 2.32 3.556 4.38 6.844 5.648a14.197 14.197 0 005.132 1c4.566 0 8.776-2.455 12.003-7.14 6.46-9.382 11.92-17.632 17.699-26.368 4.51-6.817 8.48-13.208 13.64-20.806 1.642-2.42 1.517-4.873-.329-6.404z",fill:"#027b2d"})),k||(k=r.createElement("path",{className:"velocity_svg__cls-2",d:"M64.002 38.076a49.132 49.132 0 0118.558 5.45c.85.446 1.689.922 2.504 1.423.83-.653 1.659-1.31 2.484-1.964q5.037-3.99 10.079-7.972a62.62 62.62 0 00-9.112-4.699 59.952 59.952 0 00-1.841-.74A63.014 63.014 0 001.02 88.342h5.646a56.291 56.291 0 015.99-21.262A54.661 54.661 0 0125.96 50.3a52.828 52.828 0 0118.13-10.04 51.036 51.036 0 0119.912-2.185zM126.98 88.343q0-.611-.015-1.222a4.469 4.469 0 00.01-.516c-.098-2.445-.25-4.904-.59-7.33a62.08 62.08 0 00-11.635-28.469l-4.595 6.77-6.195 9.131a44.628 44.628 0 011.6 4.429 44.163 44.163 0 011.645 17.207z"})))},R=({viewModel:e})=>o().createElement(f,null,o().createElement(v,{onClick:t=>e.onClickRandomBtn(t),disabled:e.gameStarted},"Get Random"),o().createElement(g,{onClick:t=>e.onClickStartGameBtn(t),disabled:e.gameStarted},"Start"),o().createElement(x,null,o().createElement(S,{width:30}),o().createElement(E,{type:"range",id:"generationSpeed",name:"generationSpeed",min:0,max:100,defaultValue:0,onChange:t=>e.onSliderPositionCallback(t)})),o().createElement(h,{onClick:t=>e.onClickStopGameBtn(t),disabled:!e.gameStarted},"Stop"),o().createElement(b,{onClick:t=>e.onClickResetGameBtn(t)},"Reset")),P=(0,r.createContext)(null),O=({children:e})=>{const[t,n]=(0,r.useState)([]),a=(0,r.useRef)([]),[l,i]=(0,r.useState)(null),[c,s]=(0,r.useState)(1),[u,d]=(0,r.useState)(20),[m,p]=(0,r.useState)(0),[f,v]=(0,r.useState)(0),g=(0,r.useRef)({x:0,y:0}),h={matrix:t,setMatrix:n,ticksInterval:l,setTicksInterval:i,generationSpeed:c,setGenerationSpeed:s,matrixRef:a,cellSize:u,setCellSize:d,canvasWidth:m,setCanvasWidth:p,canvasHeight:f,setCanvasHeight:v,dragRef:g,generateMatrix:(e=!1)=>{let r=[];e||(r=[...t]);for(let e=0;e<m;e++){r[e]||(r[e]=[]);for(let t=0;t<f;t++)r[e][t]||(r[e][t]=0)}a.current=r,n(r)}};return o().createElement(P.Provider,{value:h}," ",e," ")},_=e=>(e=>{e[20][18]=1,e[20][20]=1,e[20][22]=1,e[21][18]=1,e[21][22]=1,e[22][18]=1,e[22][22]=1,e[23][18]=1,e[23][22]=1,e[24][18]=1,e[24][20]=1,e[24][22]=1})(e),M=()=>{const e=(()=>{const{matrix:e,cellSize:t,canvasWidth:n,setCanvasWidth:o,canvasHeight:a,setCanvasHeight:l,dragRef:i,generateMatrix:c}=(0,r.useContext)(P),s=(0,r.useRef)(null),u=(0,r.useRef)(null),[d,m]=(0,r.useState)(null),p=(0,r.useRef)(!1),f=(0,r.useRef)({x:0,y:0}),[v,g]=(0,r.useState)({x:0,y:0});(0,r.useEffect)((()=>(S(),h(),s.current.addEventListener("mousedown",w),s.current.addEventListener("mouseup",y),s.current.addEventListener("mousemove",k),window.addEventListener("resize",C),function(){s.current.removeEventListener("mousedown",w),s.current.removeEventListener("mouseup",y),s.current.removeEventListener("mousemove",k),window.removeEventListener("resize",C)})),[]),(0,r.useEffect)((()=>{b()}),[e,v]),(0,r.useEffect)((()=>{h(),c(),b()}),[a,n]);const h=()=>{const e=s.current;e.width=n,e.height=a;const t=e.getContext("2d");t.fillStyle="rgb(100, 240, 150)",t.strokeStyle="rgb(90, 90, 90)",t.lineWidth=1,u.current=t,m(t)},b=()=>{E(),x();const n=e.length;for(let r=0;r<n;r++)for(let n=0;n<e[r].length;n++)1===e[r][n]&&u.current.fillRect(n*t+1+i.current.x,r*t+1+i.current.y,t-1,t-1)},x=()=>{for(let e=i.current.x%t;e<n;e+=t)u.current.beginPath(),u.current.moveTo(e+.5,0),u.current.lineTo(e+.5,a),u.current.stroke();for(let e=i.current.y%t;e<a;e+=t)u.current.beginPath(),u.current.moveTo(0,e+.5),u.current.lineTo(n,e+.5),u.current.stroke()},E=()=>{u.current.clearRect(0,0,s.current.width,s.current.height)},w=(0,r.useCallback)((e=>{e.preventDefault(),f.current.x=e.x,f.current.y=e.y,p.current=!0}),[]),y=(0,r.useCallback)((e=>{e.preventDefault(),p.current=!1}),[]),k=(0,r.useCallback)((e=>{if(e.preventDefault(),!p.current)return;const t=e.movementX+i.current.x,n=e.movementY+i.current.y;i.current={x:t,y:n},g({x:t,y:n})}),[]),C=(0,r.useCallback)((()=>{S()}),[]),S=()=>{const e=document.getElementById("canvas-container"),n=e.offsetWidth,r=e.offsetHeight,a=r-r%t+1;o(n-n%t),l(a)};return{canvasRef:s}})();return o().createElement(p,{viewModel:e})},G=()=>{const e=(()=>{const{matrix:e,setMatrix:t,matrixRef:n,ticksInterval:o,setTicksInterval:a,generationSpeed:l,setGenerationSpeed:i,canvasWidth:c,canvasHeight:s,generateMatrix:u}=(0,r.useContext)(P),[d,m]=(0,r.useState)(!1);(0,r.useEffect)((()=>{if(null===o)return;clearInterval(o);const e=setInterval((()=>f()),1e3*l);a(e)}),[l]);const p=e=>{e.stopPropagation(),d&&(clearInterval(o),a(null),m(!1))},f=()=>{let e=JSON.parse(JSON.stringify(n.current));n.current.forEach(((t,r)=>{t.forEach(((t,o)=>{const a=h(r,o,n.current);1===t?v(r,o,e,a):g(r,o,e,a)}))})),n.current=e,t(e)},v=(e,t,n,r)=>{2!==r&&3!==r&&(n[e][t]=0)},g=(e,t,n,r)=>{3===r&&(n[e][t]=1)},h=(e,t,n)=>e>=1&&e<=c-2&&t>=1&&t<=s-2?[n[e][t-1],n[e][t+1],n[e-1][t-1],n[e-1][t],n[e-1][t+1],n[e+1][t-1],n[e+1][t],n[e+1][t+1]].filter((e=>1===e)).length:0,b=(0,r.useCallback)((e=>{const t=parseInt(e.target.value);i(0!==t?1/t:1)}),[]);return{onClickRandomBtn:r=>{if(r.stopPropagation(),d)return;const o=[...e];_(o),n.current=o,t(o)},onClickStartGameBtn:e=>{if(e.stopPropagation(),null!==o)return;const t=setInterval((()=>f()),1e3*l);a(t),m(!0)},onClickStopGameBtn:p,onClickResetGameBtn:e=>{e.stopPropagation(),p(e),u(!0),m(!1)},onSliderPositionCallback:b,gameStarted:d}})();return o().createElement(R,{viewModel:e})},z=()=>o().createElement(O,null,o().createElement(s,{GameGridComponent:M,ControlsComponent:G})),B=()=>o().createElement(c.UT,null,o().createElement(i.Z5,null,o().createElement(i.AW,{path:"/",element:o().createElement(z,null)})));const I=function(){return o().createElement(B,null)},L=u.vJ`
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
`;l().render(o().createElement(o().StrictMode,null,o().createElement(L,null),o().createElement(I,null)),document.getElementById("root"))},363:e=>{e.exports=React}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,n,o,a)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,o,a]=e[u],i=!0,c=0;c<n.length;c++)(!1&a||l>=a)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(i=!1,a<l&&(l=a));if(i){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[n,o,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,a,[l,i,c]=n,s=0;if(l.some((t=>0!==e[t]))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(c)var u=c(r)}for(t&&t(n);s<l.length;s++)a=l[s],r.o(e,a)&&e[a]&&e[a][0](),e[l[s]]=0;return r.O(u)},n=self.webpackChunkConway_Game_Of_Life_React=self.webpackChunkConway_Game_Of_Life_React||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[423],(()=>r(932)));o=r.O(o)})();