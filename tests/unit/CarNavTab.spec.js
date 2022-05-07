import {
  shallowMount
} from '@vue/test-utils'
import CarNavTab from '@/components/CarNavTab.vue'

describe('CarNavTab.vue', () => {
  const wrapper = shallowMount(CarNavTab, {
    propsData: {
      itemKey: 0,
      content: [{
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
    }
  })

  it('check context', () => {
    const title = wrapper.find('#carnavtab_0')
    expect(title.text()).toBe('sr1, 1')
  })

})

describe('CarNavTab.vue with > 5 items and > 4 tags', () => {
  const wrapper = shallowMount(CarNavTab, {
    propsData: {
      itemKey: 0,
      content: [{
        tag: "hot",
        series_list: {
          item: [{
            series_name: "sr1",
            price: "1",
          }, {
            series_name: "sr2",
            price: "2",
          }, {
            series_name: "sr3",
            price: "3",
          }, {
            series_name: "sr4",
            price: "4",
          }, {
            series_name: "sr5",
            price: "5",
          }]
        }
      }, {
        tag: "hot",
        series_list: {
          item: [{
            series_name: "sr1",
            price: "1",
          }, {
            series_name: "sr2",
            price: "2",
          }, {
            series_name: "sr3",
            price: "3",
          }, {
            series_name: "sr4",
            price: "4",
          }, {
            series_name: "sr5",
            price: "5",
          }]
        }
      }, {
        tag: "hot",
        series_list: {
          item: [{
            series_name: "sr1",
            price: "1",
          }, {
            series_name: "sr2",
            price: "2",
          }, {
            series_name: "sr3",
            price: "3",
          }, {
            series_name: "sr4",
            price: "4",
          }, {
            series_name: "sr5",
            price: "5",
          }]
        }
      }, {
        tag: "hot",
        series_list: {
          item: [{
            series_name: "sr1",
            price: "1",
          }, {
            series_name: "sr2",
            price: "2",
          }, {
            series_name: "sr3",
            price: "3",
          }, {
            series_name: "sr4",
            price: "4",
          }, {
            series_name: "sr5",
            price: "5",
          }]
        }
      }, {
        tag: "hot",
        series_list: {
          item: [{
            series_name: "sr1",
            price: "1",
          }, {
            series_name: "sr2",
            price: "2",
          }, {
            series_name: "sr3",
            price: "3",
          }, {
            series_name: "sr4",
            price: "4",
          }, {
            series_name: "sr5",
            price: "5",
          }]
        }
      }]
    }
  })

  it('check context', () => {
    const title = wrapper.find('#carnavtab_0')
    expect(title.text()).toBe('sr1, 1')
  })

})