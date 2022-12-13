import { makeCenterStyles } from '../../../utils/styles/makers';
import { BoxSimpleStyleProps } from './box.styles.types';

export const availableStyles = Object.freeze({
  center: makeCenterStyles,
});

export const simpleStyles = {
  flex: 'flex',
  flexDirection: 'flex-direction',
  justifyContent: 'justify-content',
  alignItems: 'align-items',

  width: 'width',
  height: 'height',

  padding: 'padding',
  paddingRight: 'padding-right',
  paddingLeft: 'padding-left',
  paddingTop: 'padding-top',
  paddingBottom: 'padding-bottom',
  paddingHorizontal: 'padding-horizontal',
  paddingVertical: 'padding-vertical',

  margin: 'string',
  marginRight: 'margin-right',
  marginLeft: 'margin-left',
  marginTop: 'margin-top',
  marginBottom: 'margin-bottom',
  marginHorizontal: 'marign-horizontal',
  marginVertical: 'margin-vertical',

  background: 'background',
  border: 'border',
  borderTopWidth: 'border-top-width',
  borderRightWidth: 'border-right-width',
  borderBottomWidth: 'border-bottom-width',
  borderLeftWidth: 'border-left-width',
  borderRadius: 'border-radius',

  opacity: 'opacity',
} as unknown as BoxSimpleStyleProps;
