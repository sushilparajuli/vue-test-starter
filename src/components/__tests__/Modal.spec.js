import { shallowMount } from "@vue/test-utils"
import Modal from '../Modal.vue'
import Form from '../Form.vue'

test('calls onClose when button is clicked', () => {
    const onClose = jest.fn()
    const wrapper = shallowMount(Modal, { propsData: { onClose } })
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close-modal')).toHaveLength(1)
})

describe('Form.vue', () => {
    test('emits form-submitted when form is submitted', () => {
        const wrapper = shallowMount(Form)
        wrapper.find('button').trigger('submit')
        expect(wrapper.emitted('form-submitted')).toHaveLength(1)
    })
})