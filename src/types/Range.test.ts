import { describe, it, expect } from 'vitest'
import Range from './Range'

describe('Range', () => {
  describe('constructor', () => {
    it('creates an empty range by default', () => {
      const range = new Range()
      expect(range.toString()).toBe('-')
    })

    it('creates a range with a single value', () => {
      const range = new Range(5)
      expect(range.toString()).toBe('5')
    })
  })

  describe('expandTo', () => {
    it('expands an empty range to include a number', () => {
      const range = new Range()
      range.expandTo(7)
      expect(range.toString()).toBe('7')
    })

    it('expands a single value range to include higher number', () => {
      const range = new Range(5)
      range.expandTo(10)
      expect(range.toString()).toBe('5-10')
    })

    it('expands a single value range to include lower number', () => {
      const range = new Range(10)
      range.expandTo(5)
      expect(range.toString()).toBe('5-10')
    })

    it('keeps the same range when expanding with existing value', () => {
      const range = new Range(7)
      range.expandTo(7)
      expect(range.toString()).toBe('7')
    })

    it('expands to include multiple values creating continuous range', () => {
      const range = new Range(5)
      range.expandTo(6)
      range.expandTo(7)
      range.expandTo(8)
      expect(range.toString()).toBe('5-8')
    })

    it('handles expanding with values in non-sequential order', () => {
      const range = new Range(10)
      range.expandTo(15)
      range.expandTo(5)
      range.expandTo(20)
      expect(range.toString()).toBe('5-20')
    })
  })

  describe('toString', () => {
    it('returns dash for empty range', () => {
      const range = new Range()
      expect(range.toString()).toBe('-')
    })

    it('returns single number when min equals max', () => {
      const range = new Range(42)
      expect(range.toString()).toBe('42')
    })

    it('returns hyphenated range when min differs from max', () => {
      const range = new Range(1)
      range.expandTo(5)
      expect(range.toString()).toBe('1-5')
    })

    it('formats range correctly regardless of expansion order', () => {
      const range = new Range()
      range.expandTo(100)
      range.expandTo(50)
      expect(range.toString()).toBe('50-100')
    })
  })

  describe('real-world GURPS usage scenarios', () => {
    it('creates speed range 1-5', () => {
      const range = new Range(1)
      for (let i = 2; i <= 5; i++) {
        range.expandTo(i)
      }
      expect(range.toString()).toBe('1-5')
    })

    it('creates single speed value 35', () => {
      const range = new Range(35)
      expect(range.toString()).toBe('35')
    })

    it('handles typical slam table speed progression', () => {
      const range = new Range()
      range.expandTo(6)
      range.expandTo(7)
      range.expandTo(8)
      range.expandTo(9)
      range.expandTo(10)
      expect(range.toString()).toBe('6-10')
    })
  })
})