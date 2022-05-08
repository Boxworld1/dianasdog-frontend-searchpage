import {
  shallowMount
} from '@vue/test-utils'
import ImageCarousel from '@/components/ImageCarousel.vue'

describe('check default value', () => {
  const props = shallowMount(ImageCarousel).props()
  const imgList = props.imageList
  expect(imgList.length).toBe(0)
})

describe('ImageCarousel.vue with list.length = 0', () => {
  const wrapper = shallowMount(ImageCarousel, {
    propsData: {
      myID: "car0",
      imageList: []
    }
  })

  it('check button existence', () => {
    expect(wrapper.find('#imagecarousel_left_button').exists()).toBe(false)
    expect(wrapper.find('#imagecarousel_right_button').exists()).toBe(false)
  })
})

describe('ImageCarousel.vue with list.length = 0', () => {
  const wrapper = shallowMount(ImageCarousel, {
    propsData: {
      myID: "car0",
      imageList: []
    }
  })

  it('check button existence', () => {
    expect(wrapper.find('#imagecarousel_left_button').exists()).toBe(false)
    expect(wrapper.find('#imagecarousel_right_button').exists()).toBe(false)
  })

})

describe('ImageCarousel.vue with list = 1', () => {
  const wrapper = shallowMount(ImageCarousel, {
    propsData: {
      myID: "car0",
      imageList: [
        "http://p1-dcd.byteimg.com/img/motor-img/220aced9e4137e45fd33eb9efec89c3b~240x0.png",
      ]
    }
  })

  it('check button existence', () => {
    expect(wrapper.find('#imagecarousel_left_button').exists()).toBe(false)
    expect(wrapper.find('#imagecarousel_right_button').exists()).toBe(false)
  })

})

describe('ImageCarousel.vue with list > 1', () => {
  const wrapper = shallowMount(ImageCarousel, {
    propsData: {
      myID: "car0",
      imageList: [
        "http://p1-dcd.byteimg.com/img/motor-img/220aced9e4137e45fd33eb9efec89c3b~240x0.png",
        "http://p6-dcd.byteimg.com/img/motor-img/a6ed60e1aa3e7f6a9e3e2564b9808abd~240x0.png",
      ]
    }
  })

  it('check left button', () => {
    const button = wrapper.find('#imagecarousel_left_button')
    button.trigger('click')
  })

  it('check right button', () => {
    const button = wrapper.find('#imagecarousel_right_button')
    button.trigger('click')
  })

})