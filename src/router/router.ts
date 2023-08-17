import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { UserRoleEnum } from '@/enums/user-role.enum.ts';
import { useAuthStore } from '@/store/auth.store.ts';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/PageHome.vue'),
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => import('@/pages/admin/PageAdmin.vue'),
    meta: {
      roleToAccess: UserRoleEnum.ADMIN,
    },
    children: [
      {
        name: 'admin-users',
        path: 'users',
        component: () => import('@/pages/admin/users/PageAdminUsers.vue'),
        redirect: {
          name: 'admin-users-all',
        },
        children: [
          {
            name: 'admin-users-create',
            path: 'create',
            component: () => import('@/pages/admin/users/PageAdminUsersCreate.vue'),
          },
          {
            name: 'admin-users-all',
            path: 'all',
            component: () => import('@/pages/admin/users/PageAdminUsersAll.vue'),
          },
          {
            name: 'admin-users-fired',
            path: 'fired',
            component: () => import('@/pages/admin/users/PageAdminUsersFired.vue'),
          },
        ],
      },
      {
        name: 'admin-departments',
        path: 'departments',
        component: () => import('@/pages/admin/departments/PageAdminDepartments.vue'),
      },
      {
        name: 'admin-breaks',
        path: 'breaks',
        component: () => import('@/pages/admin/breaks/PageAdminBreaks.vue'),
      },
      {
        name: 'admin-stat',
        path: 'stat',
        component: () => import('@/pages/admin/stat/PageAdminStat.vue'),
      },
      {
        name: 'admin-reclamations',
        path: 'reclamations',
        component: () => import('@/pages/admin/reclamations/PageAdminReclamations.vue'),
      },
    ],
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('@/pages/PageLogin.vue'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.meta.roleToAccess) {
    const userStore = useAuthStore();
    console.log(1);
    if (userStore.userRole !== to.meta.roleToAccess) {
      return { name: 'login' };
    }
  }
});
