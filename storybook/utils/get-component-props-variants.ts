import type { ComponentProps } from 'react';
import type { InputType } from '@storybook/csf';
import cartesian from 'cartesian';

import type { SupportedLocales } from 'context/locales/types';

import type { ComponentType, ComponentConfig } from './component-config';
import { getComponentArgTypes } from './get-component-arg-types';

const mapComponentArgTypesToPropsVariants = (
  args: Record<string, InputType>,
  locale: SupportedLocales,
) => {
  const options: Record<string, Array<string | number | boolean>> = {};
  Object.entries(args).forEach(([propName, config]) => {
    switch (config?.type || config?.control?.type) {
      case 'select':
        options[propName] =
          locale === 'ur' && config?.control?.optionsAr
            ? config?.control?.optionsAr
            : config?.control?.options;
        break;
      case 'number':
        options[propName] = [config?.defaultValue];
        break;
      case 'boolean':
        options[propName] = [true, false];
        break;
      default:
        options[propName] = [config?.defaultValue];
        break;
    }
  });

  return cartesian(options);
};

type GeneratePropsVariantsReturnType<T extends ComponentType> = {
  urduArgTypes: Array<ComponentProps<T>>;
  englishArgTypes: Array<ComponentProps<T>>;
};

const getComponentPropsVariants = <T extends ComponentType>(
  config: ComponentConfig<T>,
): GeneratePropsVariantsReturnType<T> => {
  const { urduArgTypes, englishArgTypes } = getComponentArgTypes(config);
  return {
    urduArgTypes: mapComponentArgTypesToPropsVariants(urduArgTypes, 'ur'),
    englishArgTypes: mapComponentArgTypesToPropsVariants(englishArgTypes, 'en'),
  };
};

export default getComponentPropsVariants;
