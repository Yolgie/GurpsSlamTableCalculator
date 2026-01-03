import { describe, it, expect } from 'vitest'
import Dice from './Dice'

describe('Dice', () => {
  describe('constructor', () => {
    it('creates a dice with default values', () => {
      const dice = new Dice()
      expect(dice.count).toBe(0)
      expect(dice.mod).toBe(0)
    })

    it('creates a dice with count only', () => {
      const dice = new Dice(3)
      expect(dice.count).toBe(3)
      expect(dice.mod).toBe(0)
    })

    it('creates a dice with count and positive modifier', () => {
      const dice = new Dice(2, 5)
      expect(dice.count).toBe(2)
      expect(dice.mod).toBe(5)
    })

    it('creates a dice with count and negative modifier', () => {
      const dice = new Dice(1, -3)
      expect(dice.count).toBe(1)
      expect(dice.mod).toBe(-3)
    })
  })

  describe('toString', () => {
    it('returns empty string for zero dice', () => {
      const dice = new Dice(0, 0)
      expect(dice.toString()).toBe('')
    })

    it('formats dice count without modifier', () => {
      const dice = new Dice(2)
      expect(dice.toString()).toBe('2d')
    })

    it('formats dice with positive modifier', () => {
      const dice = new Dice(3, 2)
      expect(dice.toString()).toBe('3d+2')
    })

    it('formats dice with negative modifier', () => {
      const dice = new Dice(1, -3)
      expect(dice.toString()).toBe('1d-3')
    })

    it('formats single die', () => {
      const dice = new Dice(1)
      expect(dice.toString()).toBe('1d')
    })

    it('formats modifier only (zero count)', () => {
      const dice = new Dice(0, 5)
      expect(dice.toString()).toBe('+5')
    })

    it('formats negative modifier only (zero count)', () => {
      const dice = new Dice(0, -2)
      expect(dice.toString()).toBe('-2')
    })
  })
})