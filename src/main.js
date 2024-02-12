import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)


app.directive('click-outside', {
  mounted: function (el, binding, vNode) {
    if (typeof binding.value !== 'function') {
      const compName = vNode.context.name
      let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
      if (compName) { warn += `Found in component '${compName}'` }

      console.warn(warn)
    }

    const bubble = binding.modifiers.bubble
    const handler = (e) => {
      if (bubble || (!el.contains(e.target) && el !== e.target)) {
        binding.value(e)
      }
    }

    el.__vueClickOutside__ = handler

    document.addEventListener('click', handler)
  },
  unmounted: function (el) {
    document.removeEventListener('click', el.__vueClickOutside__)
    el.__vueClickOutside__ = null
  }
})

app.mount('#app')

