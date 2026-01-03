<template>
  <div id="root">
    <div id="hp-input">
      <label>
        HP
        <input
          v-model.number="hp"
          class="numberInput"
          type="number"
          step="1"
          min="1"
          max="999"
          @change="calculate"
        >
      </label>
    </div>

    <div
      v-if="slamTable.length > 0"
      id="slam-table"
    >
      <table aria-label="Table that shows the damage for each range of speed with the given HP.">
        <thead>
          <tr>
            <th scope="col">
              Speed Range
            </th>
            <th scope="col">
              Damage
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="tableEntry in slamTable"
            :key="tableEntry.damage.toString()"
          >
            <td>{{ tableEntry.speedRange }}</td>
            <td>{{ tableEntry.damage }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SlamTableEntry from '@/types/SlamTableEntry'
import DamageLimit from '@/types/DamageLimit'
import Dice from '@/types/Dice'
import Range from '@/types/Range'

const UNTIL_SPEED = 35
const INITIAL_DAMAGE_LIMITS: Array<DamageLimit> = [ // see B371
  { dice: new Dice(1, -3), limit: 25 },
  { dice: new Dice(1, -2), limit: 50 },
  { dice: new Dice(1, -1), limit: 100 },
  { dice: new Dice(1), limit: 150 }
]

const hp = ref(10)
const slamTable = ref<Array<SlamTableEntry>>([])

function getDamageLimitsUntilSpeed(speed: number): Array<DamageLimit> {
  let damageLimits = [...INITIAL_DAMAGE_LIMITS]

  while (damageLimits[damageLimits.length - 1].limit <= hp.value * speed) {
    const lastDamageLimit = damageLimits[damageLimits.length - 1]
    // see B371
    let nextDice = new Dice(lastDamageLimit.dice.count + 1)
    let nextLimit = lastDamageLimit.limit + 100
    damageLimits.push({ limit: nextLimit, dice: nextDice })
  }
  return damageLimits
}

function calculate(): void {
  if (hp.value < 1) {
    hp.value = 1
  }

  let table: Array<SlamTableEntry> = []
  let currentSpeed = 1

  for (const damageLimit of getDamageLimitsUntilSpeed(UNTIL_SPEED)) {
    let currentRange = new Range()

    while (hp.value * currentSpeed < damageLimit.limit) {
      currentRange.expandTo(currentSpeed)
      currentSpeed++
    }

    table.push({ speedRange: currentRange, damage: damageLimit.dice })
  }

  slamTable.value = table
}

onMounted(() => {
  calculate()
})
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
