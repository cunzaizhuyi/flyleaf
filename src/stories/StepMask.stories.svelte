<script lang="ts">
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import StepMask from '../components/StepMask.svelte';
</script>


<Meta title="StepMask" component={StepMask} />

<Template let:args>
  <StepMask {...args} />
</Template>

<Story name="demo">
  <StepMask></StepMask>
<!--  <div class="boxes">-->
<!--    <div id="box1" class="box bg-yellow">A</div>-->
<!--    <div id="box2" class="box bg-pink">B</div>-->
<!--    <div id="box3" class="box bg-blue">C</div>-->

<!--  </div>-->
</Story>

<!--<style lang="scss">-->
<!--  .boxes{-->
<!--    .box{-->
<!--      width: 200px;-->
<!--      height: 100px;-->
<!--    }-->
<!--  }-->
<!--</style>-->