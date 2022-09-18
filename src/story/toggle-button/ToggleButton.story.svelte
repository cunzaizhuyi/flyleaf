<script>
  // import 'uno.css';
  import ToggleButton from '@/components/ToggleButton.svelte';
  export let Hst;

</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <div>click the icon! </div>
    <ToggleButton></ToggleButton>
  </Hst.Variant>

  <svelte:fragment slot="controls">
  </svelte:fragment>
</Hst.Story>
