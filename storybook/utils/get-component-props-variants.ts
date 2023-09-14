import type { ComponentProps } from 'react';
import type { InputType } from '@storybook/csf';
import cartesian from 'cartesian';

import type { ComponentType, ComponentConfig } from './component-config';
import { getComponentArgTypes } from './get-component-arg-types';

const mapComponentArgTypesToPropsVariants = (
  args: Record<string, InputType>,
  locale: 'ar' | 'fr',
) => {
  const options: Record<string, Array<string | number | boolean>> = {};
  Object.entries(args).forEach(([propName, config]) => {
    switch (config?.type || config?.control?.type) {
      case 'select':
        options[propName] =
          locale === 'ar' && config?.control?.optionsAr
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
  arabicArgTypes: Array<ComponentProps<T>>;
  frenchArgTypes: Array<ComponentProps<T>>;
};

const getComponentPropsVariants = <T extends ComponentType>(
  config: ComponentConfig<T>,
): GeneratePropsVariantsReturnType<T> => {
  const { arabicArgTypes, frenchArgTypes } = getComponentArgTypes(config);
  return {
    arabicArgTypes: mapComponentArgTypesToPropsVariants(arabicArgTypes, 'ar'),
    frenchArgTypes: mapComponentArgTypesToPropsVariants(frenchArgTypes, 'fr'),
  };
};

export default getComponentPropsVariants;
