import { IResponse } from '@/interfaces/axios/IResponse.ts';
import { IUser } from '@/interfaces/user/IUser.ts';
import { api } from '@/axios';

export function useUserService() {
  async function getAll(): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.get('user');
    return res.data;
  }
  async function getAllFired(): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.get('user/fired');
    return res.data;
  }
  async function fire(userId: number): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.patch(`user/${userId}/fire`);
    return res.data;
  }
  async function unfire(userId: number): Promise<IUser[]> {
    const res: IResponse<IUser[]> = await api.patch(`user/${userId}/unfire`);
    return res.data;
  }

  return {
    getAll,
    getAllFired,
    fire,
    unfire,
  };
}
