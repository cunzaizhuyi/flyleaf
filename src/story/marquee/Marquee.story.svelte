<script>
  // import 'uno.css';
  import Marquee from '@/components/Marquee.svelte';
  export let Hst;

  const args = {
    data: ['张三中奖100万', '李四中奖1000万', '王五中奖100万'],
    speed: '15s',
    gap: '100px',
  };
  let { data, speed, gap } = args;
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <Marquee {data} {speed} {gap}></Marquee>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={data} title="data" />
    <Hst.Text bind:value={speed} title="speed" />
    <Hst.Text bind:value={gap} title="gap" />
  </svelte:fragment>
</Hst.Story>
