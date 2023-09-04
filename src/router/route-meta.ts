import 'vue-router';
import { UserRoleEnum } from '@/enums/user/UserRole.enum.ts';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    roleToAccess?: UserRoleEnum;
  }
}
