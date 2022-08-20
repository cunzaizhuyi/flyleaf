import{S as w,i as N,s as S,z,q as s,r as C,A as _,u as r,a as B,v as i,w as M,x as h,p as F,d as j,f as D}from"./index.321ab0ea.js";function L(e){z(e,"svelte-1mdg895",".notice-modal.svelte-1mdg895.svelte-1mdg895{z-index:999;position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.5)}.notice-modal.svelte-1mdg895 .notice-modal-content.svelte-1mdg895{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:290px;max-height:80%;filter:blur(10);background:#F9F9F9;border-radius:12px}.notice-modal.svelte-1mdg895 .notice-modal-content .modal-content-body.svelte-1mdg895{box-sizing:border-box;margin-top:0px;width:100%;font-size:16px;text-align:center;padding:20px}.notice-modal.svelte-1mdg895 .notice-modal-content .modal-content-body .modal-title.svelte-1mdg895{font-family:PingFangSC-Semibold;font-size:17px;color:#000028;font-weight:bold;margin-bottom:15px}.notice-modal.svelte-1mdg895 .notice-modal-content .modal-content-body .content.svelte-1mdg895{font-family:PingFangSC-Regular;font-size:14px;color:#000028;line-height:1.5;text-align:left}.notice-modal.svelte-1mdg895 .notice-modal-content .notice-button-wrap.svelte-1mdg895{margin:0 20px;margin-bottom:20px;cursor:pointer}.notice-modal.svelte-1mdg895 .notice-modal-content .notice-button-wrap .modal-button.svelte-1mdg895{height:48px;border-radius:8px;font-family:PingFangSC-Medium;font-size:14px;color:#FFFFFF;background:#FF6022}")}function P(e){let o,n,c,a,m,g,l,p,u,x,t,f,b,k,y;return{c(){o=s("div"),n=s("div"),c=s("div"),a=s("div"),m=C(e[1]),g=_(),l=s("div"),p=s("div"),u=C(e[2]),x=_(),t=s("div"),f=s("div"),b=C(e[0]),r(a,"class","modal-title svelte-1mdg895"),r(l,"class","content svelte-1mdg895"),r(c,"class","modal-content-body svelte-1mdg895"),r(f,"class","modal-button centerLayout svelte-1mdg895"),r(t,"class","notice-button-wrap svelte-1mdg895"),r(n,"class","notice-modal-content svelte-1mdg895"),r(o,"class","notice-modal svelte-1mdg895")},m(d,v){B(d,o,v),i(o,n),i(n,c),i(c,a),i(a,m),i(c,g),i(c,l),i(l,p),i(p,u),i(n,x),i(n,t),i(t,f),i(f,b),e[6](o),k||(y=M(f,"click",e[4]),k=!0)},p(d,[v]){v&2&&h(m,d[1]),v&4&&h(u,d[2]),v&1&&h(b,d[0])},i:F,o:F,d(d){d&&j(o),e[6](null),k=!1,y()}}}function q(e,o,n){let{clickText:c="\u6211\u77E5\u9053\u4E86"}=o,{title:a=""}=o,{content:m=""}=o,{onClick:g=()=>{}}=o,l;const p=()=>{l.parentNode.removeChild(l)},u=()=>{g(),p()};function x(t){D[t?"unshift":"push"](()=>{l=t,n(3,l)})}return e.$$set=t=>{"clickText"in t&&n(0,c=t.clickText),"title"in t&&n(1,a=t.title),"content"in t&&n(2,m=t.content),"onClick"in t&&n(5,g=t.onClick)},[c,a,m,l,u,g,x]}class A extends w{constructor(o){super(),N(this,o,q,P,S,{clickText:0,title:1,content:2,onClick:5},L)}}const T=A,G={parameters:{storySource:{source:`import Notice from '../components/notice/Notice.svelte';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Components/Notice',
  component: Notice,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    clickText: { action: 'text'},
    onClick: { action: 'onClick'},
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: Notice,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Demo = Template.bind({});
Demo.args = {
  title: '\u6807\u9898',
  content: '\u5185\u5BB9',
  clickText: '\u786E\u5B9A',
  onClick: () => {
    alert(11);
  }
};
`,locationsMap:{demo:{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"Components/Notice",component:T,argTypes:{title:{control:"text"},content:{control:"text"},clickText:{action:"text"},onClick:{action:"onClick"}}},E=e=>({Component:T,props:e,on:{click:e.onClick}}),R=E.bind({});R.args={title:"\u6807\u9898",content:"\u5185\u5BB9",clickText:"\u786E\u5B9A",onClick:()=>{alert(11)}};const H=["Demo"];export{R as Demo,H as __namedExportsOrder,G as default};
//# sourceMappingURL=Notice.stories.6dae07a3.js.map
