import React from 'react';
import { View } from 'react-native';
import type { BaseToastProps, ToastProps } from 'react-native-toast-message';

import RNToast, { BaseToast, ErrorToast } from 'react-native-toast-message';

import { Colors, Dimensions, Spacing } from 'styles';

import { Danger, Success } from 'icons/index';
import { moderateScale } from 'utils/styles';

const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      text1Style={{
        fontSize: Dimensions.fontSizes.size12,
        fontWeight: '600',
        color: Colors.black,
        letterSpacing: 0.5,
        padding: 0,
        margin: 0,
      }}
      text2Style={{
        fontSize: 15,
        padding: 0,
      }}
      renderLeadingIcon={() => (
        <View
          style={{
            backgroundColor: Colors.cyan,
            height: Dimensions.width.size8,
            width: Dimensions.width.size8,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: Spacing.horizontal.size12 + 2,
            borderRadius: 5,
          }}
        >
          <Success
            variant="outline"
            height={Dimensions.width.size7}
            width={Dimensions.width.size7}
            color={Colors.white}
          />
        </View>
      )}
      contentContainerProps={{
        style: {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          paddingHorizontal: Spacing.horizontal.size12,
          width: '85%',
        },
      }}
      text1NumberOfLines={2}
      style={{
        minHeight: Dimensions.height.size6,
        height: 'auto',
        paddingVertical: Spacing.vertical.size12,
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRadius: moderateScale(12),
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: ToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: Dimensions.fontSizes.size12,
        fontWeight: '600',
        color: Colors.black,
        letterSpacing: 0.5,
        padding: 0,
        margin: 0,
      }}
      text2Style={{
        fontSize: 15,
        padding: 0,
      }}
      renderLeadingIcon={() => (
        <View
          style={{
            backgroundColor: Colors.red,
            height: Dimensions.width.size8,
            width: Dimensions.width.size8,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: Spacing.horizontal.size12 + 2,
            borderRadius: 5,
          }}
        >
          <Danger
            variant="outline"
            height={Dimensions.width.size7}
            width={Dimensions.width.size7}
            color={Colors.white}
          />
        </View>
      )}
      contentContainerProps={{
        style: {
          height: '100%',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          paddingHorizontal: Spacing.horizontal.size12,
          width: '85%',
        },
      }}
      text1NumberOfLines={2}
      style={{
        minHeight: Dimensions.height.size6,
        height: 'auto',
        paddingVertical: Spacing.vertical.size12,
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRadius: moderateScale(12),
      }}
    />
  ),
};

const Toast = () => <RNToast config={toastConfig} />;

export default Toast;
