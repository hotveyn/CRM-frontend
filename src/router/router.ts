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
      name: 'admin-employees',
    },
    meta: {
      roleToAccess: UserRoleEnum.ADMIN,
    },
    children: [
      {
        name: 'admin-employees',
        path: 'employees',
        component: () => import('@/pages/admin/employees/PageAdminEmployees.vue'),
        redirect: {
          name: 'admin-employees-all',
        },
        children: [
          {
            name: 'admin-employees-create',
            path: 'create',
            component: () => import('@/pages/admin/employees/PageAdminEmployeesCreate.vue'),
          },
          {
            name: 'admin-employees-all',
            path: 'all',
            component: () => import('@/pages/admin/employees/PageAdminEmployeesAll.vue'),
          },
          {
            name: 'admin-employees-fired',
            path: 'fired',
            component: () => import('@/pages/admin/employees/PageAdminEmployeesFired.vue'),
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
        redirect: {
          name: 'admin-stat-departments',
        },
        children: [
          {
            name: 'admin-stat-departments',
            path: 'departments',
            component: () => import('@/pages/admin/stat/PageAdminStatDepartments.vue'),
          },
          {
            name: 'admin-stat-completed',
            path: 'ready',
            component: () => import('@/pages/admin/stat/PageAdminStatCompleted.vue'),
          },
          {
            name: 'admin-stat-work',
            path: 'work',
            component: () => import('@/pages/admin/stat/PageAdminStatWork.vue'),
          },
          {
            name: 'admin-stat-stopped',
            path: 'stopped',
            component: () => import('@/pages/admin/stat/PageAdminStatStopped.vue'),
          },
          {
            name: 'admin-stat-reclamations',
            path: 'reclamations',
            component: () => import('@/pages/admin/stat/PageAdminStatReclamations.vue'),
          },
          {
            name: 'admin-stat-employees',
            path: 'employees',
            component: () => import('@/pages/admin/stat/PageAdminStatEmployees.vue'),
          },
        ],
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
