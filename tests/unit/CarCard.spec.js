import {
  shallowMount
} from '@vue/test-utils'
import CarCard from '@/components/CarCard.vue'

describe('CarCard.vue', () => {
  const wrapper = shallowMount(CarCard, {
    propsData: {
      itemKey: 0,
      content: {
        item: {
          display: {
            sub_brands: {
              item: [{
                tag: "hot",
                series_list: {
                  item: [{
                    series_name: "sr1",
                    price: "1",
                  }, {
                    series_name: "sr2",
                    price: "2",
                  }]
                }
              }]
            },
            title: "Title",
          }
        },
        picture: [],
        type: "car",
      },
    }
  })

  it('check title', () => {
    const title = wrapper.find('#carcard_title')
    expect(title.text()).toBe('Title')
  })

})