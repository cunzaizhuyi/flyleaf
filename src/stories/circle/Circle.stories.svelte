<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import {Circle} from '../../components/circle';

  const circles = [
    {
      radius: 3,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 10,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 20,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 30,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 40,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 50,
      text: 'flyleaf',
      bg: 'deepskyblue',
      textStyle: 'color: white; font-size: 20px',
    }
  ];
</script>


<Meta title="Components/Circle"
      component={Circle}
      argTypes={{
      }}
/>

<Template let:args>
  <Circle {...args} />
</Template>


<Story name="document"
args="{{
  radius: 50,
  radiusUnit: 'px',
  bg: 'deepskyblue',
  text: 'flyleaf',
  textClass: '',
  textStyle: 'color: white; font-size: 20px',
}}">
</Story>

<Story name="demo">
  {#each circles as circle}
    <span class="px-10px">
      <Circle {...circle}></Circle>
    </span>
  {/each}

  <div>
    <Circle {...circles[5]}>
      <img src="/logo-big.jpg" class="w-100%">
    </Circle>
  </div>
</Story>


<style lang="scss">
</style>

