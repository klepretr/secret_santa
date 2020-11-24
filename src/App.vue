<template>
  <banner />
  <hex-input />
  <bottom />
</template>

<script>
import Banner from './components/Banner'
import HexInput from './components/HexInput'
import Bottom from './components/Bottom'

export default {
  name: 'App',
  components: {
    HexInput,
    Banner,
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
  color: var(--color-primary);
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
  --color-primary: #C08497;
  --color-secondary: #F7AF9D;
  --color-tertiary: #F7E3AF;
  --color-clear: #F3EEC3;
  --color-dark: #B0D0D3;
  --color-white: #f8f5ef;

  background: var(--color-white);
}
</style>
