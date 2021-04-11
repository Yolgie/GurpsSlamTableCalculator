<template>
  <div id="root">
    <div id="hp-input">
      <label>
        HP
        <input type="number" v-model.number="hp" @keyup.enter="calculate">
      </label>
      <button v-on:click="calculate">Generate</button>
    </div>

    <div id="slam-table" v-if="slamTable.length > 0">
      <table class="rtable rtable--flip">
        <tr>
          <th scope="col">Speed Range</th>
          <th scope="col">Damage</th>
        </tr>
        <tr v-for="tableEntry in slamTable" :key="tableEntry.damage.toString()">
          <td>{{ tableEntry.speedRange }}</td>
          <td>{{ tableEntry.damage }}</td>
        </tr>
        <!--        <caption>Table shows the damage for each range of speed with the given HP.</caption>-->
      </table>
    </div>

    <!-- todo add sources in book B371 & B430 -->
    <!-- todo add short description -->
    <!-- todo add aria stuff -->
    <!-- todo change todo's to tickets -->
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SlamTableEntry from "@/types/SlamTableEntry";
import DamageLimit from "@/types/DamageLimit";
import Dice from "@/types/Dice";
import Range from "@/types/Range";

@Component
export default class SlamTableCalculator extends Vue {
  hp = 10
  slamTable: Array<SlamTableEntry> = []

  private static untilSpeed = 25
  private static initialDamageLimits: Array<DamageLimit> = [ // see B371
    {dice: new Dice(1, -3), limit: 25},
    {dice: new Dice(1, -2), limit: 50},
    {dice: new Dice(1, -1), limit: 100},
    {dice: new Dice(1), limit: 150}
  ]

  mounted(): void {
    this.calculate()
  }

  calculate(): void {
    let table: Array<SlamTableEntry> = []
    let currentSpeed = 1

    for (const damageLimit of this.getDamageLimitsUntilSpeed(SlamTableCalculator.untilSpeed)) {
      let currentRange = new Range()

      while (this.hp * currentSpeed < damageLimit.limit) {
        currentRange.expandTo(currentSpeed)
        currentSpeed++
      }

      table.push({speedRange: currentRange, damage: damageLimit.dice})
    }

    this.slamTable = table
  }

  private getDamageLimitsUntilSpeed(speed: number): Array<DamageLimit> {
    let damageLimits = [...SlamTableCalculator.initialDamageLimits]

    while (damageLimits[damageLimits.length - 1].limit <= this.hp * speed) {
      const lastDamageLimit = damageLimits[damageLimits.length - 1]
      // see B371
      let nextDice = new Dice(lastDamageLimit.dice.count + 1)
      let nextLimit = lastDamageLimit.limit + 100
      damageLimits.push({limit: nextLimit, dice: nextDice})
    }
    return damageLimits
  }
}
</script>

<style scoped>
/* todo add more styling */
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
