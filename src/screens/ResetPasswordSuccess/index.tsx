import React from 'react';
import { Image, View } from 'react-native';

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import assets from 'assets';
import Typography from 'components/Typography';

import Button from 'components/Button';

import { LOGIN, type RESET_PASSWORD_SUCCESS } from 'constants/screen-names';
import type { PublicNavigatorParamList } from 'navigation/types';

import styles from './styles';

type ResetPasswordSuccessProps = NativeStackScreenProps<
  PublicNavigatorParamList,
  typeof RESET_PASSWORD_SUCCESS
>;

type ResetPasswordSuccessScreen = (
  props: ResetPasswordSuccessProps,
) => JSX.Element;

const ResetPasswordSuccess: ResetPasswordSuccessScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.item}>
      <View style={styles.banner}>
        <Image source={assets.images.newPassword} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Typography variant="heading2" style={styles.title}>
          New password set successfully
        </Typography>
        <Typography variant="body2" style={styles.subtitle}>
          Congratulations! Your password has been set successfully. Please
          proceed to the login screen to verify your account.
        </Typography>

        <Button
          variant="contained"
          title="Login"
          onPress={() => {
            navigation.navigate(LOGIN);
          }}
          style={{ button: styles.button }}
        />
      </View>
    </View>
  </View>
);

export default ResetPasswordSuccess;
