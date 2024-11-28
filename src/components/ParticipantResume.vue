<template>
  <div class="p-4 max-w-screen-lg m-auto">
    <h3 class="mt-5">Merry christmas 🎄 !</h3>
    <h2 class="mt-8">HoHoho, <span class="app-people-name">{{ assigment.donor }}</span> !<br/>
      You are the secret santa of <span class="app-people-name">{{ assigment.receiver }}</span>.</h2>
    <h6 class="mt-4">I'm sure you'll find a great gift 🎁.</h6>
  </div>
</template>

<script lang="ts" setup>
import {ParticipantAssignment} from "../interfaces.ts";

const {assigment} = defineProps<{
  assigment: ParticipantAssignment
}>()
</script>
