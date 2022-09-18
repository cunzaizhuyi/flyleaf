<script>
  // import 'uno.css';
  import SimpleMask from '@/components/SimpleMask.svelte';
  export let Hst;

  let isStart = false;
  let maskCfg = {
    id: 'box',
    duration: 3,
    descUp: '请看这里',
    descDown: '送您一张优惠券',
  };
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <div class="h-100vh">
      <button on:click={() => isStart = true }>点我</button>

      <div id="box" class="w-200px h-100px rounded-10px bg-yellow m-50px">满50减100</div>
      <SimpleMask isStart="{isStart}"
                  maskCfg="{maskCfg}"
                  on:over={()=> {isStart = false; }}
      ></SimpleMask>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
        <Hst.Text bind:value={maskCfg.duration} title="duration" />
        <Hst.Text bind:value={maskCfg.descUp} title="descUp" />
        <Hst.Text bind:value={maskCfg.descDown} title="descDown" />
  </svelte:fragment>
</Hst.Story>
