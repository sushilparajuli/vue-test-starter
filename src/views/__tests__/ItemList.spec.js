import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.Vue'
import Item from '../../components/Item.vue'
import { exportAllDeclaration } from '@babel/types'

describe('ItemList.vue', () => {
    test('renders an Item for each item in window.items', () => {
        window.items = [{}, {}, {}] 
        const wrapper = shallowMount(ItemList)
        const items = wrapper.findAll(Item)
        expect(items).toHaveLength(window.items.length)
        items.wrappers.forEach((wrapper, i) => {
            expect(wrapper.props().item).toBe(window.items[i])
        })
    })
})