<template>
  <h3 class="mt-5">Secret Santa Generator</h3>
  <p class="mt-3">Add participants, generate and share links</p>
  <div class="mt-12">
    <AppInput
        :actions="[{
              onClick: onGenerate,
              condition: () => assignments.length > 2,
              label: 'Create',
              bgColor: inputColor,
            }]"
        :autocomplete="false"
        :autofocus="false"
        :clean-value-after-submit="true"
        :color="inputColor"
        :hover="true"
        :icon="{
              name: 'material-symbols:add-circle',
              size: 'large',
              color: inputColor
            }"
        placeholder="Add a participant..."
        @submit="onClickAdd"
    />
  </div>
  <div class="mt-3">
    <ParticipantList :assignments="assignments" :done="isGenerated"/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import ParticipantList from "./ParticipantList.vue";
import {ParticipantAssignment} from "../interfaces.ts";
import {generateUUID, shuffle} from "../utils.ts";
import AppInput from "./AppInput.vue";

const assignments = ref<ParticipantAssignment[]>([]);
const isGenerated = ref(false);

const inputColor = ref('var(--color-primary)');

const onClickAdd = (value?: string) => {
  if (!value) {
    return
  }

  assignments.value.push({
    uuid: generateUUID(),
    donor: value,
    receiver: undefined,
    copied: false
  })

  for (const assignment of assignments.value) {
    assignment.copied = false
  }

  isGenerated.value = false
}

const onGenerate = () => {
  const shuffledAssignments = shuffle(assignments.value);
  for (let i = 0; i < shuffledAssignments.length; i++) {
    shuffledAssignments[i].receiver = shuffledAssignments[(i + 1) % shuffledAssignments.length].donor;
  }

  isGenerated.value = true
}
</script>
