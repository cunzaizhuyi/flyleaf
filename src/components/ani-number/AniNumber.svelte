<script lang="ts">
  import DownSingleNumber from "@/components/ani-number/DownSingleNumber.svelte";
  import UpSingleNumber from "@/components/ani-number/UpSingleNumber.svelte";

  export let targetNum;
  export let startNum = 0;
  export let duration = 2;
  // 完整的圈数来几圈
  export let circleNum = 2;
  export let direction; // down、 up两种滚动方式
  export let isStart = false;
  export let height;

  $: targetNumArr = `${targetNum}`.split('');

  const startNumArr = () => {
    let arr = `${startNum}`.split('');
    while(arr.length < targetNumArr.length) {
      arr.unshift('0');
    }
    return arr;
  };

  // 获取同一数位上的两个起止数字
  const getTwoFigure = (i) => {
     return [startNumArr()[i], targetNumArr[i]];
  };

  // 针对两个起止数字，生成动画需要的数组
  const getFigureArr = (i) => {
    const [start, target] = getTwoFigure(i);
    let result = [];
    for(let i = +start; i <= 9; i++){
        result.push(i);
    }
    // 循环3个 0-9
    for(let i = 0; i <= circleNum; i++){
        for(let j = 0; j <= 9; j++){
          result.push(j);
        }
    }
    // 从0到目标数
    for(let i = 0; i <= +target; i++){
        result.push(i);
    }
    return result;
  };
</script>

<div class="cui-ani-number">
  {#each targetNumArr as figure,i (i)}
    {#if direction === 'down'}
      <DownSingleNumber figureArr="{getFigureArr(i)}"
                   {duration}
                    {isStart}
                        {height}
                   delay="{0.2 * i}"></DownSingleNumber>
    {:else}
      <UpSingleNumber figureArr="{getFigureArr(i)}"
                        {duration}
                      {isStart}
                      {height}
                        delay="{0.2 * i}"></UpSingleNumber>
    {/if}
  {/each}
</div>

<style lang="scss">
  .cui-ani-number{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
</style>