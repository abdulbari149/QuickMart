/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

let configure = false;

const useGoogleSignin = () => {
  useEffect(() => {
    if (configure) return;
    GoogleSignin.configure({
      webClientId: process.env.GOOGLE_WEBCLIENT_ID,
      // accountName: 'QuickMart',
      offlineAccess: true,
      scopes: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/user.phonenumbers.read',
      ],
    });
    configure = true;
  }, []);

  const signin = async () => {
    try {
      return await GoogleSignin.signIn();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error('Google signin failed');
    }
  };

  return { signin };
};

export default useGoogleSignin;
