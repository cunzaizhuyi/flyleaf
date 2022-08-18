import Marquee from '../components/Marquee.svelte';

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
  data: ['张三中奖了', '李四中奖了', '王五也中奖了'],
  speed: '10s',
  gap: '1rem'
};
