<template>
  <div class="cocktail__item">
    <div class="cocktail__image">
      <img v-lazy="props.cocktail.strDrinkThumb" :alt="props.cocktail.strDrink" class="cocktail__img">
    </div>
    <div class="cocktail__title">
      {{ props.cocktail.strDrink }}
    </div>

    <div class="cocktail__text">{{ props.cocktail.strCategory }}</div>
    <div class="cocktail__text">{{ props.cocktail.strAlcoholic }}</div>
    <div class="cocktail__text">{{ props.cocktail.strGlass }}</div>

    <div class="cocktail__subtitle">
      Instructions:
    </div>
    <div class="cocktail__text">{{ props.cocktail.strInstructions }}</div>

    <div class="cocktail__subtitle">
      List of ingredients:
    </div>
    <div class="cocktail__ingredients">
      <template v-for="ingredient in ingredients" :key="ingredient.ingredient" >
        <div class="cocktail__measure">{{ ingredient.measure }}</div>
        <div class="cocktail__ingredient">{{ ingredient.ingredient }}</div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ICocktail } from '@/types/types';
import { computed } from 'vue';
interface CocktailProps {
  cocktail: ICocktail;
}

const props = defineProps<CocktailProps>();

function extractFields<T extends Record<string, string>>(data: T, fieldPrefix: string): string[] {
  return Object.keys(data)
    .filter((key) => key.startsWith(fieldPrefix) && data[key])
    .map((key) => data[key]);
}

function extractIngredients(cocktail: Record<string, string>) {
  const ingredients = extractFields(cocktail, "strIngredient");
  const measures = extractFields(cocktail, "strMeasure");

  return ingredients.map((ingredient, index) => ({
    ingredient,
    measure: measures[index] || "",
  }));
}

const ingredients = computed(() => {
  return extractIngredients(props.cocktail)
})

</script>