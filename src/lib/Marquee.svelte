<!-- inspired by https://ryanmulligan.dev/blog/css-marquee/ -->

<script lang="ts">
export let data: []
</script>

<div class="marquee">
  <ul class="marquee_content">
    {#each data as item}
      <li>{item}</li>
    {/each}
  </ul>
  <!-- Mirrors the content above -->
  <ul class="marquee_content" aria-hidden="true">
    {#each data as item}
      <li>item</li>
    {/each}
  </ul>
</div>

<style>
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
  .marquee {
    --gap: 1rem;
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
  }
  .marquee_content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: var(--gap);
    animation: scroll 10s linear infinite;
  }
</style>