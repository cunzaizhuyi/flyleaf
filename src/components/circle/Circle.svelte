<script lang="ts">
  import { styleString} from "@/utils/style";

  export let radius:number = 10;
  export let radiusUnit: string = 'px';

  export let text: string = '';
  export let textClass: string = '';
  export let textStyle: string = '';

  export let bg: string = 'gray';

  $:sideLen = radius * 2;
  $:sideLenLenCss = sideLen + radiusUnit;

  $: styleObj = {
    width: sideLenLenCss,
    height: sideLenLenCss,
    ['background-color']: bg,
  }
</script>

<div class="leaf-circle" style="{styleString(styleObj)}">
  {#if !$$slots.default}
  <div class="{`circle-text ${textClass}`}" style="{textStyle}">{text}</div>
  {:else}
  <slot></slot>
  {/if}
</div>

<style lang="scss">
.leaf-circle{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  .circle-text{
    color: white;
  }
}
</style>