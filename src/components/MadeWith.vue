<template>
    <p>Made with <img class="love" alt="love" src='./../assets/pixel-heart.png' /> by <a :href="link" class="author">{{ author }}</a></p>
</template>

<script>
export default {
    props: {
        author: String,
        link: String
    }    
}
</script>

<style>
.love {
  width: 16px;
  height: 16px;
}

.author {
    font-weight: bold;
}

a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>