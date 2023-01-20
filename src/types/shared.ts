import { FC } from 'react';
import { DefaultTheme } from 'styled-components/native';

export type AnyObject = Record<string, any>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type ThemedComponent<T = {}> = FC<T & { theme?: DefaultTheme }>;
