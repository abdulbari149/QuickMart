import React from 'react';

import { View } from 'react-native';

import service from 'navigation/service';
import PASSWORD_HEADER_STEPS from 'constants/password-header-steps';
import Typography from 'components/Typography';

import ArrowLeft from 'assets/svgs/arrow-left.svg';
import { moderateScale } from 'utils/styles';

import { LOGIN } from 'constants/screen-names';

import type { PasswordHeaderComponent } from './password-header.types';
import styles from './styles';

const iconSize = moderateScale(30);

const PasswordHeader: PasswordHeaderComponent = ({ navigation, route }) => {
  const routeName = service.getActiveRouteName(
    navigation.getState(),
  ) as keyof typeof PASSWORD_HEADER_STEPS;

  if (!Object.keys(PASSWORD_HEADER_STEPS).includes(routeName)) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <></>;
  }

  const step = PASSWORD_HEADER_STEPS[routeName];
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <ArrowLeft width={iconSize} height={iconSize} />
        <Typography variant="body2" mode="medium" style={styles.title}>
          {step.title}
        </Typography>
      </View>
      {route.params &&
      'from' in route.params &&
      route.params?.from === LOGIN ? null : (
        <View style={styles.right}>
          <Typography variant="body2" mode="medium" style={styles.step}>
            {`0${step.stepNo}/`}
          </Typography>
          <Typography variant="body2" mode="medium" style={styles.totalSteps}>
            03
          </Typography>
        </View>
      )}
    </View>
  );
};

export default PasswordHeader;
