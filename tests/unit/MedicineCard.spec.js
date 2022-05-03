import { shallowMount } from '@vue/test-utils'
import MedicineCard from '@/components/MedicineCard.vue'

describe('MedicineCard.vue', () => {
  const wrapper = shallowMount(MedicineCard, {
    propsData: {
      itemKey: 0,
      content: {
        item: {
          display: {
            title: "Title",
            type: "type",
            tab: [{
              name: "name",
              tag: [{
                name: "n1",
                content: "ct1"
              }, {
                name: "n2",
                content: "ct2"
              }]
            }]
          }
        },
        picture: [],
        type: "medicine",
      },
    }
  })
  
  it('check title', () => {
    const title = wrapper.find('#medicinecard_title')
    expect(title.text()).toBe('Title')
  })

  it('check type', () => {
    const title = wrapper.find('#medicinecard_type')
    expect(title.text()).toBe('type')
  })

})
