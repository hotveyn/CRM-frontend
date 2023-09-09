import { useDialog } from 'naive-ui';

export function useDialogService() {
  const dialog = useDialog();

  return {
    confirm: (posClick: () => void) => {
      dialog.warning({
        title: 'Подтвердите действие',
        content: 'Вы уверены, что хотите сделать это?',
        positiveText: 'Да',
        negativeText: 'Нет',
        onPositiveClick: () => {
          posClick();
        },
      });
    },
  };
}
