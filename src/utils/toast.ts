import Toast from 'react-native-toast-message';

const success = (message: string) => {
  Toast.show({
    type: 'success',
    position: 'top',
    autoHide: true,
    visibilityTime: 2000,
    text1: message,
  });
};

const error = (err: unknown) => {
  let message = 'Something unexpected happened';

  if (err instanceof Error) {
    message = err.message;
  } else if (typeof err === 'string') {
    message = err;
  }

  Toast.show({
    type: 'error',
    position: 'top',
    autoHide: true,
    visibilityTime: 2000,
    text1: message,
  });
};

export default {
  success,
  error,
};
