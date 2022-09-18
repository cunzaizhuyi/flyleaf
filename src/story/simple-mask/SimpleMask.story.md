# SimpleMask组件

## 使用示例
```javascript
import { SimpleMask } from 'flyleaf';

const mask = new SimpleMask({
  target: document.getElementById('app'),
  props: {
    isStart: false,
    maskCfg: {
      id: 'box', // div元素的id
      duration: 3, // 持续时间，单位秒
      descUp: '给你发券了',
      descDown: '不用客气',
    },
  }
})
setTimeout(() => {
  mask.$set({ isStart: true })
}, 1000);

mask.$on('over', () => {
  // 蒙层结束后。。。
});
```