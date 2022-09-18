# AniButton组件

## 使用示例
```javascript
import { ToggleButton } from 'flyleaf';

const btn = new ToggleButton({
  target: document.getElementById('app'),
  props: {
    imgChecked: '',
    imgUnchecked: '',
    checked: false,
    onChange: ()=> {},
  }
})
```