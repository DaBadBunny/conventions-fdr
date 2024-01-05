// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { OhVueIcon as VIcon, addIcons } from 'oh-vue-icons'

import * as vpIcons from './icons'
import VIconLink from './VIconLink.vue'

import './style.css'

addIcons(...Object.values(vpIcons))

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('VIcon', VIcon)
    app.component('VIconLink', VIconLink)
  }
} satisfies Theme
