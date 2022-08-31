<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
  import ToggleButton from '../components/ToggleButton.svelte';

</script>


<Meta title="Components/ToggleButton" component={ToggleButton} />

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
  <div>click the icon! </div>
  <ToggleButton></ToggleButton>
</Story>



