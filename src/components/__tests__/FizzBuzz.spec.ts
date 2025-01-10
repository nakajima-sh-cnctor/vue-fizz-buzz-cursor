import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FizzBuzz from '../FizzBuzz.vue'

describe('FizzBuzz component with various props', () => {
  const testCases = [
    {
      numbers: [1, 2, 3, 4, 5, 15, 30],
      expected: ['1', '2', 'Fizz', '4', 'Buzz', 'FizzBuzz', 'FizzBuzz'],
    },
    {
      numbers: [6, 10, 20, 21, 25, 45],
      expected: ['Fizz', 'Buzz', 'Buzz', 'Fizz', 'Buzz', 'FizzBuzz'],
    },
    {
      numbers: [7, 8, 9, 10, 11, 12],
      expected: ['7', '8', 'Fizz', 'Buzz', '11', 'Fizz'],
    },
  ]

  testCases.forEach(({ numbers, expected }, index) => {
    it(`renders correctly for test case ${index + 1}`, () => {
      const wrapper = mount(FizzBuzz, {
        props: {
          numbers,
        },
      })

      const paragraphs = wrapper.findAll('p')
      expect(paragraphs.length).toBe(numbers.length)

      paragraphs.forEach((p, i) => {
        expect(p.text()).toBe(expected[i])
      })
    })
  })
})
