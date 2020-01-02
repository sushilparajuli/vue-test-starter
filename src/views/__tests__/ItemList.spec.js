import { shallowMount,mount } from '@vue/test-utils'
import ItemList from '../ItemList.Vue'
import Item from '../../components/Item.vue'
import flushPromises from 'flush-promises'
import { fetchListData } from '../../api/api'
jest.mock('../../api/api.js')

describe('ItemList.vue', () => {
    // test('renders an Item for each item in window.items', async () => {
    //     window.items = [{}, {}, {}] 
    //     const wrapper = shallowMount(ItemList)
    //     const items = wrapper.findAll(Item)
    //     await wrapper.vm.$nextTick()
    //     expect(items).toHaveLength(window.items.length)
    //     items.wrappers.forEach((wrapper, i) => {
    //         expect(wrapper.props().item).toBe(window.items[i])
    //     })
    // })

    test('renders an Item with data for each item', async () => {
       
        expect.assertions(4)
        const $bar = {
            start: () => {},
            finish: () => {}
        }
        const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
        
        fetchListData.mockResolvedValueOnce(items)
        const wrapper = shallowMount(ItemList, { mocks: { $bar } })
        await wrapper.vm.$nextTick();
        await flushPromises();
        const Items  = wrapper.findAll(Item)
        expect(items).toHaveLength(items.length)
        Items.wrappers.forEach((wrapper, i) => {
            expect(wrapper.props().item).toBe(items[i])
        })

    })

    test('calls $bar start on load', async () => {
        const $bar = {
            start: jest.fn(),
            finish: () => {}
        }
        const wrapper = shallowMount(ItemList, { mocks: { $bar } })
        await wrapper.vm.$nextTick()
        expect($bar.start).toHaveBeenCalled()
    })

    test('calls $bar.finish when load is successful', async () => {
        expect.assertions(1)
        const $bar = {
            start: () => { },
            finish: jest.fn()
        }
        shallowMount(ItemList, { mocks: { $bar } })
        await flushPromises();
        expect($bar.finish).toHaveBeenCalled()
    })


    test('calls $bar.fail when load is unsuccessful', async () => {
        expect.assertions(1)
        const $bar = {
            start: () => {},
            fail: jest.fn()
        }
        fetchListData.mockImplementationOnce(() => Promise.reject())
        shallowMount(ItemList, { mocks: { $bar } })
        await flushPromises();
        expect($bar.fail).toHaveBeenCalled()
    })

    
})