import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';
import { useAuthStore } from '@/store/auth.store.ts';

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/pages/PageHome.vue'),
    beforeEnter: () => {
      const userStore = useAuthStore();
      if (userStore.userRole) return { name: userStore.userRole };
      else return { name: 'login' };
    },
  },
  {
    name: 'admin',
    path: '/admin',
    component: () => import('@/pages/admin/PageAdmin.vue'),
    redirect: {
      name: 'admin-users',
    },
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
        redirect: {
          name: 'admin-departments-all',
        },
        children: [
          {
            name: 'admin-departments-all',
            path: 'all',
            component: () => import('@/pages/admin/departments/PageAdminDepartmentsAll.vue'),
          },
          {
            name: 'admin-departments-create',
            path: 'create',
            component: () => import('@/pages/admin/departments/PageAdminDepartmentsCreate.vue'),
          },
        ],
      },
      {
        name: 'admin-breaks',
        path: 'breaks',
        component: () => import('@/pages/admin/breaks/PageAdminBreaks.vue'),
        redirect: {
          name: 'admin-breaks-all',
        },
        children: [
          {
            name: 'admin-breaks-all',
            path: 'all',
            component: () => import('@/pages/admin/breaks/PageAdminBreaksAll.vue'),
          },
          {
            name: 'admin-breaks-create',
            path: 'create',
            component: () => import('@/pages/admin/breaks/PageAdminBreaksCreate.vue'),
          },
        ],
      },
      {
        name: 'admin-stat',
        path: 'stat',
        component: () => import('@/pages/admin/stat/PageAdminStat.vue'),
      },
    ],
  },
  {
    name: 'manager',
    path: '/manager',
    component: () => import('@/pages/manager/PageManager.vue'),
    redirect: {
      name: 'manager-orders',
    },
    meta: {
      roleToAccess: UserRoleEnum.MANAGER,
    },
    children: [
      {
        name: 'manager-orders',
        path: 'orders',
        redirect: {
          name: 'manager-orders-new',
        },
        component: () => import('@/pages/manager/orders/PageManagerOrders.vue'),
        children: [
          {
            name: 'manager-orders-new',
            path: 'new',
            component: () => import('@/pages/manager/orders/PageManagerOrdersNew.vue'),
          },
          {
            name: 'manager-orders-create',
            path: 'create',
            component: () => import('@/pages/manager/orders/PageManagerOrdersCreate.vue'),
          },
          {
            name: 'manager-orders-breaks',
            path: 'breaks',
            component: () => import('@/pages/manager/orders/PageManagerOrdersBreaks.vue'),
          },
          {
            name: 'manager-orders-stopped',
            path: 'stopped',
            component: () => import('@/pages/manager/orders/PageManagerOrdersStopped.vue'),
          },
          {
            name: 'manager-orders-work',
            path: 'work',
            component: () => import('@/pages/manager/orders/PageManagerOrdersWork.vue'),
          },
        ],
      },
    ],
  },
  {
    name: 'employee',
    path: '/employee',
    component: () => import('@/pages/employee/PageEmployee.vue'),
    redirect: {
      name: 'employee-new',
    },
    meta: {
      roleToAccess: UserRoleEnum.EMPLOYEE,
    },
    children: [
      {
        name: 'employee-work',
        path: 'work',
        component: () => import('@/pages/employee/work/PageEmployeeWork.vue'),
      },
      {
        name: 'employee-new',
        path: 'new',
        component: () => import('@/pages/employee/new/PageEmployeeNew.vue'),
      },
      {
        name: 'employee-stat',
        path: 'stat',
        component: () => import('@/pages/employee/stat/PageEmployeeStat.vue'),
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
    if (userStore.userRole !== to.meta.roleToAccess) {
      return { name: 'login' };
    }
  }
});
