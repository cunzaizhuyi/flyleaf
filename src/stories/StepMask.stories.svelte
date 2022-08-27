<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import StepMask from '../components/StepMask.svelte';

  let isStart = false;
  let stepArr = [
    {
      id: 'box1',
      desc: 'first step',
    },
    {
      id: 'box2',
      desc: 'second step',
    },
    {
      id: 'box3',
      desc: 'third step',
    }
  ]
</script>


<Meta title="Components/StepMask" component={StepMask} />

<!--<Template let:args>-->
<!--  <div class="boxes">-->
<!--    <div id="box1" class="box bg-yellow">A</div>-->
<!--    <div id="box2" class="box bg-pink">B</div>-->
<!--    <div id="box3" class="box bg-blue">C</div>-->
<!--&lt;!&ndash;    <StepMask {...args} ></StepMask>&ndash;&gt;-->
<!--    <slot></slot>-->
<!--  </div>-->
<!--</Template>-->

<Story name="demo">
  <button on:click={()=>isStart=true}>click me start</button>
  <div class="boxes">
    <div id="box1" class="box bg-yellow">A</div>
    <div id="box2" class="box bg-pink">B</div>
    <div id="box3" class="box bg-blue">C</div>
    <StepMask isStart="{isStart}" stepArr="{stepArr}"></StepMask>
  </div>
</Story>

<style lang="scss">
  .boxes{

  }
  .box{
    width: 200px;
    height: 100px;
    margin: 50px;
  }
</style>

