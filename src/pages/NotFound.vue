<template>
  <ErrorMessage>404 Not found {{ props.pathMatch }}</ErrorMessage>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
import ErrorMessage from '@/components/ErrorMessage.vue';

interface CocktailProps {
  pathMatch: string;
}

const props = defineProps<CocktailProps>();
</script>