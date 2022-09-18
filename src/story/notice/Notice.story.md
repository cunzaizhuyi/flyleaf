# notice方法

## 使用示例
```javascript
import { notice } from 'flyleaf';
  notice({
      title: '这是标题',
      content: '这是内容',
      clickText: '我知道了',
      onClick: () => {
        console.log('ok点击了');
      },
      btnStyle: 'background: red',
    })
```