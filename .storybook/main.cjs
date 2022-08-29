const { mergeConfig } = require('vite');
const Unocss = require('unocss/vite')

let unoCfg =
  import("../uno.js").then(res => {
    unoCfg = res.default;
    // console.log('uno res: ', res);
  })

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
    // return the customized config
    // return mergeConfig(config, {
    //   // customize the Vite config here
    //   base: './',
    // });
    config.plugins.push(Unocss.default({
      ...unoCfg,
    }));
    if(configType === "PRODUCTION") {
      return {...config, base: './'};
    }
    return config;
  },
}