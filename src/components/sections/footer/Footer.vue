<script setup lang="ts">
import { ContactGroup } from "@sections";
import { Link, Container } from "@ui";
import { Navigation } from "@jsons";
import { IsMobile } from "@/hooks/hooks";
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer-enterprise">
        <Link :to="{ name: 'home' }">
          <img src="@images/logo-white.png" alt="logo" class="footer-logo" />
        </Link>
        <ContactGroup :vertical="!IsMobile()" transparent />
      </div>
      <div v-if="!IsMobile()" class="footer-nav">
        <nav class="footer-nav">
          <ul class="footer-nav-list">
            <li
              v-for="menu in Navigation"
              :key="menu.link"
              class="footer-nav-item"
            >
              <Link :to="{ name: menu.link }" :label="menu.slug" />
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  </footer>
</template>

<style lang="scss">
@import "./style.scss";
</style>
