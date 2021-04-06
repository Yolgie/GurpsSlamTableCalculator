<template>
  <div id="app">
    <div class="content">
      <h1 class="text--center">GURPS Slam Table Calculator</h1>
      <SlamTableCalculator/>
    </div>

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
import {Component, Vue} from 'vue-property-decorator';
import SlamTableCalculator from "@/components/SlamTableCalculator.vue";

@Component({
  components: {
    SlamTableCalculator,
  },
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* todo fix sticky footer */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}

footer {
  text-align: left;
}
</style>
