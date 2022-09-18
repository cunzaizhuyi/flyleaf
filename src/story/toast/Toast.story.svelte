<script>
  // import 'uno.css';
  import { toast } from '@/components/toast';
  export let Hst;

  let content = 'toast内容';
  let duration = 2000;
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <button on:click={() => toast(content, duration) }>点我</button>
  </Hst.Variant>

  <svelte:fragment slot="controls">
        <Hst.Text bind:value={content} title="content" />
        <Hst.Text bind:value={duration} title="duration" />
  </svelte:fragment>
</Hst.Story>
