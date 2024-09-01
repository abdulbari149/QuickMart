import React from 'react';

import type { SvgProps } from 'react-native-svg';

import DangerOutline from 'assets/svgs/danger-outline.svg';

type DangerIconProps = SvgProps & {
  variant: 'outline';
};

const variants = {
  outline: DangerOutline,
} as const;

const DangerIcon: React.FC<DangerIconProps> = ({ variant, ...props }) => {
  const Icon = variants[variant];

  return <Icon {...props} />;
};

export default DangerIcon;
