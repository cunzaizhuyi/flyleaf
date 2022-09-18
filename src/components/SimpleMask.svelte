<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let maskDiv;
  let upDiv;
  let downDiv;

  export let gapWidth = 0; // 蒙层镂空区域 比 待镂空元素本身 大多少
  export let isStart:Boolean;
  export let maskCfg = {};
  $:duration = maskCfg?.duration || 2;

  // 设置 上下两条文案
  const setDesc = () => {
    const { descUp, descDown } = maskCfg;
    if (descUp) {
      var upDescEl = document.getElementById('up-desc');
      upDescEl.innerHTML = descUp;
    }
    if (descDown) {
      var downDescEl = document.getElementById('down-desc');
      downDescEl.innerHTML = descDown;
    }
  };

  const setMask = (maskCgf) => {
    if (!maskCgf) {
      return;
    }

    // 获得要cover的元素的信息
    const { id } = maskCgf;
    var ele = document.getElementById(id);
    var eleWidth = ele.offsetWidth;
    var eleHeight = ele.offsetHeight;
    var eleLeft = ele.offsetLeft;
    var eleTop = ele.offsetTop;
    console.log('待镂空元素: ', eleWidth, eleHeight, eleLeft, eleTop);

    // 获取屏幕大小，包括滚动区域
    var scrollWidth = document.body.scrollWidth;
    var scrollHeight = document.body.scrollHeight;

    /****************   为Mask设置css   ****************/
    maskDiv.style.width = scrollWidth + 'px';
    maskDiv.style.height = scrollHeight + 'px';
    maskDiv.style.position = 'absolute';
    maskDiv.style.left = 0;
    maskDiv.style.top = 0;
    maskDiv.style.boxSizing = 'border-box';
    maskDiv.style.display = 'block';

    maskDiv.style.animation = 'faceIn 3s linear 1';
    maskDiv.style.borderColor = "rgba(0, 0, 0, 0.75)";
    maskDiv.style.borderStyle = 'solid';
    maskDiv.style.borderLeftWidth = eleLeft - gapWidth + 'px';
    maskDiv.style.borderRightWidth = (scrollWidth - eleWidth - eleLeft - gapWidth) + 'px';
    maskDiv.style.borderTopWidth = eleTop - gapWidth + 'px';
    maskDiv.style.borderBottomWidth = (scrollHeight - eleHeight - eleTop - gapWidth) + 'px';

    /****************   上下两条文案的位置    ****************/
    // upDiv.style.top = 0  + 'px';
    upDiv.style.left = '50%';
    downDiv.style.top = eleHeight + gapWidth * 2 + 'px';
    downDiv.style.left = '50%';

    /****************   为Mask设置desc   ****************/
    setDesc();

    /****************   duration秒后自动消失   ****************/
    setTimeout(() => {
      dispatch('over', {});
      maskDiv.style.display = 'none';
    }, duration * 1000);
  };

  $:if(isStart){
    setMask(maskCfg);
  }
</script>

<div bind:this={maskDiv} style="display: none;" class="mask-wrap">
  <div class="mask-tip up" bind:this={upDiv}>
    <div id="up-desc" class="mask-tip-desc"></div>
  </div>
  <div class="mask-tip" bind:this={downDiv}>
    <div id="down-desc" class="mask-tip-desc"></div>
  </div>
</div>


<style lang="scss">
  @keyframes faceIn {
    0%{
      border-color: transparent;
    }
    100%{
      border-color: rgba(0, 0, 0, 0.75);
    }
  }
  .mask-wrap{
    .mask-tip.up{
      transform: translateY(-100%) translateX(-50%);
    }
    .mask-tip {
      min-width: 175px;
      text-align: center;
      //border: 1px solid rgb(0, 94, 166);
      border-radius: 8px;
      padding: 5px 10px;
      position: absolute;
      //background: white;
      color: white;
      transform: translateX(-50%);
    }
    .mask-tip-desc {
    }
  }
</style>