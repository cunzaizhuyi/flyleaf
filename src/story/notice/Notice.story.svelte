<script>
  // import 'uno.css';
  import Notice from '@/components/notice/Notice.svelte';
  export let Hst;

  let show = false;
  const args = {
    title: '标题',
    content: '内容',
    clickText: '我知道了',
    onClick: () => {
      show = false;
    },
  };
  let { title, content, clickText, onClick } = args;
  let btnStyle = 'background:orange;color:white';
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <button on:click={() => {show = true;}}>点我</button>
    <div>弹窗展示状态：{show}</div>
    {#if show}
    <Notice {title} {content}
            {clickText} {onClick}
            {btnStyle}
    ></Notice>
    {/if}
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={title} title="Title" />
    <Hst.Text bind:value={content} title="Content" />
    <Hst.Text bind:value={clickText} title="clickText" />
    <Hst.Text bind:value={btnStyle} title="btnStyle" />
  </svelte:fragment>
</Hst.Story>
