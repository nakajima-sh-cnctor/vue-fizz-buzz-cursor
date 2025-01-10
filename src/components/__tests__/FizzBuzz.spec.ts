import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FizzBuzz from '../FizzBuzz.vue'

describe('FizzBuzz component', () => {
  it('renders FizzBuzz correctly', () => {
    const wrapper = mount(FizzBuzz)
    const paragraphs = wrapper.findAll('p')

    expect(paragraphs[0].text()).toBe('1')
    expect(paragraphs[1].text()).toBe('2')
    expect(paragraphs[2].text()).toBe('Fizz')
    expect(paragraphs[3].text()).toBe('4')
    expect(paragraphs[4].text()).toBe('Buzz')
    expect(paragraphs[5].text()).toBe('FizzBuzz')
    expect(paragraphs[6].text()).toBe('FizzBuzz')
  })
})
