import { shallowMount } from '@vue/test-utils'
import BookCard from '@/components/BookCard.vue'

describe('BookCard.vue', () => {
  const wrapper = shallowMount(BookCard, {
    propsData: {
      itemKey: 0,
      content: {
        item: {
          display: {
            chapter_info: [
              { title: "chap1" },
              { title: "chap2" },
              { title: "chap3" }
            ],
            column_desc: "desc",
            column_abstract: "abs",
            column_author: "author",
            title: "Title",
          }
        },
        picture: [
          "http://statics.zhuishushenqi.com/agent/http%3A%2F%2Fimg.1391.com%2Fapi%2Fv1%2Fbookcenter%2Fcover%2F1%2F68864%2F_68864_679086.jpg%2F"
        ],
        type: "book",
      },
    }
  })
  
  it('check title', () => {
    const title = wrapper.find('#bookcard_title')
    expect(title.text()).toBe('Title')
  })

  it('check description', () => {
    const title = wrapper.find('#bookcard_desc')
    expect(title.text()).toBe('desc')
  })

  it('check author', () => {
    const title = wrapper.find('#bookcard_author')
    expect(title.text()).toBe('author')
  })

  it('check abstract', () => {
    const title = wrapper.find('#bookcard_abstract')
    expect(title.text()).toBe('abs')
  })


})
