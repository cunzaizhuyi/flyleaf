<!-- inspired by https://blog.csdn.net/oliver940910/article/details/75451847 -->

<script lang="ts">
  let maskDiv;
  let tipDiv;

  export let gapWidth = 5; // 蒙层镂空区域 比 待镂空元素本身 大多少
  export let isStart:Boolean;
  export let stepArr = [];

  const setMask = (arr: {id: string, desc: string}[]) => {
    if (arr.length === 0) {
      maskDiv.style.display = 'none';
      return;
    }

    // 获得要cover的元素的信息
    const { id, desc } = arr[0];
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
    maskDiv.style.display = 'block';
    maskDiv.style.boxSizing = 'border-box';

    maskDiv.style.borderColor = "rgba(0, 0, 0, 0.75)";
    maskDiv.style.borderStyle = 'solid';
    maskDiv.style.borderLeftWidth = eleLeft - gapWidth + 'px';
    maskDiv.style.borderRightWidth = (scrollWidth - eleWidth - eleLeft - gapWidth) + 'px';
    maskDiv.style.borderTopWidth = eleTop - gapWidth + 'px';
    maskDiv.style.borderBottomWidth = (scrollHeight - eleHeight - eleTop - gapWidth) + 'px';

    // 自定义区域位置 todo 有可能镂空区域比较靠下，这时候这里就太靠下了
    tipDiv.style.top = eleHeight + gapWidth * 2 + 10 + 'px';
    tipDiv.style.left = '50%';

    /****************   为Mask设置desc   ****************/
    var maskDesc = document.getElementById('mask-desc');
    maskDesc.innerHTML = desc;

    /****************   绑定next事件   ****************/
    var nextBtn = document.getElementById('next-step-btn');
    nextBtn.onclick = function() {
      arr.shift();
      setMask(arr);
    };
  };

  $:if(isStart){
    setMask(stepArr);
  }
</script>

<div bind:this={maskDiv} style="display: none">
  <div class="mask-tip" bind:this={tipDiv}>
    <span id="mask-desc" class="mask-tip-desc"></span>
    <button id="next-step-btn" class="mask-tip-btn">下一步</button>
  </div>
</div>


<style lang="scss">
  .mask-tip {
    min-width: 175px;
    text-align: center;
    border: 1px solid rgb(0, 94, 166);
    border-radius: 8px;
    padding: 5px 10px;
    position: absolute;
    background: white;
    transform: translateX(-50%);
  }
  .mask-tip:before {
    content: "";
    width: 10px;
    height: 10px;
    border: 1px solid rgb(0, 94, 166);
    background: white;
    position: absolute;
    transform: rotate(45deg);
    top: -6px;
    left: calc(50% - 5px);
    border-right-width: 0;
    border-bottom-width: 0;
  }

  .mask-tip-desc {
    display: block;
    margin-bottom: 10px;
  }

  .mask-tip-btn {
    border-radius: 4px;
    padding: 6px;
    border: none;
    background-color: rgb(0, 94, 166);
    cursor: pointer;
    color: white;
  }
</style>