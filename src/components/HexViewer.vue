<template>
  <div class="viewer_outer" :style="{ backgroundColor: '#' + hexhash }">
    
  </div>
</template>

<script>
export default {
  props: {
    hexhash: String
  },
  name: 'HexViewer',
  methods: {
  }
}
</script>

<style scoped>
.viewer_outer {
  border: 3px solid var(--color-primary);
  border-radius: 5px;
  height: 25px;
  position: absolute;
  top: 70.5px;
  right: 73px;
  width: 25px;
  transition: 0.2s;
  opacity: 0;
}

.visible {
  opacity: 1;
}
</style>
