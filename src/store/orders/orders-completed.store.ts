import { useOrderService } from '@/services/order.service.ts';
import { IOrderV2 } from '@/interfaces/order/IOrder.ts';
import { useMessageService } from '@/services/message.service.ts';
import { OrderScalarFieldEnum, OrderStatusV2Enum } from '@/enums/order/OrderStatus.enum.ts';
import { Ref, ref } from 'vue';

const orderService = useOrderService();
const message = useMessageService();

export const useOrdersCompletedStore = () => {
  const orders: Ref<Array<IOrderV2>> = ref([]);
  const count: Ref<number> = ref(0);

  async function request(params: { limit: number; offset: number; status: OrderStatusV2Enum; orderBy?: OrderScalarFieldEnum; orderDirection?: 'asc' | 'desc' }) {
    const result = await orderService.query(params);
    orders.value = result.data;
    count.value = result.count;
  }

  async function setRating(id: number, rating: number) {
    await orderService
      .setRating(id, rating)
      .then(() => {
        message.order.rated();

        for (const i in orders.value) {
          if (orders.value[i].id === id) {
            orders.value[i].rating = rating;
            break;
          }
        }
      })
      .catch((e) => message.error.custom(e.response.data.message));
  }
  function findById(id: number) {
    return orders.value.find((order) => order.id === id);
  }
  return { orders, count, request, setRating, findById };
};
