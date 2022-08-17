<script lang="ts">
  import Counter from '@/lib/Counter.svelte'
  import Marquee from '@/lib/Marquee.svelte'
  import { toast } from '@/lib/toast';

  const data = ['item1', 'item2', 'item3']

  toast('这是toast内容', 1500);
</script>

<main>
  <div class="card">
    <Counter />
  </div>
  <Marquee {data}></Marquee>
</main>

<style lang="less">
  .card{
    background-color: red;
  }
</style>