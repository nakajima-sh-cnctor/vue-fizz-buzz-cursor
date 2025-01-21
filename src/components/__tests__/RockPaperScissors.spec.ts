import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RockPaperScissors from '../RockPaperScissors.vue'

describe('RockPaperScissors Component', () => {
  it('should simulate a match and display the result when "ぐー" button is clicked', async () => {
    const wrapper = mount(RockPaperScissors)
    await wrapper.find('button.gu').trigger('click')
    const result = wrapper.text()
    expect(result).toMatch(/(ぐー|ちょき|ぱー)に勝ちました|引き分け|負けました/)
  })

  it('should simulate a match and display the result when "ちょき" button is clicked', async () => {
    const wrapper = mount(RockPaperScissors)
    await wrapper.find('button.choki').trigger('click')
    const result = wrapper.text()
    expect(result).toMatch(/(ぐー|ちょき|ぱー)に勝ちました|引き分け|負けました/)
  })

  it('should simulate a match and display the result when "ぱー" button is clicked', async () => {
    const wrapper = mount(RockPaperScissors)
    await wrapper.find('button.pa').trigger('click')
    const result = wrapper.text()
    expect(result).toMatch(/(ぐー|ちょき|ぱー)に勝ちました|引き分け|負けました/)
  })
})
