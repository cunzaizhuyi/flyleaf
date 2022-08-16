<!-- inspired by https://ryanmulligan.dev/blog/css-marquee/ -->

<script lang="ts">
  export let data: [];
  export let gap = '60px';
  export let speed = '5s';
</script>

<template>
    <div class="marquee" style="--tail-gap: {gap};--tail-speed: {speed}">
        <div class="marquee_content">
            {#each data as item}
                <div>{item}</div>
            {/each}
        </div>
        <!-- Mirrors the content above -->
        <div class="marquee_content" aria-hidden="true">
            {#each data as item}
                <div>{item}</div>
            {/each}
        </div>
    </div>
</template>

<style lang="scss">
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--tail-gap)));
    }
  }
  .marquee {
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--tail-gap);
    .marquee_content {
      flex-shrink: 0;
      display: flex;
      justify-content: space-around;
      min-width: 100%;
      gap: var(--tail-gap);
      animation-name: scroll;
      animation-duration: var(--tail-speed);
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
</style>
