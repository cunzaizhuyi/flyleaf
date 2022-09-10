const { mergeConfig } = require('vite');
const Unocss = require('unocss/vite')
// import { extractorSvelte } from '@unocss/core'
const { extractorSvelte } = require('@unocss/core')
const path = require('path')


module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-svelte-csf",
  ],
  "framework": "@storybook/svelte",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "svelteOptions": {
    "preprocess": import("../svelte.config.js").then(res=>{ res.preprocess })
  },
  "features": {
    "storyStoreV7": false
  },
  async viteFinal(config, { configType }) {
    let unoCfg
    await import("../uno.js").then(res => {
      unoCfg = res.default;
      // console.log('uno res: ', res);
    })
    config.plugins.push(Unocss.default({
      extractors: [extractorSvelte],
      ...unoCfg,
    }));
    return mergeConfig(config, {
      // customize the Vite config here
      base: './',
      resolve: {
        alias: [
          { find: '@', replacement: path.resolve(__dirname, '/src') },
        ],
      },
    });
    // if(configType === "PRODUCTION") {
    //
    // }
    // return config;
  },
}