import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import type React from 'react';

export type PasswordHeaderProps = NativeStackHeaderProps;

export type PasswordHeaderComponent = (
  props: PasswordHeaderProps,
) => React.JSX.Element;
