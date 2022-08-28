![](https://github.com/cunzaizhuyi/flyleaf/blob/master/public/logo-big.jpg)

[中文](https://github.com/cunzaizhuyi/flyleaf/blob/master/README_cn.md)

## What

flyleaf.js is a components library based on sveltjs。

It's a cross frontend framework component library, that is to say
no matter what you are using in your project, e.g. Vue2/Vue3/React/Angular, 
you can use flyleaf's components.

Because a compiled component based on sveltejs is ES class;


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

## Contribute
welcome to Contribute your components and practice svelte syntax by the way.