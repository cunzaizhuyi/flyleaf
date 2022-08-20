import{S as k,i as f,s as B,q as C,r as h,u as c,a as v,v as x,w as L,x as w,p as u,d as z,y as S}from"./index.321ab0ea.js";function _(o){let t,l,s,a,i;return{c(){t=C("button"),l=h(o[1]),c(t,"type","button"),c(t,"class",s=["storybook-button",`storybook-button--${o[0]}`,o[2]].join(" ")),c(t,"style",o[3])},m(e,r){v(e,t,r),x(t,l),a||(i=L(t,"click",o[4]),a=!0)},p(e,[r]){r&2&&w(l,e[1]),r&1&&s!==(s=["storybook-button",`storybook-button--${e[0]}`,e[2]].join(" "))&&c(t,"class",s)},i:u,o:u,d(e){e&&z(t),a=!1,i()}}}function T(o,t,l){let{primary:s=!1}=t,{backgroundColor:a}=t,{size:i="medium"}=t,{label:e=""}=t,r=s?"storybook-button--primary":"storybook-button--secondary",b=a?`background-color: ${a}`:"";const m=S();function g(n){m("click",n)}return o.$$set=n=>{"primary"in n&&l(5,s=n.primary),"backgroundColor"in n&&l(6,a=n.backgroundColor),"size"in n&&l(0,i=n.size),"label"in n&&l(1,e=n.label)},[i,e,r,b,g,s,a]}class y extends k{constructor(t){super(),f(this,t,T,_,B,{primary:5,backgroundColor:6,size:0,label:1})}}const p=y;y.__docgen={version:3,name:"Button.svelte",data:[{keywords:[],visibility:"public",description:"Is this the principal call to action on the page?",name:"primary",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"boolean",type:"boolean"},defaultValue:!1},{keywords:[],visibility:"public",description:"What background color to use",name:"backgroundColor",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{keywords:[],visibility:"public",description:"How large should the button be?",name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"medium"},{keywords:[],visibility:"public",description:"Button contents",name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"click"}],slots:[],refs:[]};const E={parameters:{storySource:{source:`import Button from './Button.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Button,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},secondary:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},large:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}},small:{startLoc:{col:17,line:21},endLoc:{col:2,line:27},startBody:{col:17,line:21},endBody:{col:2,line:27}}}}},title:"Components/Button",component:p,argTypes:{backgroundColor:{control:"color"},label:{control:"text"},onClick:{action:"onClick"},primary:{control:"boolean"},size:{control:{type:"select"},options:["small","medium","large"]}}},d=o=>({Component:p,props:o,on:{click:o.onClick}}),j=d.bind({});j.args={primary:!0,label:"Button"};const M=d.bind({});M.args={label:"Button"};const P=d.bind({});P.args={size:"large",label:"Button"};const V=d.bind({});V.args={size:"small",label:"Button"};const D=["Primary","Secondary","Large","Small"];export{P as Large,j as Primary,M as Secondary,V as Small,D as __namedExportsOrder,E as default};
//# sourceMappingURL=Button.stories.249127d3.js.map
