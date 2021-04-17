<template>
  <div id="app">
    <main class="content">
      <h1 class="text--center">GURPS Slam Table Calculator</h1>
      <SlamTableCalculator/>
    </main>

    <footer class="disclaimer">
      <h4>Disclaimer</h4>
      GURPS is a trademark of Steve Jackson Games, and its rules and art are copyrighted by Steve Jackson Games. All
      rights are reserved by Steve Jackson Games. This game aid is the original creation of Matthias Holzinger and is
      released for free distribution, and not for resale, under the permissions granted in the <a
        href="http://www.sjgames.com/general/online_policy.html">Steve Jackson Games Online Policy</a>.
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlamTableCalculator from '@/components/SlamTableCalculator.vue'

@Component({
  components: {
    SlamTableCalculator,
  },
})
export default class App extends Vue {
}
</script>

<style>
html, body {
  height: 100vh;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  flex: 1;
  overflow: auto;
  margin: 40px 60px 0 60px;
}

footer {
  text-align: left;
  padding: 0 8px 5px 8px;
}
</style>
