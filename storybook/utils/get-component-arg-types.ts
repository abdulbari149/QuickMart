import type { ComponentProps } from 'react';
import type { InputType } from '@storybook/csf';

import type { ComponentType, ComponentConfig } from './component-config';

const mapPropsToArgTypes = <T extends ComponentType>(
  props: ComponentProps<T>,
): Record<string, InputType> => {
  const argTypes = Object.entries(props)
    .map(([key, value]): InputType => {
      switch (typeof value) {
        case 'boolean':
          return {
            defaultValue: value,
            name: key,
            type: 'boolean',
          };
        case 'string':
          return {
            defaultValue: value,
            name: key,
            type: 'string',
          };
        case 'number':
          return {
            defaultValue: value,
            name: key,
            type: 'number',
          };
        default:
          return {
            defaultValue: value,
            name: key,
            type: 'string',
          };
      }
    })
    .reduce(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      (previous, current) => ({ ...previous, [current.name!]: current }),
      {},
    );
  return argTypes;
};

export type GenerateComponentArgTypesReturnTypes = {
  urduArgTypes: Record<string, InputType>;
  englishArgTypes: Record<string, InputType>;
};

export const getComponentArgTypes = <T extends ComponentType>(
  config: ComponentConfig<T>,
): GenerateComponentArgTypesReturnTypes => {
  const englishArgTypes = {
    ...mapPropsToArgTypes(config.props.en ?? {}),
    ...config.argTypes,
  };

  const urduArgTypes = {
    ...mapPropsToArgTypes({
      ...(config.props.en ?? {}),
      ...(config.props.ur ?? {}),
    }),
    ...config.argTypes,
  };

  return {
    urduArgTypes,
    englishArgTypes,
  };
};
