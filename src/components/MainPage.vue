<template>
  <img alt="Secret Santa Logo" class="w-32 m-auto mt-24" src="/secret_santa.svg"/>
  <div class="m-auto text-center p-8">
    <template v-if="!assignment">
      <ParticipantForm/>
    </template>
    <template v-else>
      <ParticipantResume :assigment="assignment"/>
    </template>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {ParticipantAssignment} from "../interfaces.ts";
import {deserialize} from "../utils.ts";
import ParticipantResume from "./ParticipantResume.vue";
import ParticipantForm from "./ParticipantForm.vue";

const assignment = ref<ParticipantAssignment | undefined>(undefined);

onMounted(() => {
  const token = location.hash.replace(/^#/, '').split('#')[0]
  if (!token) {
    return null
  }

  try {
    assignment.value = deserialize(token)
  } catch (e) {
    console.error(e)
    return null
  }
})
</script>
