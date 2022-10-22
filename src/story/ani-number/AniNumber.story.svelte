<script>
  // import 'uno.css';
  import { AniNumber } from '@/components/ani-number';
  export let Hst;

  let isStartDown = false;
  let isStartDown2 = false;
  let isStartUp = false;
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <h3>向上翻滚(56 ===> 200)</h3>
    <AniNumber targetNum="{200}"
               duration="{3}"
               direction="up"
               isStart="{isStartUp}"
               startNum="{56}"></AniNumber>
    {#if isStartUp===false }
      <div style="margin-top: 10px">
        <button on:click={() => { isStartUp = true;}}>点击开始</button>
      </div>
    {/if}

    <h3 style="margin-top: 100px">向下翻滚(183 ==> 251)</h3>
    <AniNumber targetNum="{251}"
               duration="{3}"
               isStart="{isStartDown}"
               direction="down"
               startNum="{183}"></AniNumber>
    {#if isStartDown===false }
      <div style="margin-top: 10px">
        <button on:click={() => { isStartDown = true;}}>点击开始</button>
      </div>
    {/if}

    <h3 style="margin-top: 100px">更大效果(72 ===> 384)</h3>
    <div class="big">
      <AniNumber targetNum="{384}"
                 duration="{3}"
                 isStart="{isStartDown2}"
                 direction="down"
                 circleNum="{1}"
                 height="100"
                 startNum="{72}"></AniNumber>
    </div>
    {#if isStartDown2===false }
      <div style="margin-top: 10px">
        <button on:click={() => { isStartDown2 = true;}}>点击开始</button>
      </div>
    {/if}
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <!--    <Hst.Text bind:value={data} title="data" />-->
  </svelte:fragment>
</Hst.Story>

<style>
    :global(.big .cui-ani-s-number) {
        width: 60px!important;
        font-size: 40px;
    }
</style>