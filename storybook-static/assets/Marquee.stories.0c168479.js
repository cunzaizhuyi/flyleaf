import{S as T,i as j,s as B,z as S,q as f,A as F,u as g,C as y,a as h,v as m,p as v,d as _,D as b,r as E,x as w}from"./index.321ab0ea.js";function L(s){S(s,"svelte-y6hu8b","@keyframes svelte-y6hu8b-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--tail-gap)))}}.marquee.svelte-y6hu8b.svelte-y6hu8b{display:flex;overflow:hidden;user-select:none;gap:var(--tail-gap)}.marquee.svelte-y6hu8b .marquee_content.svelte-y6hu8b{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--tail-gap);animation-name:svelte-y6hu8b-scroll;animation-duration:var(--tail-speed);animation-iteration-count:infinite;animation-timing-function:linear}")}function k(s,t,a){const i=s.slice();return i[3]=t[a],i}function q(s,t,a){const i=s.slice();return i[3]=t[a],i}function M(s){let t,a=s[3]+"",i;return{c(){t=f("div"),i=E(a)},m(o,r){h(o,t,r),m(t,i)},p(o,r){r&1&&a!==(a=o[3]+"")&&w(i,a)},d(o){o&&_(t)}}}function x(s){let t,a=s[3]+"",i;return{c(){t=f("div"),i=E(a)},m(o,r){h(o,t,r),m(t,i)},p(o,r){r&1&&a!==(a=o[3]+"")&&w(i,a)},d(o){o&&_(t)}}}function V(s){let t,a,i,o,r=s[0],l=[];for(let n=0;n<r.length;n+=1)l[n]=M(q(s,r,n));let d=s[0],c=[];for(let n=0;n<d.length;n+=1)c[n]=x(k(s,d,n));return{c(){t=f("div"),a=f("div");for(let n=0;n<l.length;n+=1)l[n].c();i=F(),o=f("div");for(let n=0;n<c.length;n+=1)c[n].c();g(a,"class","marquee_content svelte-y6hu8b"),g(o,"class","marquee_content svelte-y6hu8b"),g(o,"aria-hidden","true"),g(t,"class","marquee svelte-y6hu8b"),y(t,"--tail-gap",s[1]),y(t,"--tail-speed",s[2])},m(n,u){h(n,t,u),m(t,a);for(let e=0;e<l.length;e+=1)l[e].m(a,null);m(t,i),m(t,o);for(let e=0;e<c.length;e+=1)c[e].m(o,null)},p(n,[u]){if(u&1){r=n[0];let e;for(e=0;e<r.length;e+=1){const p=q(n,r,e);l[e]?l[e].p(p,u):(l[e]=M(p),l[e].c(),l[e].m(a,null))}for(;e<l.length;e+=1)l[e].d(1);l.length=r.length}if(u&1){d=n[0];let e;for(e=0;e<d.length;e+=1){const p=k(n,d,e);c[e]?c[e].p(p,u):(c[e]=x(p),c[e].c(),c[e].m(o,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=d.length}u&2&&y(t,"--tail-gap",n[1]),u&4&&y(t,"--tail-speed",n[2])},i:v,o:v,d(n){n&&_(t),b(l,n),b(c,n)}}}function X(s,t,a){let{data:i=[]}=t,{gap:o="60px"}=t,{speed:r="5s"}=t;return s.$$set=l=>{"data"in l&&a(0,i=l.data),"gap"in l&&a(1,o=l.gap),"speed"in l&&a(2,r=l.speed)},[i,o,r]}class D extends T{constructor(t){super(),j(this,t,X,V,B,{data:0,gap:1,speed:2},L)}}const C=D;D.__docgen={version:3,name:"Marquee.svelte",data:[{visibility:"public",description:null,keywords:[],name:"data",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"60px"},{visibility:"public",description:null,keywords:[],name:"speed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"5s"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G={parameters:{storySource:{source:`import Marquee from '../components/Marquee.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Components/Marquee',
  component: Marquee,
  argTypes: {
    data: { control: 'array' },
    gap: { control: 'text' },
    speed: { action: 'test' },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Marquee,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Demo = Template.bind({});
Demo.args = {
  data: ['\u5F20\u4E09\u4E2D\u5956\u4E86', '\u674E\u56DB\u4E2D\u5956\u4E86', '\u738B\u4E94\u4E5F\u4E2D\u5956\u4E86'],
  speed: '10s',
  gap: '1rem'
};
`,locationsMap:{demo:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"Components/Marquee",component:C,argTypes:{data:{control:"array"},gap:{control:"text"},speed:{action:"test"}}},z=s=>({Component:C,props:s,on:{click:s.onClick}}),A=z.bind({});A.args={data:["\u5F20\u4E09\u4E2D\u5956\u4E86","\u674E\u56DB\u4E2D\u5956\u4E86","\u738B\u4E94\u4E5F\u4E2D\u5956\u4E86"],speed:"10s",gap:"1rem"};const H=["Demo"];export{A as Demo,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Marquee.stories.0c168479.js.map
