<template>
  <div class="input_outer">
    <img class="santa_logo" src="secret_santa.svg" />
    <h3>Secret Santa generator</h3>
    <p>Add particitants, generate and share links</p>
    <div class="input_background">
      <a v-on:click="onClickAdd" class="input_add"><i class="fas fa-2x fa-plus-circle"></i></a>
      <input placeholder="Add a participant..." v-model="content" v-on:focus="onFocus" v-on:focusout="onFocusOut" v-bind:class="{ input_focus: dataProvided }" autocomplete="off" autofocus="off" type="text" class="input" />
      <hex-list :names="names" />
    </div>
  </div>
</template>

<script>
import HexList from "./HexList"

let index = 0

export default {
  name: 'HexInput',
  data() {
    return {
      dataProvided: false,
      content: "",
      names: {}
    }
  },
  methods: {
    onFocus() {
      this.dataProvided = true
    },
    onFocusOut() {
    },
    onClickAdd() {
      this.names[index++] = this.content
      this.content = ""
    }
  },
  components: {
    HexList
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
  font-size: 30px;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

a {
  transition: 0.3s;
}

a:hover {
  filter: brightness(115%);
}

.input_outer {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
  width: auto;
}


@media (min-height: 900px) { 
  .input_outer {
    margin-top: 10%;
  }
}

.input_background {
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 600px;
  width: 100%;
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;
  border-radius: 5px;
  position: relative;
}

i {
  color: var(--color-primary); 
}

.input {
  width: 100%;
  height: 2.5em;
  border-radius: 10px;
  font-size: 20px;
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;
  background-color: var(--color-white);
  border: none;
  transition: 0.5s;
  caret-color: var(--color-primary);
  color: var(--color-primary);
  padding-left: 20px;
  padding-right: 50px;
}

.input_focus {
  padding-right: 95px;
}

.input_add {
  position: absolute;
  right: 30px;
  top: 70px;
}

.input:hover {
  box-shadow: 0px 0px 15px 0px var(--color-primary);
}

.santa_logo {
  height: 128px;
  width: 128px;
}

</style>
