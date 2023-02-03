<script setup lang="ts">
import { Link } from "@ui";
import { computed, ref, type Ref } from "vue";

interface ButtonProps {
  to?: object;
  href?: string;
  label?: string;
  primary?: boolean;
  outlined?: boolean;
  black?: boolean;
}

const props = defineProps<ButtonProps>();

const buttonClass: Ref<Array<string>> = ref([]);

if (props.primary) {
  buttonClass.value.push("-primary");
}

if (props.outlined) {
  buttonClass.value.push("-outlined");
}

if (props.black) {
  buttonClass.value.push("-black");
}

const buttonComponent = computed<string | object>(() => {
  if (props.to || props.href) {
    return Link;
  } else return "button";
});
</script>

<template>
  <component
    :is="buttonComponent"
    :to="to"
    :href="href"
    class="btn"
    :class="buttonClass"
    v-text="label"
  />
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
