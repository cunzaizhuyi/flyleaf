# Circle组件

## 使用示例
```javascript
import { Circle } from 'flyleaf';

const circle = new Circle({
  target: document.getElementById('app'),
  props: {
    radius: 50, // 半径数值
    radiusUnit: 'px', // 默认px
    text: 'flyleaf',
    bg: 'deepskyblue', // 整个圆的背景色
    textStyle: 'color: white; font-size: 20px',
  }
})
```