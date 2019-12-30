import { shallowMount,  mount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(ProgressBar, {
        propsData: {},
        mocks: {},
        stubs: {},
        methods: {},
    });
  jest.useFakeTimers()
});

afterEach(() => {
    wrapper.destroy();
});

describe('ProgressBar.vue', () => {

  test('initializes with 0% width', () => {
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('displays the bar when start is called',async () => {
    expect(wrapper.classes()).toContain('hidden')
    wrapper.vm.start()
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('sets the bar to 100% width when finish is called',  async () => {
    wrapper.vm.start()
    wrapper.vm.finish()
    await wrapper.vm.$nextTick();
    expect(wrapper.element.style.width).toBe('100%')
  })

  test('hides the bar when finish is called', async () => {
    wrapper.vm.start()
    wrapper.vm.finish()
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('hidden')
  })

  test('increases widht by 1% every 100ms after start call', async () => {
    wrapper.vm.start();
    await wrapper.vm.$nextTick()
    jest.runTimersToTime(100)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('1%')
    jest.runTimersToTime(900)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('10%')
    jest.runTimersToTime(4000)
    await wrapper.vm.$nextTick()
    expect(wrapper.element.style.width).toBe('50%')
  })

  test('clears timer when finish is called', async () => {
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    wrapper.vm.start()
    wrapper.vm.finish()
    await wrapper.vm.$nextTick()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
  })

})
