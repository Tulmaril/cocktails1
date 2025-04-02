import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ICocktail } from '~/types/types';
import { fetchCocktailByName } from '@/api/cocktails';

export const useCocktailListStore = defineStore('cocktailList', () => {
  const cocktailList = ref<Record<string, ICocktail[]>>({});
  const isLoading = ref(false);

  const getCocktailList = async (cocktail: string, signal?: AbortSignal) => {
    isLoading.value = true;
    if (!cocktailList.value[cocktail]) {

      try {
        const data = await fetchCocktailByName(cocktail, signal);
        if (data) {
          cocktailList.value[cocktail] = data.drinks;
        }
      } catch (error) {
        isLoading.value = false;
        return error
      }
    }
    isLoading.value = false;
  };

  return {
    isLoading,
    cocktailList,
    getCocktailList,
  };
});