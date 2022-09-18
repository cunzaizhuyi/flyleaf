<script>
  // import 'uno.css';
  import AniButton from '@/components/AniButton.svelte';
  export let Hst;

  let args = {
    dataArr: ['过大啊年', '领福利'],
    duration: '2s',
    bgColor: '',
    color: '',
  };
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <AniButton
        dataArr="{args.dataArr}"
        duration="{args.duration}"
        bgColor="{args.bgColor}"
        color="{args.color}"
        on:click={()=> alert('点了')}></AniButton>
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={args.dataArr} title="dataArr" />
    <Hst.Text bind:value={args.duration} title="duration" />
    <Hst.Text bind:value={args.bgColor} title="bgColor" />
    <Hst.Text bind:value={args.color} title="color" />
  </svelte:fragment>
</Hst.Story>
