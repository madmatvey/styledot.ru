import { shallowMount, mount } from '@vue/test-utils'
import Contacts from '@/components/Contacts.vue'

const factory = () => {
  return shallowMount(Contacts, {})
}

describe('Contacts', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Contacts)
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders properly', () => {
    const wrapper = factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
