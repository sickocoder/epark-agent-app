export interface BoxSimpleStyleProps {
  flex?: number | string;
  flexDirection?: 'row' | 'column';
  justifyContent?: string;
  alignItems?: string;

  width?: string;
  height?: string;

  padding?: string;
  paddingRight?: string;
  paddingLeft?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingHorizontal?: string;
  paddingVertical?: string;

  margin?: string;
  marginRight?: string;
  marginLeft?: string;
  marginTop?: string;
  marginBottom?: string;
  marginHorizontal?: string;
  marginVertical?: string;

  background?: string;
  border?: string;
  borderTopWidth?: string;
  borderRightWidth?: string;
  borderBottomWidth?: string;
  borderLeftWidth?: string;
  borderRadius?: string;

  opacity?: number;
}

export interface BoxStyleProps extends BoxSimpleStyleProps {
  center?: boolean;
}
