import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ItemList from '../ItemList.Vue'
import Item from '../../components/Item.vue'
import flushPromises from 'flush-promises'
import { fetchListData } from '../../api/api'
jest.mock('../../api/api.js')

const localVue = createLocalVue()
localVue.use(Vuex)

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

    // test('renders an Item with data for each item', async () => {
       
    //     expect.assertions(4)
    //     const $bar = {
    //         start: () => {},
    //         finish: () => {}
    //     }
    //     const items = [{ id: 1 }, { id: 2 }, { id: 3 }]
        
    //     fetchListData.mockResolvedValueOnce(items)
    //     const wrapper = shallowMount(ItemList, { mocks: { $bar } })
    //     await wrapper.vm.$nextTick();
    //     await flushPromises();
    //     const Items  = wrapper.findAll(Item)
    //     expect(items).toHaveLength(items.length)
    //     Items.wrappers.forEach((wrapper, i) => {
    //         expect(wrapper.props().item).toBe(items[i])
    //     })

    // })

    let storeOptions
    let store

    beforeEach(() => {
        storeOptions = {
            getters: {
                displayItems : jest.fn()
            },
            actions: {
                fetchListData :  jest.fn(()=> Promise.resolve())
            }
        }
        store = new Vuex.Store(storeOptions)
    })

    test('renders an Item with data for each item in displayItems', () => {
        const $bar = {
            start: () => {},
            finish: () => {}
        }
        const items = [{}, {}]
        storeOptions.getters.displayItems.mockReturnValue(items)
        const wrapper = shallowMount(ItemList, {
            mocks: { $bar },
            localVue,
            store
        })
        const Items = wrapper.findAll(Item)
        expect(Items).toHaveLength(items.length)
        Items.wrappers.forEach((wrapper, i) => {
            expect(wrapper.vm.item).toBe(items[i])
        })
    })
    test('calls $bar start on load',async () => {
        const $bar = {
            start: jest.fn(),
            finish: () => {}
        }
        const wrapper = shallowMount(ItemList, { mocks: { $bar }, localVue, store })
        await wrapper.vm.$nextTick();
        expect($bar.start).toHaveBeenCalled()
    })

    test('calls $bar.finish when load is successful', async () => {
        expect.assertions(1)
        const $bar = {
            start: () => {},
            finish: jest.fn()
        }
        const wrapper = shallowMount(ItemList, { mocks: { $bar }, localVue, store })
        await wrapper.vm.$nextTick();
        await flushPromises();
        expect($bar.finish).toHaveBeenCalled()
    })


    // test('calls $bar.fail when load is unsuccessful', async () => {
    //     expect.assertions(1)
    //     const $bar = {
    //         start: () => {},
    //         fail: jest.fn()
    //     }
    //     fetchListData.mockImplementationOnce(() => Promise.reject())
    //     const wrapper = shallowMount(ItemList, { mocks: { $bar }, localVue, store })
    //     await wrapper.vm.$nextTick();
    //     await flushPromises();
    //     expect($bar.fail).toHaveBeenCalled()
    // })

    test('dispatches fetchListData with top', async () => {
        expect.assertions(1)
        const $bar = {
            start : () => {},
            finish : () => {}
        }
        store.dispatch = jest.fn(() => Promise.resolve())
        const wrapper = shallowMount(ItemList, { mocks: { $bar }, localVue, store })
        await wrapper.vm.$nextTick();
        expect(store.dispatch).toHaveBeenCalledWith('fetchListData', {
            type: 'top'
          })
       
    })

    test('calls $bar fail when fetchListData throws', async () => { expect.assertions(1)
        const $bar = {
            start: jest.fn(),
            fail: jest.fn()
        }
        storeOptions.actions.fetchListData.mockRejectedValue()
        const wrapper = shallowMount(ItemList, { mocks: { $bar }, localVue, store })
        await wrapper.vm.$nextTick();
        await flushPromises()
        expect($bar.fail).toHaveBeenCalled()
    })

    
})