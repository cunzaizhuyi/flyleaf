<script>
  // import 'uno.css';
  import StepMask from '@/components/StepMask.svelte';
  export let Hst;

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
  ];
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <div class="h-100vh">
      <button on:click={()=>isStart=true}>click me start</button>
      <div class="boxes">
        <div id="box1" class="box bg-yellow">A</div>
        <div id="box2" class="box bg-pink">B</div>
        <div id="box3" class="box bg-blue">C</div>
        <StepMask isStart="{isStart}" stepArr="{stepArr}" btnText="next step"></StepMask>
      </div>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
  </svelte:fragment>
</Hst.Story>

<style>
    .box{
        width: 200px;
        height: 100px;
        margin: 50px;
    }
    #box2{
        position: relative;
        left: 300px;
    }
</style>