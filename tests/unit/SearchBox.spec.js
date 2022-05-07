import { shallowMount } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'

describe('check default value', () => {
  const props = shallowMount(SearchBox).props()
  const searchText = props.searchText
  expect(searchText.length).toBe(0)
})

describe('SearchBox.vue', () => {

  const wrapper = shallowMount(SearchBox, {
    stubs: ['router-link', 'router-view']
  })
  const testcase = "my input"
  
  it('文本框生成', () => {
    expect((wrapper.find('#searchBox')).exists()).toBe(true)
  })

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
