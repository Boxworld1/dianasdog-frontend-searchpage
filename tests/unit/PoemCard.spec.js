import { shallowMount } from '@vue/test-utils'
import PoemCard from '@/components/PoemCard.vue'

describe('PoemCard.vue', () => {
  const wrapper = shallowMount(PoemCard, {
    propsData: {
      itemKey: 0,
      content: {
        item: {
          display: {
            title: "Title",
            dynasty: "Tang",
            writer: "writer",
            detail: "detail",
          }
        },
        picture: [],
        type: "poem",
      },
    }
  })
  
  it('check title', () => {
    const title = wrapper.find('#poemcard_title')
    expect(title.text()).toBe('Title')
  })

  it('check description', () => {
    const title = wrapper.find('#poemcard_desc')
    expect(title.text()).toBe('Tang writer')
  })

  it('check author', () => {
    const title = wrapper.find('#poemcard_detail')
    expect(title.text()).toBe('detail')
  })

})
