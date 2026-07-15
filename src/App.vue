<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="app__main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.app {
  min-height: 100vh;
  background-color: #f8fafc;

  &__main {
    width: min(1200px, calc(100% - 2rem));
    margin: 0 auto;
    padding: 2rem 0;
  }
}
</style>
