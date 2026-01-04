import {describe, expect, it} from 'vitest'
import {mount} from '@vue/test-utils'
import SlamTableCalculator from './SlamTableCalculator.vue'

describe('SlamTableCalculator', () => {
  describe('component rendering', () => {
    it('renders the component', () => {
      const wrapper = mount(SlamTableCalculator)
      expect(wrapper.exists()).toBe(true)
    })

    it('renders HP input field', () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find<HTMLInputElement>('input[type="number"]')
      expect(input.exists()).toBe(true)
    })

    it('has default HP value of 10', () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find<HTMLInputElement>('input[type="number"]')
      expect(input.element.value).toBe('10')
    })

    it('renders slam table after mount', async () => {
      const wrapper = mount(SlamTableCalculator)
      await wrapper.vm.$nextTick()
      const table = wrapper.find<HTMLInputElement>('#slam-table table')
      expect(table.exists()).toBe(true)
    })

    it('renders table headers', async () => {
      const wrapper = mount(SlamTableCalculator)
      await wrapper.vm.$nextTick()
      const headers = wrapper.findAll<HTMLInputElement>('th')
      expect(headers.length).toBe(2)
      expect(headers[0].text()).toBe('Speed Range')
      expect(headers[1].text()).toBe('Damage')
    })
  })

  describe('HP input validation', () => {
    it('enforces minimum HP of 1', async () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find<HTMLInputElement>('input[type="number"]')

      await input.setValue(0)
      await input.trigger('change')

      expect(input.element.value).toBe('1')
    })

    it('accepts valid HP values', async () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find<HTMLInputElement>('input[type="number"]')

      await input.setValue(50)
      await input.trigger('change')

      expect(input.element.value).toBe('50')
    })

    it('accepts maximum HP value of 999', async () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find<HTMLInputElement>('input[type="number"]')

      await input.setValue(999)
      await input.trigger('change')

      expect(input.element.value).toBe('999')
    })
  })

  describe('slam table calculations', () => {
    it('generates correct table for HP 10 (default)', async () => {
      const wrapper = mount(SlamTableCalculator)
      await wrapper.vm.$nextTick()

      const rows = wrapper.findAll('#slam-table tbody tr')
      expect(rows.length).toBeGreaterThan(0)

      const firstRow = rows[0]
      const cells = firstRow.findAll('td')
      expect(cells[0].text()).toBe('1-2')
    })

    it('generates correct table for HP 20', async () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find('input[type="number"]')

      await input.setValue(20)
      await input.trigger('change')
      await wrapper.vm.$nextTick()

      const rows = wrapper.findAll('#slam-table tbody tr')
      expect(rows.length).toBeGreaterThan(0)

      const firstRow = rows[0]
      const cells = firstRow.findAll('td')
      expect(cells[0].text()).toBe('1')
    })

    it('generates more damage tiers for higher HP', async () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find('input[type="number"]')

      // Low HP
      await input.setValue(5)
      await input.trigger('change')
      await wrapper.vm.$nextTick()
      const lowHpRows = wrapper.findAll('#slam-table tbody tr')
      const lowHpCount = lowHpRows.length

      // High HP
      await input.setValue(100)
      await input.trigger('change')
      await wrapper.vm.$nextTick()
      const highHpRows = wrapper.findAll('#slam-table tbody tr')
      const highHpCount = highHpRows.length

      expect(highHpCount).toBeGreaterThan(lowHpCount)
    })

    it('displays speed ranges correctly', async () => {
      const wrapper = mount(SlamTableCalculator)
      await wrapper.vm.$nextTick()

      const rows = wrapper.findAll('#slam-table tbody tr')
      const firstRowCells = rows[0].findAll('td')
      const speedRange = firstRowCells[0].text()

      // Speed range should be either a single number or a range (e.g., "1-5")
      expect(speedRange).toMatch(/^\d+(-\d+)?$/)
    })
  })

  describe('GURPS rules compliance (B371)', () => {
    it('starts with 1d-3 damage for low speeds', async () => {
      const wrapper = mount(SlamTableCalculator)
      await wrapper.vm.$nextTick()

      const rows = wrapper.findAll('#slam-table tbody tr')
      const firstRow = rows[0].findAll('td')
      expect(firstRow[1].text()).toBe('1d-3')
    })

    it('increments damage by 1d for each tier', async () => {
      const wrapper = mount(SlamTableCalculator)
      const input = wrapper.find('input[type="number"]')

      // Use high HP to get multiple damage tiers
      await input.setValue(100)
      await input.trigger('change')
      await wrapper.vm.$nextTick()

      const rows = wrapper.findAll('#slam-table tbody tr')
      const damages = rows.map(row => row.findAll('td')[1].text())

      // Verify damage progression includes expected values
      expect(damages).toContain('1d-3')
      expect(damages).toContain('1d-2')
      expect(damages).toContain('1d-1')
      expect(damages).toContain('1d')
      expect(damages).toContain('2d')
      expect(damages).toContain('3d')
    })
  })

  describe('accessibility', () => {
    it('has aria-label on table', async () => {
      const wrapper = mount(SlamTableCalculator)
      await wrapper.vm.$nextTick()

      const table = wrapper.find('table')
      expect(table.attributes('aria-label')).toBeDefined()
      expect(table.attributes('aria-label')).toContain('damage')
    })

    it('has proper table structure with th scope attributes', async () => {
      const wrapper = mount(SlamTableCalculator)
      await wrapper.vm.$nextTick()

      const headers = wrapper.findAll('th')
      headers.forEach(header => {
        expect(header.attributes('scope')).toBe('col')
      })
    })

    it('has label for HP input', () => {
      const wrapper = mount(SlamTableCalculator)
      const label = wrapper.find('label')
      expect(label.exists()).toBe(true)
      expect(label.text()).toContain('HP')
    })
  })
})
