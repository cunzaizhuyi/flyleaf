# AniNumber组件

## 使用示例
```javascript
import { AniNumber } from 'flyleaf';
  const div = new AniNumber({
    target: document.getElementById('app'),
    props: {
      startNum: 182, // 开始数字
      targetNum: 200, // 要滚动到的目标数字
      duration: 3, // 单位是秒
      direction: 'up', // up、down
      isStart: true, // 是否立即开始动画
      circleNum: 2, // 0-9要循环几圈，也是一种控制速度/动画时间的方式
    }
  })
```