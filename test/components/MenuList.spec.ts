import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import { createRouter, createWebHistory } from 'vue-router';
import { describe, it, expect } from 'vitest';
import MenuList from '../../src/components/MenuList.vue';
import { useMenuStore } from '../../src/stores/menu';

const routes = [
  { path: '/cocktail/:cocktail', name: 'Cocktail' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('MenuList', () => {
  it('shows menu items from store and adds active class to current route', async () => {
    const pinia = createTestingPinia();

    const wrapper = mount(MenuList, {
      global: {
        plugins: [pinia, router],
      },
    });

    const menuStore = useMenuStore();

    menuStore.menu = ['mojito', 'margarita', 'qweqwe'];

    await router.push('/cocktail/margarita');

    const links = wrapper.findAll('.menu__item');
    expect(links.length).toBe(menuStore.menu.length);

    menuStore.menu.forEach((item, index) => {
      expect(links[index].text()).toBe(item);
      const isActive = item === 'margarita';
      expect(links[index].classes('menu__item_active')).toBe(isActive);
    });
  });
});
