import { useMessage } from 'naive-ui';

export function useMessageService() {
  const message = useMessage();

  function errors() {
    function custom(errorText: string) {
      message.error(errorText, { duration: 5000 });
    }

    function error() {
      message.error('Произошла ошибка', { duration: 5000 });
    }

    function login() {
      message.error('Ошибка входа', { duration: 5000 });
    }

    function reg() {
      message.error('Ошибка регистрации', { duration: 5000 });
    }

    function formValidation() {
      message.error('Неправильно заполнены поля', { duration: 5000 });
    }

    return {
      custom,
      error,
      login,
      reg,
      formValidation,
    };
  }

  function success() {
    function login() {
      message.success('Вы успешно вошли в аккаунт', { duration: 5000 });
    }
    function fire() {
      message.success('Сотрудник уволен', { duration: 5000 });
    }
    function unfire() {
      message.success('Сотрудник нанят обратно', { duration: 5000 });
    }

    function logout() {
      message.success('Вы вышли из аккаунта', { duration: 5000 });
    }

    function reg() {
      message.success('Новый аккаунт создан', { duration: 5000 });
    }

    return {
      login,
      logout,
      reg,
      fire,
      unfire,
    };
  }

  return {
    success,
    errors,
  };
}
