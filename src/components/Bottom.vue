<template>
    <div class="content">
        <footer>
            <p>No data leaves your browser. <br>All saved data is stored in the memory of your browser.<br><br></p>
            <made-with author="Kévin Leprêtre" link="https://github.com/klepretr" />
        </footer>
    </div>
</template>

<script>
import MadeWith from "./MadeWith"

export default {
  components: { 
      MadeWith
   }
}
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
    width: auto;
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