import{S as B,i as D,s as E,z as M,q as c,r as z,A as F,u as d,a as j,v as o,w,x as h,p as O,d as L,B as P,f as q}from"./index.321ab0ea.js";function A(n){M(n,"svelte-18b0sz0",".confirm-modal.svelte-18b0sz0.svelte-18b0sz0{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.confirm-modal.svelte-18b0sz0 .confirm-modal-content.svelte-18b0sz0{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.confirm-modal.svelte-18b0sz0 .confirm-modal-content .modal-content-body.svelte-18b0sz0{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.confirm-modal.svelte-18b0sz0 .confirm-modal-content .modal-content-body .modal-title.svelte-18b0sz0{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.confirm-modal.svelte-18b0sz0 .confirm-modal-content .modal-content-body .content.svelte-18b0sz0{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.confirm-modal.svelte-18b0sz0 .confirm-modal-content .confirm-button-wrap.svelte-18b0sz0{margin:0 20px;margin-bottom:20px;display:flex;justify-content:space-between}.confirm-modal.svelte-18b0sz0 .confirm-modal-content .confirm-button-wrap .btn.svelte-18b0sz0{width:121px;height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px}.confirm-modal.svelte-18b0sz0 .confirm-modal-content .confirm-button-wrap .button-left.svelte-18b0sz0{color:#848494;background:#FFFFFF;border:0.5px solid #E5E6EE}.confirm-modal.svelte-18b0sz0 .confirm-modal-content .confirm-button-wrap .button-right.svelte-18b0sz0{color:#FFFFFF;background:#FF6022}")}function R(n){let e,l,s,f,g,x,a,b,i,p,r,u,k,t,C,y,T,_;return{c(){e=c("div"),l=c("div"),s=c("div"),f=c("div"),g=z(n[0]),x=F(),a=c("div"),b=c("div"),i=z(n[1]),p=F(),r=c("div"),u=c("div"),k=z(n[2]),t=F(),C=c("div"),y=z(n[3]),d(f,"class","modal-title svelte-18b0sz0"),d(a,"class","content svelte-18b0sz0"),d(s,"class","modal-content-body svelte-18b0sz0"),d(u,"class","btn button-left centerLayout svelte-18b0sz0"),d(C,"class","btn button-right centerLayout svelte-18b0sz0"),d(r,"class","confirm-button-wrap svelte-18b0sz0"),d(l,"class","confirm-modal-content svelte-18b0sz0"),d(e,"class","confirm-modal svelte-18b0sz0")},m(m,v){j(m,e,v),o(e,l),o(l,s),o(s,f),o(f,g),o(s,x),o(s,a),o(a,b),o(b,i),o(l,p),o(l,r),o(r,u),o(u,k),o(r,t),o(r,C),o(C,y),n[9](e),T||(_=[w(u,"click",n[6]),w(C,"click",n[5])],T=!0)},p(m,[v]){v&1&&h(g,m[0]),v&2&&h(i,m[1]),v&4&&h(k,m[2]),v&8&&h(y,m[3])},i:O,o:O,d(m){m&&L(e),n[9](null),T=!1,P(_)}}}function N(n,e,l){let{title:s=""}=e,{content:f=""}=e,{cancelText:g="\u53D6\u6D88"}=e,{okText:x="\u786E\u5B9A"}=e,{onCancel:a=()=>{}}=e,{onOk:b=()=>{}}=e,i;const p=()=>{i.parentNode.removeChild(i)},r=()=>{b(),p()},u=()=>{a(),p()};function k(t){q[t?"unshift":"push"](()=>{i=t,l(4,i)})}return n.$$set=t=>{"title"in t&&l(0,s=t.title),"content"in t&&l(1,f=t.content),"cancelText"in t&&l(2,g=t.cancelText),"okText"in t&&l(3,x=t.okText),"onCancel"in t&&l(7,a=t.onCancel),"onOk"in t&&l(8,b=t.onOk)},[s,f,g,x,i,r,u,a,b,k]}class G extends B{constructor(e){super(),D(this,e,N,R,E,{title:0,content:1,cancelText:2,okText:3,onCancel:7,onOk:8},A)}}const S=G,K={parameters:{storySource:{source:`import Confirm from '../components/confirm/Confirm.svelte';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Components/Confirm',
  component: Confirm,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    okText: { action: 'text'},
    cancelText: { action: 'text'},
    onOk: { action: 'onClick'},
    onCancel: { action: 'onClick'},
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Confirm,
  props: args,
  on: {
    Ok: args.onOk,
    cancel: args.onCancel,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Demo = Template.bind({});
Demo.args = {
  title: '\u6807\u9898',
  content: '\u5185\u5BB9',
  okText: '\u786E\u5B9A',
  cancelText: '\u53D6\u6D88',
  onOk: () => {
  },
  onCancel: () => {
  }
};
`,locationsMap:{demo:{startLoc:{col:17,line:18},endLoc:{col:2,line:25},startBody:{col:17,line:18},endBody:{col:2,line:25}}}}},title:"Components/Confirm",component:S,argTypes:{title:{control:"text"},content:{control:"text"},okText:{action:"text"},cancelText:{action:"text"},onOk:{action:"onClick"},onCancel:{action:"onClick"}}},H=n=>({Component:S,props:n,on:{Ok:n.onOk,cancel:n.onCancel}}),I=H.bind({});I.args={title:"\u6807\u9898",content:"\u5185\u5BB9",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:()=>{},onCancel:()=>{}};const Q=["Demo"];export{I as Demo,Q as __namedExportsOrder,K as default};
//# sourceMappingURL=Confirm.stories.32cb7048.js.map
