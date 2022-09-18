<script>
  // import 'uno.css';
  import Teleport from '@/components/teleport/Teleport.svelte';
  export let Hst;

  let disableTeleport = false;
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <div class="box">
      <button on:click={() => (disableTeleport = !disableTeleport)}>
        click and {disableTeleport ? 'use' : 'disabled'} teleport</button
      >
      <Teleport disabled={disableTeleport}>
        teleport is {disableTeleport ? 'not' : ''} in body
      </Teleport>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
  </svelte:fragment>
</Hst.Story>
