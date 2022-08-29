
## What

flyleaf.js是一个基于svelte开发的跨框架组件库。

好处是：无论你的项目使用什么前端框架（Vue, React, Angular等），都可以引用flyleaf.js里的组件。
因为svelte编译完的组件其实是js模块，即无框架组件。


## Usage

### install
```javascript
npm install flyleaf
```

### use a component
```javascript
import { ComA } from 'flyleaf';

const com = new ComA({
    target: document.getElementById('app'),
    props: {
        
    },
})
com.$on('some-event', (evt)={
    console.log('evt: ', evt)
})
```

## 贡献
欢迎贡献组件，顺便练手svelte.js语法。

## 用户群

使用中有任何疑问，欢迎来用户群交流

![](https://github.com/cunzaizhuyi/flyleaf/blob/master/public/user-group.jpg)