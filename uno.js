import {
  presetUno,
  presetAttributify,
  presetIcons
} from 'unocss'

export default {
  shortcuts: {
    'centerLayout': 'flex justify-center items-center',
    'icon-btn': 'text-[0.9em] inline-block select-none opacity-75 transition duration-200 ease-in-out hover:(opacity-100 text-#eb3324) !outline-none disabled:op-50'
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
}