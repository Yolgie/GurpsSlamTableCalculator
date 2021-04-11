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
        <tr v-for="tableEntry in slamTable" :key="tableEntry.damage">
          <td>{{ tableEntry.speedRange }}</td>
          <td>{{ tableEntry.damage }}</td>
        </tr>
        <!--        <caption>Table shows the damage for each range of speed with the given HP.</caption>-->
      </table>
    </div>

    <!-- todo add sources in book B371 & B430 -->
    <!-- todo add short description -->
    <!-- todo add aria stuff -->
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import SlamTableEntry from "@/types/slamTableEntry";

@Component
export default class SlamTableCalculator extends Vue {
  hp = 10
  slamTable: SlamTableEntry[] = []

  calculate(): SlamTableEntry[] {
    let damageLimits = new Map([
      ["1d-3", 25],
      ["1d-2", 50],
      ["1d-1", 100],
      ["1d", 150],
      ["2d", 250],
      ["3d", 350]
    ])

    let table: SlamTableEntry[] = []
    let currentSpeed = 1

    for (const [damage, limit] of damageLimits.entries()) {
      let currentRange: number[] = []

      while (this.hp * currentSpeed < limit) {
        currentRange.push(currentSpeed)
        currentSpeed++
      }

      table.push({speedRange: SlamTableCalculator.toRangeString(currentRange), damage: damage})
    }

    this.slamTable = table
    return table
  }

  private static toRangeString(numbers: number[]): string {
    if (numbers.length <= 0) {
      return "-"
    } else if (numbers.length == 1) {
      return numbers[0].toString()
    } else {
      return numbers[0].toString() + "-" + numbers[numbers.length - 1]
    }
  }
}
</script>

<style scoped>
/* todo add styling */
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
