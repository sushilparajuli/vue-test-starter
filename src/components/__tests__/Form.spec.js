import { shallowMount } from "@vue/test-utils"
import Modal from '../Modal.vue'
import Form from '../Form.vue'


describe('Form.vue', () => {
   

    test('sends post request with email on submit', () => {
        const axios = {
            post: jest.fn()
        }
        const wrapper = shallowMount(Form, { mocks: { axios } })
        const input = wrapper.find("input[type='email']")
        input.setValue('email@gmail.com')
        wrapper.find("button").trigger('submit')
        const url = 'http://demo7437963.mockable.io/validate'
        const expectedData = expect.objectContaining({
            email: 'email@gmail.com'
        })
        expect(axios.post).toHaveBeenCalledWith(url, expectedData)
    })

    test('sends post request with enterCompetition checkbox value  on submit', () => {
        const axios = {
            post: jest.fn()
        }
        const wrapper = shallowMount(Form, { mocks: { axios } })
        const input = wrapper.find("input[value='no']")
        input.setChecked()
        wrapper.find("button").trigger('submit')
        const url = 'http://demo7437963.mockable.io/validate'
        const expectedData = expect.objectContaining({
            enterCompetition : false
        })
        expect(axios.post).toHaveBeenCalledWith(url, expectedData)
    })

})


