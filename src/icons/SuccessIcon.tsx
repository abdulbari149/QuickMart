import React from 'react';

import type { SvgProps } from 'react-native-svg';

import SuccessOutline from 'assets/svgs/success-outline.svg';

type SuccessIconProps = SvgProps & {
  variant: 'outline';
};

const variants = {
  outline: SuccessOutline,
} as const;

const SuccessIcon: React.FC<SuccessIconProps> = ({ variant, ...props }) => {
  const Icon = variants[variant];

  return <Icon {...props} />;
};

export default SuccessIcon;
