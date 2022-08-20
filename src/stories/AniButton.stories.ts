import AniButton from '../components/AniButton.svelte';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// More on argTypes: https://storybook.js.org/docs/svelte/api/argtypes
export default {
  title: 'Components/AniButton',
  component: AniButton,
  argTypes: {
    dataArr: { control: 'array' },
    duration: { control: 'text' },
    bgColor: { control: 'color' },
    color: { control: 'color' },
    onClick: { control: 'onClick'}
  },
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = (args) => ({
  Component: AniButton,
  props: args,
  on: {
    click: args.onClick,
  },
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Demo = Template.bind({});
Demo.args = {
  dataArr: ['过大啊年', '领福利'],
  duration: '2s',
  bgColor: '',
  color: '',
  onClick: () => {
      alert('点击了按钮')
  }
};


