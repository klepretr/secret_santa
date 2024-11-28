<script lang="ts" setup>
import Bottom from "./components/Bottom.vue"
import MainPage from "./components/MainPage.vue";
</script>

<template>
  <MainPage/>
  <Bottom/>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #1fae28;
  --color-secondary: #d82056;
  --color-tertiary: #fa7c3c;
  --color-clear: #f0f3f7;
  --color-dark: #1e1e1e;
  --color-white: #ffffff;

  background: var(--color-clear);
  color: var(--color-dark);

  *:focus {
    outline: 0 none transparent;
  }
}

h2 {
  @apply text-4xl font-bold
}

h3 {
  @apply text-3xl font-bold
}

h4 {
  @apply text-2xl font-bold
}

h5 {
  @apply text-xl font-bold
}

h6 {
  @apply text-xl
}

.app-people-name {
  color: var(--color-tertiary);
}

.m-1_25 {
  margin: 0.3125rem; // 5px
}
</style>
