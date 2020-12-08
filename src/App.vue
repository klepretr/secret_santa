<template>
  <hex-input />
  <bottom />
</template>

<script>
import HexInput from './components/HexInput'
import Bottom from './components/Bottom'

export default {
  name: 'App',
  components: {
    HexInput,
    Bottom
  }
}
</script>

<style>
  @import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
</style>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-dark);
}

html {
  scroll-behavior: smooth;
} 

body {
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;
  display: flex;
}

:root {
  --color-primary: #1fae28;
  --color-secondary: #d82056;
  --color-tertiary: #fa7c3c;
  --color-clear: #f0f3f7;
  --color-dark: #1e1e1e;
  --color-white: #ffffff;

  background: var(--color-clear);
}
</style>
