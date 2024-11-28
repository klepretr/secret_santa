<template>
  <div :class="{'hover-activated': hover}" class="relative max-w-xl m-auto">
    <input v-model="value"
           :autocomplete="autocomplete === false ? 'off' : undefined"
           :autofocus
           :placeholder
           :style="{color}"
           :type
           class="w-full p-2 border rounded-lg"
           @keyup.enter="onSubmit"/>
    <div class="absolute h-full top-0 right-0">
      <div class="flex flex-row gap-1 m-1_25">
        <template v-for="action in actions">
          <button v-if="action.condition() || false"
                  :style="{
                  backgroundColor: action.bgColor || DEFAULT_ACTION_BUTTON_BG_COLOR,
                  color: action.color || DEFAULT_ACTION_BUTTON_COLOR,
                }"
                  class="p-1 border rounded-lg font-bold text-sm"
                  @click="action.onClick">
            {{ action.label }}
          </button>
        </template>
        <a v-if="icon" class="m-auto cursor-pointer" @click="onSubmit">
          <Icon :color="icon.color || DEFAULT_ACTION_ICON_COLOR"
                :height="iconSizeByAlias(icon.size || 'medium')"
                :icon="icon.name"
                :inline="true"
                :width="iconSizeByAlias(icon.size || 'medium')"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {Icon} from "@iconify/vue";
import {ref} from "vue";
import {InputButtonActionsDef, InputButtonIconDef} from "../interfaces.ts";
import {iconSizeByAlias} from "../utils.ts";

const DEFAULT_INPUT_DEFAULT_COLOR = 'var(--color-dark)';
const DEFAULT_ACTION_ICON_COLOR = 'var(--color-dark)';
const DEFAULT_ACTION_BUTTON_BG_COLOR = 'var(--color-dark)';
const DEFAULT_ACTION_BUTTON_COLOR = 'var(--color-white)';

const {
  actions = [],
  autocomplete,
  autofocus,
  cleanValueAfterSubmit,
  color = DEFAULT_INPUT_DEFAULT_COLOR,
  hover = false,
  icon,
  placeholder,
  type = "text",
} = defineProps<{
  actions?: Array<InputButtonActionsDef>,
  autocomplete?: boolean,
  autofocus?: boolean,
  cleanValueAfterSubmit?: boolean,
  color?: string,
  hover?: boolean,
  icon?: InputButtonIconDef,
  placeholder?: string,
  type?: string,
}>();

const emit = defineEmits<{
  submit: [value: string | undefined]
}>();

const value = ref<string | undefined>(undefined);

const onSubmit = () => {
  emit('submit', value.value)

  if (cleanValueAfterSubmit) {
    value.value = undefined
  }
};
</script>

<style lang="scss" scoped>
input::placeholder {
  color: v-bind('color');
}

.hover-activated {
  input, a, button {
    transition: 0.3s;
  }

  input:hover {
    filter: drop-shadow(0 0 0.25em v-bind('color'));
  }

  a, button {
    &:hover {
      filter: brightness(115%);
    }
  }
}
</style>
