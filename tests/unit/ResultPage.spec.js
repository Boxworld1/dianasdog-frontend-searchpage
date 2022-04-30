import { mount } from '@vue/test-utils'
import ResultPage from '@/views/ResultPage.vue'

describe('ResultPage.vue', () => {
  const wrapper = mount(ResultPage)
  const testcase = "红豆词"
  
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
