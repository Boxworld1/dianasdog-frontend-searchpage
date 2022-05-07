import {
  shallowMount
} from '@vue/test-utils'
import MedicineNavTab from '@/components/MedicineNavTab.vue'

describe('MedicineNavTab.vue', () => {
  const wrapper = shallowMount(MedicineNavTab, {
    propsData: {
      itemKey: 0,
      content: [{
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
  })

  it('check name', () => {
    const title = wrapper.find('#medicinenavtab_name_0')
    expect(title.text()).toBe('n1')
  })

  it('check content', () => {
    const title = wrapper.find('#medicinenavtab_content_1')
    expect(title.text()).toBe('ct2')
  })
})