import{S as T,i as j,s as B,z as S,q as f,A as F,u as g,B as h,a as y,v as m,p as v,d as _,C as b,r as E,x as w}from"./index.694bac30.js";function L(s){S(s,"svelte-y6hu8b","@keyframes svelte-y6hu8b-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--tail-gap)))}}.marquee.svelte-y6hu8b.svelte-y6hu8b{display:flex;overflow:hidden;user-select:none;gap:var(--tail-gap)}.marquee.svelte-y6hu8b .marquee_content.svelte-y6hu8b{flex-shrink:0;display:flex;justify-content:space-around;min-width:100%;gap:var(--tail-gap);animation-name:svelte-y6hu8b-scroll;animation-duration:var(--tail-speed);animation-iteration-count:infinite;animation-timing-function:linear}")}function k(s,t,a){const i=s.slice();return i[3]=t[a],i}function q(s,t,a){const i=s.slice();return i[3]=t[a],i}function x(s){let t,a=s[3]+"",i;return{c(){t=f("div"),i=E(a)},m(l,r){y(l,t,r),m(t,i)},p(l,r){r&1&&a!==(a=l[3]+"")&&w(i,a)},d(l){l&&_(t)}}}function M(s){let t,a=s[3]+"",i;return{c(){t=f("div"),i=E(a)},m(l,r){y(l,t,r),m(t,i)},p(l,r){r&1&&a!==(a=l[3]+"")&&w(i,a)},d(l){l&&_(t)}}}function V(s){let t,a,i,l,r=s[0],o=[];for(let n=0;n<r.length;n+=1)o[n]=x(q(s,r,n));let d=s[0],c=[];for(let n=0;n<d.length;n+=1)c[n]=M(k(s,d,n));return{c(){t=f("div"),a=f("div");for(let n=0;n<o.length;n+=1)o[n].c();i=F(),l=f("div");for(let n=0;n<c.length;n+=1)c[n].c();g(a,"class","marquee_content svelte-y6hu8b"),g(l,"class","marquee_content svelte-y6hu8b"),g(l,"aria-hidden","true"),g(t,"class","marquee svelte-y6hu8b"),h(t,"--tail-gap",s[1]),h(t,"--tail-speed",s[2])},m(n,u){y(n,t,u),m(t,a);for(let e=0;e<o.length;e+=1)o[e].m(a,null);m(t,i),m(t,l);for(let e=0;e<c.length;e+=1)c[e].m(l,null)},p(n,[u]){if(u&1){r=n[0];let e;for(e=0;e<r.length;e+=1){const p=q(n,r,e);o[e]?o[e].p(p,u):(o[e]=x(p),o[e].c(),o[e].m(a,null))}for(;e<o.length;e+=1)o[e].d(1);o.length=r.length}if(u&1){d=n[0];let e;for(e=0;e<d.length;e+=1){const p=k(n,d,e);c[e]?c[e].p(p,u):(c[e]=M(p),c[e].c(),c[e].m(l,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=d.length}u&2&&h(t,"--tail-gap",n[1]),u&4&&h(t,"--tail-speed",n[2])},i:v,o:v,d(n){n&&_(t),b(o,n),b(c,n)}}}function X(s,t,a){let{data:i=[]}=t,{gap:l="60px"}=t,{speed:r="5s"}=t;return s.$$set=o=>{"data"in o&&a(0,i=o.data),"gap"in o&&a(1,l=o.gap),"speed"in o&&a(2,r=o.speed)},[i,l,r]}class D extends T{constructor(t){super(),j(this,t,X,V,B,{data:0,gap:1,speed:2},L)}}const C=D;D.__docgen={version:3,name:"Marquee.svelte",data:[{visibility:"public",description:null,keywords:[],name:"data",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"array",type:"array"}},{visibility:"public",description:null,keywords:[],name:"gap",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"60px"},{visibility:"public",description:null,keywords:[],name:"speed",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"5s"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const G={parameters:{storySource:{source:`import Marquee from '../components/Marquee.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Example/Marquee',
  component: Marquee,
  argTypes: {
    data: { control: 'text' },
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
`,locationsMap:{demo:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"Example/Marquee",component:C,argTypes:{data:{control:"text"},gap:{control:"text"},speed:{action:"test"}}},z=s=>({Component:C,props:s,on:{click:s.onClick}}),A=z.bind({});A.args={data:["\u5F20\u4E09\u4E2D\u5956\u4E86","\u674E\u56DB\u4E2D\u5956\u4E86","\u738B\u4E94\u4E5F\u4E2D\u5956\u4E86"],speed:"10s",gap:"1rem"};const H=["Demo"];export{A as Demo,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Marquee.stories.a551c3c8.js.map
