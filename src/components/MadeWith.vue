<template>
  <p class="mt-12 flex gap-1">Made with <img alt="love icon" class="w-4 h-4" src='./../assets/pixel-heart.png'/> by <a :href="props.link"
                                                                                                                       class="font-bold">{{ props.author }}</a>
  </p>
</template>

<script lang="ts" setup>
const props = defineProps({
  author: String,
  link: String
});
</script>
