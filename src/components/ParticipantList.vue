<template>
  <ul class="flex flex-col gap-1">
    <li v-for="assignment in assignments" v-bind:key="assignment.uuid"
        class="flex m-auto border p-2 max-w-lg rounded-lg w-full justify-between participant-item">
      <div>{{ assignment.donor }}</div>
      <a v-if="!done" @click="onDelete(assignment)">
        <Icon :height="iconSizeByAlias('medium')" :width="iconSizeByAlias('medium')" icon="material-symbols:delete-rounded"/>
      </a>
      <span v-else>
        <a v-if="!assignment.copied" @click="onLink(assignment)">
          <Icon :height="iconSizeByAlias('medium')" :width="iconSizeByAlias('medium')" icon="solar:link-bold"/>
        </a>
        <a v-else @click="onLink(assignment)">
          copied!
        </a>
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import {ParticipantAssignment} from "../interfaces.ts";
import {iconSizeByAlias, serialize} from "../utils.ts";
import {Icon} from "@iconify/vue";

const {
  assignments = [],
  done,
} = defineProps<{
  assignments: ParticipantAssignment[],
  done: boolean
}>();

const onDelete = (assignment: ParticipantAssignment) => {
  const index = assignments.indexOf(assignment)
  assignments.splice(index, 1)
};

const onLink = (assignment: ParticipantAssignment) => {
  const link = `${location.href}#${serialize(assignment)}`
  navigator.clipboard.writeText(link).then(() => {
    assignment.copied = true
  }).catch((err) => {
    console.log(err)
  })
}
</script>

<style lang="scss" scoped>
a {
  transition: 0.3s;
  cursor: pointer;
  color: var(--color-primary);

  &:hover {
    color: var(--color-tertiary);
  }
}

.participant-item {
  background-color: var(--color-white);
  color: var(--color-primary);
}
</style>