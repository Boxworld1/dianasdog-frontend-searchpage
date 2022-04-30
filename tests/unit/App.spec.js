import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  const wrapper = mount(App)
  const testcase = "my input"
  
  it('文本框输入', () => {
    const inputText = wrapper.find('#searchText')
    inputText.setValue(testcase)

    expect((inputText.element).value).toBe(testcase)
  })

  it('点击查找', () => {
    const searchButton = wrapper.find('#searchButton')
    searchButton.trigger('click')
    expect((wrapper.find('#searchText').element).value).toBe(testcase)
  })
})
