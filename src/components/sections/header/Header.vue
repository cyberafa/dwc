<script setup lang="ts">
import { ref, type Ref } from "vue";
import { IsMobile } from "@hooks";
import { Sidebar } from "@sections";
import { Icon, Container, Link } from "@ui";
import { Navigation, Links } from "@jsons";

const drawerOpen: Ref<boolean> = ref(false);

function openDrawer() {
  drawerOpen.value = true;
}

function closeDrawer() {
  drawerOpen.value = false;
}
</script>

<template>
  <header class="header">
    <Container>
      <Link :to="{ name: 'home' }">
        <img src="@images/logo.png" alt="logo" class="header-logo" />
      </Link>
      <nav v-if="!IsMobile()" class="header-nav">
        <ul class="header-nav-list">
          <li
            v-for="menu in Navigation"
            :key="menu.link"
            class="header-nav-item"
          >
            <Link :to="{ name: menu.link }" :label="menu.slug" />
          </li>
        </ul>
      </nav>
      <div v-if="!IsMobile()" class="header-links">
        <ul class="header-links-list">
          <li
            v-for="link in Links"
            :key="link.link"
            class="header-socials item"
          >
            <Link :href="`${link.link}`">
              <Icon :name="link.logo" :brand="link.brand" />
            </Link>
          </li>
        </ul>
      </div>
      <Icon
        v-if="IsMobile()"
        name="bars"
        @click="openDrawer"
        class="menu-icon"
      />
    </Container>
    <Sidebar
      v-if="IsMobile() && drawerOpen"
      :nav="Navigation"
      :links="Links"
      @close-drawer="closeDrawer"
    />
  </header>
</template>

<style lang="scss">
@import "./style.scss";
</style>
