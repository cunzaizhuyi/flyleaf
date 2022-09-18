# StepMask组件

## 使用示例
```javascript
import { StepMask } from 'flyleaf';

const mask = new StepMask({
  target: document.getElementById('app'),
  props: {
    isStart: false,
    stepArr: [
      {
        id: 'box1', // 需要镂空的元素1的id
        desc: '这是第1步'
      },
      {
        id: 'box2',
        desc: '这是第2步'
      },
      {
        id: 'box3',
        desc: '这是第3步'
      },
      {
        id: 'box4',
        desc: '这是第4步'
      }
    ],
  }
})
setTimeout(() => {
  mask.$set({'isStart': true});
}, 1000)
```