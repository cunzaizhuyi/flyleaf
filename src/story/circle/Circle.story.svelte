<script>
  // import 'uno.css';
  import {Circle} from '@/components/circle';
  export let Hst;

  const circles = [
    {
      radius: 3,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 10,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 20,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 30,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 40,
      text: '',
      bg: 'deepskyblue'
    },
    {
      radius: 50,
      text: 'flyleaf',
      bg: 'deepskyblue',
      textStyle: 'color: white; font-size: 20px',
    }
  ];
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    circle with different radius
    {#each circles as circle}
    <span class="px-10px">
      <Circle {...circle}></Circle>
    </span>
    {/each}

    <div>
      make a avatar/logo with slot
      <Circle {...circles[5]} bg="yellow">
        <img src="/logo-big.jpg" class="w-100%">
      </Circle>
    </div>
  </Hst.Variant>

  <svelte:fragment slot="controls">
<!--    <Hst.Text bind:value={data} title="data" />-->
  </svelte:fragment>
</Hst.Story>
