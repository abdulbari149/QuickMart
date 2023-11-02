import { Text } from 'react-native';
import React from 'react';

import type { TypogrpahyComponent } from './typography.types';
import styles from './styles';

const Typography: TypogrpahyComponent = (props) => {
  const { variant, style, children, ...rest } = props;
  const variantStyles = styles.typographyVariants[variant];
  return (
    <Text style={[variantStyles, style]} {...rest}>
      {children}
    </Text>
  );
};

export default Typography;
