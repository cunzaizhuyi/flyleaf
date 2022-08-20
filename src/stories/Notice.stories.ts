import Notice from '../components/notice/Notice.svelte';
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
  title: '标题',
  content: '内容',
  clickText: '确定',
  onClick: () => {
    alert(11);
  }
};
