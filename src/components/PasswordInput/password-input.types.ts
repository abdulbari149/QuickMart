import type { InputProps } from 'components/Input';

export type PasswordInputProps = Omit<
  InputProps,
  'InputLeftElement' | 'InputRightElement' | 'secureTextEntry'
>;

export type PasswordInputComponent = (props: PasswordInputProps) => JSX.Element;
