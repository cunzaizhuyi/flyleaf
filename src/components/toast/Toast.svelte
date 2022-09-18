<script lang="ts">
  export let content: string;
</script>

<div class="tail-toast">
  <div class="content text-white bg-#000000">
    {content}
  </div>
</div>

<style lang="scss">
  .tail-toast{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;

    .content{
      margin: 0 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-radius: 10px;
    }
  }
</style>