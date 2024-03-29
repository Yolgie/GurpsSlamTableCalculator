<template>
  <div id="root">
    <div id="hp-input">
      <label>
        HP
        <input class="numberInput"
               type="number"
               step="1"
               min="1"
               max="999"
               v-model.number="hp"
               v-on:change="calculate">
      </label>
    </div>

    <div id="slam-table" v-if="slamTable.length > 0">
      <table aria-label="Table that shows the damage for each range of speed with the given HP.">
        <tr>
          <th scope="col">Speed Range</th>
          <th scope="col">Damage</th>
        </tr>
        <tr v-for="tableEntry in slamTable" :key="tableEntry.damage.toString()">
          <td>{{ tableEntry.speedRange }}</td>
          <td>{{ tableEntry.damage }}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlamTableEntry from '@/types/SlamTableEntry'
import DamageLimit from '@/types/DamageLimit'
import Dice from '@/types/Dice'
import Range from '@/types/Range'

@Component
export default class SlamTableCalculator extends Vue {
  hp = 10
  slamTable: Array<SlamTableEntry> = []

  private static untilSpeed = 35
  private static initialDamageLimits: Array<DamageLimit> = [ // see B371
    { dice: new Dice(1, -3), limit: 25 },
    { dice: new Dice(1, -2), limit: 50 },
    { dice: new Dice(1, -1), limit: 100 },
    { dice: new Dice(1), limit: 150 }
  ]

  mounted (): void {
    this.calculate()
  }

  calculate (): void {
    if (this.hp < 1) {
      this.hp = 1
    }

    let table: Array<SlamTableEntry> = []
    let currentSpeed = 1

    for (const damageLimit of this.getDamageLimitsUntilSpeed(SlamTableCalculator.untilSpeed)) {
      let currentRange = new Range()

      while (this.hp * currentSpeed < damageLimit.limit) {
        currentRange.expandTo(currentSpeed)
        currentSpeed++
      }

      table.push({ speedRange: currentRange, damage: damageLimit.dice })
    }

    this.slamTable = table
  }

  private getDamageLimitsUntilSpeed (speed: number): Array<DamageLimit> {
    let damageLimits = [...SlamTableCalculator.initialDamageLimits]

    while (damageLimits[damageLimits.length - 1].limit <= this.hp * speed) {
      const lastDamageLimit = damageLimits[damageLimits.length - 1]
      // see B371
      let nextDice = new Dice(lastDamageLimit.dice.count + 1)
      let nextLimit = lastDamageLimit.limit + 100
      damageLimits.push({ limit: nextLimit, dice: nextDice })
    }
    return damageLimits
  }
}
</script>

<style scoped>
#root {
  display: flex;
  flex-direction: column;
}

#slam-table {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

#slam-table table {
  border-spacing: unset;
}

#slam-table th {
  text-align: left;
  text-transform: uppercase;
  background: #f2f0e6;
}

#slam-table th,
#slam-table td {
  font-size: 14px;
  padding: 6px 12px;
  border: 1px solid #d9d7ce;
}
</style>
