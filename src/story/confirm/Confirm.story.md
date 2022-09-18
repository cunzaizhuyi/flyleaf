# confirm方法

## 使用示例
```javascript
import { confirm } from 'flyleaf';
  confirm({
      title: '这是标题',
      content: '这是内容',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        console.log('ok点击了');
      },
      onCancel: () => {
        console.log('cancel点击了: ');
      },
      okBtnStyle: 'background: red',
      cancelBtnStyle: 'background: gray',
    })
```