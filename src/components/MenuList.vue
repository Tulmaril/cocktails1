<template>
  <div class="menu__list">
    <RouterLink
      v-for="menuItem in menuStore.menu"
      :to="menuItem"
      :key="menuItem"
      :class="{ 'menu__item_active': route.params.cocktail === menuItem }"
      class="menu__item"
    >
      {{ menuItem }}
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useMenuStore } from '../stores/menu.ts';
import { useRoute } from 'vue-router';

const route = useRoute();
const menuStore = useMenuStore();
</script>