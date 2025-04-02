import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const menu = ref<string[]>([
    'margarita',
    'mojito',
    'a1',
    'kir',
  ]);

  return {
    menu,
  };
});