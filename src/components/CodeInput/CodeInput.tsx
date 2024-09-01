import React, { useState } from 'react';
import { Platform, View } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Typography from 'components/Typography';

import styles from './styles';

const CELL_COUNT = 6;

type CodeInputProps = {
  onChange: (value: string) => Promise<void> | void;
};

type CodeInputComponent = React.FC<CodeInputProps>;

const CodeInput: CodeInputComponent = ({ onChange }) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={async (text) => {
        await Promise.resolve(onChange(text));
        setValue(text);
      }}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      autoComplete={Platform.select<'sms-otp' | 'one-time-code'>({
        android: 'sms-otp',
        default: 'one-time-code',
      })}
      testID="my-code-input"
      renderCell={({ index, symbol, isFocused }) => (
        <View
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          <Typography variant="button1">
            {symbol || (isFocused ? <Cursor /> : null)}
          </Typography>
        </View>
      )}
    />
  );
};

export default CodeInput;
