import { FC, useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from 'react-native';

import { NativeTextInput } from './text-input.styles';

const TextInput: FC<TextInputProps & { error?: unknown }> = ({
  error,
  onFocus,
  onBlur,
  ...props
}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const onTextFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setHasFocus(true);
      if (onFocus) {
        onFocus(e);
      }
    },
    // eslint-disable-next-line prettier/prettier
    [onFocus]
  );

  const onTextBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setHasFocus(false);
      if (onBlur) {
        onBlur(e);
      }
    },
    // eslint-disable-next-line prettier/prettier
    [onBlur]
  );

  return (
    <NativeTextInput
      {...props}
      onFocus={onTextFocus}
      hasFocus={hasFocus}
      onBlur={onTextBlur}
      blurOnSubmit={false}
      error={error}
    />
  );
};

export default TextInput;
