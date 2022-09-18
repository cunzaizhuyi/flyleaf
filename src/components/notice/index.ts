import Notice from '@/components/notice/Notice.svelte';

interface IOption{
  clickText?: string
  title: string
  content: string
  btnStyle?:string
  onClick?: Function
}

export const notice = (options: IOption) => {
  const node = document.createElement('div');
  document.body.appendChild(node);
  const div = new Notice({
    target: node,
    props: {
      ...options
    },
  });

  div.$on('click', () => {
    // options.onClick && options.onClick();
    div.$destroy();
  });
};