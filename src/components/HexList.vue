<template>
  <ul>
    <li v-for="(name, index) in names" v-bind:key="index">
      <div class="text">{{ name }}</div>
      <a v-if="!done" v-on:click="onDelete(index)">
        <i class="fas fa-trash"></i>
      </a>
      <a v-else v-on:click="onLink(index)">
        <i class="fas fa-link"></i>
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'HexList',
  props: {
    names: Array,
    done: Boolean
  },
  methods: {
    onDelete(index) {
      delete this.names[index]
    }
  }
}
</script>

<style scoped>
ul {
  width: 100%;
  font-size: 20px;
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;
  margin-top: 25px;
  color: var(--color-primary);
}

li {
  background-color: var(--color-white);
  border-radius: 10px;
  height: 40px;
  margin-bottom: 15px;
  margin-left: 10px;
  margin-right: 10px;
  position: relative;
}

li:last-child {
  margin-bottom: 0px;
}

a:hover {
  opacity: 1;
  filter: brightness(115%);
}

a {
  position: absolute;
  right: 15px;
  top: 10px;
  opacity: 0.60;
  transition: 0.3s;
}

i {
  color: var(--color-tertiary);
}

.text {
  font-size: 18px;
  text-align: left;
  padding-top: 10px;
  padding-left: 15px;
  padding-right: 45px;
  background-color: var(--color-white);
  border: none;
  border-radius: 10px;
}
</style>
