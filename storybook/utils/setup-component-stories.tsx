/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { I18nManager, ScrollView, View } from 'react-native';

import { Spacing } from 'styles';

import type { ComponentConfig, ComponentType } from './component-config';
import getComponentPropsVariants from './get-component-props-variants';

type SetupComponentStoriesReturnType = {
  playground: ComponentType;
  variants: ComponentType;
};

const setupComponentStories = <T extends ComponentType>(
  config: ComponentConfig<T>,
): SetupComponentStoriesReturnType => {
  const playgroundProps = I18nManager.isRTL
    ? { ...config.props.en, ...config.props.ur }
    : config.props.en;

  const playground = () => (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
      }}
    >
      <config.component {...playgroundProps} />
    </View>
  );

  const { urduArgTypes, englishArgTypes } = getComponentPropsVariants(config);

  const variants = () => (
    <ScrollView>
      <View
        style={{
          paddingHorizontal: Spacing.horizontal.globalHorizontalPadding,
          paddingVertical: Spacing.vertical.size16,
        }}
      >
        {I18nManager.isRTL
          ? urduArgTypes.map((props, i) => (
              <config.component key={i} {...props} />
            ))
          : englishArgTypes.map((props, i) => (
              <config.component key={i} {...props} />
            ))}
      </View>
    </ScrollView>
  );

  return { playground, variants };
};

export default setupComponentStories;
