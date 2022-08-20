import Confirm from '../components/confirm/Confirm.svelte';
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
  title: '标题',
  content: '内容',
  okText: '确定',
  cancelText: '取消',
  onOk: () => {
  },
  onCancel: () => {
  }
};
