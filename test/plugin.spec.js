/* /* eslint-env jest */
import { shallowMount, createLocalVue } from '@vue/test-utils'

import App from '@/App.vue'
import Plugin from '@/plugin'

describe('test Plugin', () => {
  it('Test mount plugin', () => {
    let localVue = createLocalVue()
    localVue.use(Plugin)
    shallowMount(App, {
      localVue
    })
  })
})
