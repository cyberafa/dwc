<script setup lang="ts">
import { Icon, Link } from "@ui";

interface SidebarProps {
  nav: Array<{
    slug: string;
    link: string;
  }>;
  links: Array<{
    link: string;
    logo: string;
    brand?: boolean;
  }>;
}

defineProps<SidebarProps>();

const emit = defineEmits(["closeDrawer"]);

function closeDrawer() {
  emit("closeDrawer");
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-overlay" @click="closeDrawer" />
    <div class="sidebar-drawer">
      <header class="drawer-header">
        <img src="@images/logo.png" alt="logo" class="drawer-logo" />
        <Icon name="xmark" class="menu-icon" @click="closeDrawer" />
      </header>
      <main class="drawer-wrapper">
        <nav class="drawer-nav">
          <ul class="drawer-nav-list">
            <li v-for="menu in nav" :key="menu.link" class="drawer-nav-item">
              <Link
                :to="{ name: menu.link }"
                :label="menu.slug"
                @click="closeDrawer"
              />
            </li>
          </ul>
        </nav>
      </main>
      <footer class="drawer-footer">
        <ul class="drawer-links-list">
          <li
            v-for="link in links"
            :key="link.link"
            class="drawer-socials item"
          >
            <Link :href="`${link.link}`">
              <Icon :name="link.logo" :brand="link.brand" />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./style.scss";
</style>
