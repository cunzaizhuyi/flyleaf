<script lang="ts">
export let dataArr = [];
export let duration = '2s'; // 单位秒
export let bgColor = 'deepskyblue';
export let color = 'white';

$: halfDuration = duration.slice(0, duration.length - 1) / 2 + 's';
</script>

<template>
  <div class="ani-btn" on:click
       style="--duration: {duration}; --half-duration: {halfDuration};background:{bgColor};color:{color}">
    <div class="box inner">{dataArr[0]}</div>
    <div class="box inner2">{dataArr[1]}</div>
  </div>
</template>

<style lang="scss">
@keyframes move{
  0%{
    transform: translateY(70%);
  }
  50%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(-70%);
  }
}
.ani-btn{
  display: inline-block;
  position: relative;
  background-color: deepskyblue;
  border-radius: 20px;
  color: white;
  overflow: hidden;
  .box{
    padding: 8px 15px;
    text-align: center;
    box-sizing: border-box;
  }
  .inner{
    transform: translateY(100%);
    animation-name: move;
    animation-duration: var(--duration);
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.71,1.39,1,.86);
    //animation-timing-function: cubic-bezier(0.35, 1.27, 1, 0.81);
    //animation-timing-function: linear;
  }
  .inner2{
    position: absolute;
    bottom: 0;
    width: 100%;
    animation-name: move;
    animation-duration: var(--duration);
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(.71,1.39,1,.86);
    //animation-timing-function: cubic-bezier(0.35, 1.27, 1, 0.81);
    //animation-timing-function: linear;
    animation-delay: var(--half-duration);
  }
}
</style>