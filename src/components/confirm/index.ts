import Confirm from '@/components/confirm/Confirm.svelte';

interface IOption{
  title: string
  content: string
  okText?: string
  cancelText?: string
  onOk?: Function
  onCancel?: Function
}

export const confirm = (options: IOption) => {
  const node = window.document.createElement('div');
  document.body.appendChild(node);
  const div = new Confirm({
    target: node,
    props: {
      ...options
    },
  });

  div.$on('onOk', () => {
    div.$destroy();
  });

  div.$on('onCancel', () => {
    div.$destroy();
  });
};