import { shallowMount } from "@vue/test-utils"
import Modal from '../Modal.vue'

test('calls onClose when button is clicked', () => {
    const onClose = jest.fn()
    const wrapper = shallowMount(Modal, { propsData: { onClose } })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close-modal')).toHaveLength(1)
})

