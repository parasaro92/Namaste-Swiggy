import { expect, test } from 'vitest'
import { sum } from '../components/sum.js'

test('adds 1 + 2 to equal 3', () => {
    // Assertion
  expect(sum(1, 2)).toBe(3)
})