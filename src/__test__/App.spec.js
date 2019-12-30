import App from '../App.vue'
import Modal from '../components/Modal.vue'
import { shallowMount } from '@vue/test-utils'

describe('App.vue', () => {
    test('hides Modal when Modal emits close-modal', async () => {
        const wrapper = shallowMount(App)
        wrapper.find(Modal).vm.$emit('close-modal')
        await wrapper.vm.$nextTick();
        expect(wrapper.find(Modal).exists()).toBeFalsy()
    })
    
})