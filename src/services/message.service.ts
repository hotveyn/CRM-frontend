import { createDiscreteApi } from 'naive-ui';

export function useMessageService() {
  const { message } = createDiscreteApi(['message']);

  return {
    department: {
      removed: () => message.success('Отдел удалён', { duration: 5000 }),
      created: () => message.success('Новый отдел создан', { duration: 5000 }),
      updated: () => message.success('Отдел изменён', { duration: 5000 }),
    },
    break: {
      removed: () => message.success('Вид брака удалён', { duration: 5000 }),
      created: () => message.success('Новый вид брака создан', { duration: 5000 }),
      updated: () => message.success('Вид брака изменён', { duration: 5000 }),
    },
    orderType: {
      removed: () => message.success('Тип вывески удалён', { duration: 5000 }),
      created: () => message.success('Новый тип вывески создан', { duration: 5000 }),
      updated: () => message.success('Тип вывески изменён', { duration: 5000 }),
    },
    matrix: {
      updated: () => message.success('Матрица сохранена', { duration: 5000 })
    },
    prefab: {
      removed: () => message.success('Шаблон удалён', { duration: 5000 }),
      created: () => message.success('Новый шаблон создан', { duration: 5000 }),
      updated: () => message.success('Шаблон изменён', { duration: 5000 }),
    },
    order: {
      removed: () => message.success('Заказ удалён', { duration: 5000 }),
      created: () => message.success('Новый заказ создан', { duration: 5000 }),
      updated: () => message.success('Заказ изменён', { duration: 5000 }),
      toWork: () => message.success('Заказ отправился в работу', { duration: 5000 }),
      restore: () => message.success('Заказ востановлен', { duration: 5000 }),
      stopped: () => message.success('Заказ снят с производства', { duration: 5000 }),
      rated: () => message.success('Рейтинг заказа указан', { duration: 5000 }),
      resourcesEnough: () => message.success('Установленно что материалов хватает', { duration: 5000 }),
      resourcesNotEnough: () => message.success('Установленно что материалов не достаточно', { duration: 5000 }),
      resourcesNull: () => message.success('Кол-во материалов поменялось, состояние заказа отменено', { duration: 5000 }),
    },
    user: {
      updated: () => message.success('Сотрудник обновлён', { duration: 5000 }),
      fire: () => message.success('Сотрудник уволен', { duration: 5000 }),
      reg: () => message.success('Сотрудник создан', { duration: 5000 }),
      failedReg: () => message.error('Ошибка регистрации', { duration: 5000 }),
      unfire: () => message.success('Сотрудник нанят обратно', { duration: 5000 }),
    },
    auth: {
      login: () => message.success('Вы успешно вошли в аккаунт', { duration: 5000 }),
      logout: () => message.warning('Вы вышли из аккаунта', { duration: 5000 }),
      failedLogin: () => message.error('Ошибка входа', { duration: 5000 }),
    },
    stage: {
      claim: () => message.success('Задача взята', { duration: 5000 }),
      break: () => message.success('Задача помечана как брак', { duration: 5000 }),
      ready: () => message.success('Задача выполнена', { duration: 5000 }),
      stop: () => message.error('Задача снята с производства', { duration: 5000 }),
    },
    error: {
      custom: (errorText: string) => message.error(errorText, { duration: 5000 }),
      error: () => message.error('Произошла ошибка', { duration: 5000 }),
    },
    form: {
      validation: () => message.error('Неправильно заполнены поля', { duration: 5000 }),
    },
  };
}
