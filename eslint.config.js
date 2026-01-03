import {defineConfigWithVueTs, vueTsConfigs} from '@vue/eslint-config-typescript'

export default defineConfigWithVueTs([
  {
    ignores: ['dist', 'node_modules', 'coverage', '*.config.ts', '*.config.js']
  },

  // Strict Vue 3 + TypeScript defaults with type-aware linting
  vueTsConfigs.strictTypeChecked,

  // Minimal overrides
  {
    rules: {
      'vue/multi-word-component-names': 'off' // App.vue is fine
    }
  }
])
