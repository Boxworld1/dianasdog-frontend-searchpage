import { shallowMount } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'

describe('SearchBox.vue', () => {
  const wrapper = shallowMount(SearchBox, {
    props: {}
  })

  it('文本框输入', () => {
    const inputText = wrapper.find('#searchText')
    inputText.setValue('my input')
    expect((inputText.element).value).toBe('my input')
  })

  it('点击查找', () => {
    const searchButton = wrapper.find('#searchButton')
    searchButton.trigger('click')
    expect((wrapper.find('#searchText').element).value).toBe('my input')
  })
})
