<script lang="ts">
  import { styleString } from '@/utils/style';

  export let figureArr = [];
  export let delay = 0;
  export let duration = 2;
  export let isStart = false; // 是否开启动画

  export let height = 40;

  $:heightPx = `${height}px`;
  $:totalHeight = height * figureArr.length - height;
  $:translateValPx = `-${totalHeight}px`;

  $:styleObj = {
    height: heightPx,
  };
  $:itemStyleObj = {
    'line-height': heightPx,
  };
</script>

<div class="cui-ani-s-number" style="{styleString(styleObj)}
    --translate: {translateValPx};
    --duration: {duration}s;--delay:{delay}s;">
  <div class="box" class:ani={isStart}>
    {#if Array.isArray(figureArr)}
    {#each figureArr as figure,i (i)}
      <div class="item" style="{styleString(itemStyleObj)}">{ figure }</div>
    {/each}
      {/if}
  </div>
</div>

<style lang="scss">
  .cui-ani-s-number{
    width: 20px;
    background-color: black;
    color: whitesmoke;
    overflow: hidden;
    .box{
      overflow: hidden;
      //transform: translateY(var(--translate));
      // 如果是向上翻滚，则起始是0，到translate负值
      @keyframes up{
        0%{
          transform: translateY(0);
        }
        100%{
          transform: translateY(var(--translate));
        }
      }
      //animation: var(--aniname) var(--duration) 1 ease-in-out;
    }
    .ani{
      animation-name: up;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      animation-duration: var(--duration);
      animation-fill-mode: both;
      animation-delay: var(--delay);
    }
    .item{
      text-align: center;
    }
  }
</style>