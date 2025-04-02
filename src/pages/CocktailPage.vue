<template>
  <LoaderItem v-if="cocktailListStore.isLoading" />
  <ErrorMessage v-else-if="error">{{ error }}</ErrorMessage>
  <div v-else class="cocktail__list">
    <CocktailItem
      v-for="cocktail in cocktailListStore.cocktailList[props.cocktail]"
      :key="cocktail.idDrink"
      :cocktail="cocktail"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch, ref, onBeforeUnmount } from 'vue';
import { useCocktailListStore } from '@/stores/cocktails';
import CocktailItem from '@/components/CocktailItem.vue';
import LoaderItem from '@/components/LoaderItem.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

interface CocktailProps {
  cocktail: string;
}

const props = defineProps<CocktailProps>();
const cocktailListStore = useCocktailListStore();
const error = ref(null)

let controller = new AbortController();

watch(() => props.cocktail, async (newVal) => {
  controller.abort();
  controller = new AbortController();

  error.value = await cocktailListStore.getCocktailList(newVal, controller.signal);
}, { immediate: true });

onBeforeUnmount(() => {
  controller.abort();
});
</script>