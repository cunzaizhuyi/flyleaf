<script>
  // import 'uno.css';
  import Confirm from '@/components/confirm/Confirm.svelte';
  export let Hst;

  let show = false;
  const args = {
    title: '标题',
    content: '内容',
    okText: '确定',
    cancelText: '取消',
    onOk: () => {
      show = false;
    },
    onCancel: () => {
      show = false;
    }
  };
  let { title, content, okText, cancelText, onOk, onCancel } = args;
</script>

<Hst.Story>
  <Hst.Variant title="demo">
    <button on:click={() => {show = true;}}>点我</button>
    <div>弹窗展示状态：{show}</div>
    {#if show}
    <Confirm {title} {content} {onOk} {onCancel}></Confirm>
    {/if}
  </Hst.Variant>

  <svelte:fragment slot="controls">
    <Hst.Text bind:value={title} title="Title" />
    <Hst.Text bind:value={content} title="Content" />
    <Hst.Text bind:value={okText} title="okText" />
    <Hst.Text bind:value={cancelText} title="cancelText" />
  </svelte:fragment>
</Hst.Story>
