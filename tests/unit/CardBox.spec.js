import { shallowMount } from '@vue/test-utils'
import CardBox from '@/components/CardBox.vue'

describe('CardBox.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = '我是内容'
    const wrapper = shallowMount(CardBox, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
