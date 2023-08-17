import 'vue-router';
import { UserRoleEnum } from '@/enums/user-role.enum.ts';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    roleToAccess?: UserRoleEnum;
  }
}
