
export const mask = (options) => {
  const { id, duration } = options;

  const div = document.getElementById(id);
  if (!div) return;

  return () => {
    const originZindex = div.style.zIndex;
    div.style.boxShadow = '0 0 0 2000px rgba(0,0,0,0.62)';
    div.style.zIndex = '1000';
    const position = div.style.position;
    div.style.position = position === 'static' ? 'relative' : position;

    setTimeout(() => {
      div.style.boxShadow = '';
      div.style.zIndex = originZindex;
      div.style.position = position;
    }, duration * 1000)
  }
}