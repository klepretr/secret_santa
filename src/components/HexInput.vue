<template>
  <div class="input_outer">
    <h3>A quick text comparison tool</h3>
    <p>HexColor use a hash function to generate the color associated with the text entered in the input.</p>
    <div class="input_background">
      <a class="input_add"><i class="fas fa-2x fa-plus-circle"></i></a>
      <hex-viewer :hexhash="hexhash" v-bind:class="{ visible: dataProvided }" />
      <input placeholder="Enter or Paste a text here..." v-model="content" v-on:focus="onFocus" v-on:focusout="onFocusOut" v-bind:class="{ input_focus: dataProvided }" autocomplete="off" autofocus="off" type="text" class="input" />
    </div>
    <footer>
      <p>No data leaves your browser. <br>All saved data is stored in the memory of your browser.<br><br></p>
      <made-with author="Kévin Leprêtre" link="https://github.com/klepretr"></made-with>
    </footer>
  </div>
</template>

<script>
import HexViewer from "./HexViewer"
import MadeWith from "./MadeWith"
import XXH from "xxhashjs"

export default {
  name: 'HexInput',
  data() {
    return {
      dataProvided: false,
      content: "",
      hash: XXH.h32(0x00)
    }
  },
  computed: {
    hexhash: function() { return this.content.trim() ? this.hash.update(this.content).digest().toString(16).slice(0, -2) : "FFFFFF" }
  },
  methods: {
    onFocus() {
      this.dataProvided = true
    },
    onFocusOut() {
      if(!this.content.trim()) {
        this.dataProvided = false
      }
    },
  },
  components: {
    HexViewer,
    MadeWith
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
  font-size: 30px;
  font-weight: lighter;
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

.input {
  width: 100%;
  height: 2.5em;
  border-radius: 10px;
  font-size: 20px;
  width: -moz-available;
  width: -webkit-fill-available;
  width: stretch;
  background-color: var(--color-dark);
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

footer {
  position: absolute;
  bottom: 0px;
}

@media (max-height: 600px) { 
  footer {
    visibility: hidden;
  }
}

</style>
