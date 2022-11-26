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
  borderRadius?: string;
}

export interface BoxStyleProps extends BoxSimpleStyleProps {
  center?: boolean;
}
