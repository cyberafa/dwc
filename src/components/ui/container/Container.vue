<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Button } from "@ui";

interface ContainerProps {
  textImage?: boolean;
  image?: string;
  title?: string;
  text?: string;
  to?: object;
  href?: string;
  label?: string;
  primary?: boolean;
  outlined?: boolean;
  black?: boolean;
}

const props = defineProps<ContainerProps>();

const containerClass: Ref<Array<string>> = ref([]);

if (props.textImage) {
  containerClass.value.push("-text-image");
}
</script>

<template>
  <div class="container" :class="containerClass">
    <div class="container-wrapper">
      <slot v-if="$slots.default" />
      <div v-if="textImage" class="container-wrapper-image">
        <img :src="image" />
      </div>
      <div v-if="textImage" class="container-wrapper-content">
        <h1 v-html="title" class="container-wrapper-title" />
        <p v-text="text" class="container-wrapper-text" />
        <Button
          :to="to"
          :href="href"
          :label="label"
          :primary="primary"
          :outlined="outlined"
          :black="black"
          class="btn"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
