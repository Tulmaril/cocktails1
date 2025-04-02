import { createRouter, createWebHistory } from 'vue-router';
import { useMenuStore } from '@/stores/menu';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        { path: '/:cocktail',
          name: 'cocktail',
          component: () => import('@/pages/CocktailPage.vue'),
          props: true,
          beforeEnter(to) {
            const menuStore = useMenuStore();
            const pathString = to.path.substring(1).split('/')[0];

            if (!menuStore.menu.includes(pathString)) {
              return {
                name: 'not-found',
                params: { pathMatch: pathString }
              }
            }
          }
        },
        {
          path: "/:pathMatch(.*)",
          name: 'not-found',
          component: () => import("@/pages/NotFound.vue"),
          props: true,
        },
      ],
    },
  ]
})

router.beforeEach((to, _, next) => {
  const menuStore = useMenuStore();
  if (to.path === '/' && menuStore.menu.length) {
    next({ name: 'cocktail', params: { cocktail: menuStore.menu[0] } });
  } else {
    next();
  }
});

export default router

