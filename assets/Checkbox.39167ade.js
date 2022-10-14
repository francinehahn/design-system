var c=Object.defineProperty;var s=(e,r)=>c(e,"name",{value:r,configurable:!0});import{r as a}from"./index.9c5ad381.js";import{s as d,G as h}from"./GlobalStyle.7546d07d.js";import{j as n,F as o,a as p}from"./jsx-runtime.3e775b15.js";import{I as u,r as k}from"./IconBase.esm.c5377035.js";const f=d.div`
    width: 24px;
    height: 24px;
    background-color: var(--grey800);
    border-radius: 4px;
    padding: 2px;
    cursor: pointer;
    svg {
        width: 20px;
        height: 20px;
        color: var(--cyan500);
    }
`,v=d.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;var t=new Map;t.set("bold",function(e){return n(o,{children:n("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});t.set("duotone",function(e){return n(o,{children:n("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});t.set("fill",function(){return n(o,{children:n("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});t.set("light",function(e){return n(o,{children:n("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});t.set("thin",function(e){return n(o,{children:n("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});t.set("regular",function(e){return n(o,{children:n("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var x=s(function(r,i){return k(r,i,t)},"renderPath"),l=a.exports.forwardRef(function(e,r){return n(u,{...Object.assign({ref:r},e,{renderPath:x})})});l.displayName="Check";const g=l;function y(e){const[r,i]=a.exports.useState(!1);return p(o,{children:[n(h,{}),n(f,{onClick:()=>i(!r),...e,children:r&&n(g,{})})]})}s(y,"Checkbox");y.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};export{y as C,v as a};
//# sourceMappingURL=Checkbox.39167ade.js.map
