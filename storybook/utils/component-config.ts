import type { ComponentProps } from 'react';
import type { InputType } from '@storybook/csf';

export type ComponentStoriesArgTypes<TArgs> = {
  [name in keyof TArgs]: InputType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentType = React.JSXElementConstructor<any>;

export type ComponentConfig<T extends ComponentType> = {
  component: ComponentType;
  props: {
    ur?: Partial<ComponentProps<T>>;
    en: ComponentProps<T>;
  };
  title: string;
  argTypes?: ComponentStoriesArgTypes<Partial<ComponentProps<T>>>;
};
