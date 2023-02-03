<script setup lang="ts">
import { ContactItem } from "@ui";
import { ref, type Ref } from "vue";

interface ContactGroupProps {
  vertical?: boolean;
  transparent?: boolean;
}

const props = defineProps<ContactGroupProps>();

const contactGroupClass: Ref<Array<string>> = ref([]);

if (props.vertical) {
  contactGroupClass.value.push(`-vertical`);
}

if (props.transparent) {
  contactGroupClass.value.push(`-transparent`);
}

const contactList = [
  {
    icon: "whatsapp",
    brand: true,
    label: "55 9 9775-997",
  },
  {
    icon: "phone",
    label: "55 3529-8485",
  },
  {
    icon: "envelope",
    label: "dwc@dwc.ind.br",
  },
];
</script>

<template>
  <div class="contact-group" :class="contactGroupClass">
    <ContactItem
      v-for="item in contactList"
      :key="item.label"
      :icon="item.icon"
      :label="item.label"
      :brand="item.brand"
    />
  </div>
</template>

<style lang="scss">
@import "./style.scss";
</style>
