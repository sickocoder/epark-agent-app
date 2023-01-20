import { SvgProps } from 'react-native-svg';

export interface TInfoPanelItem {
  label: string;
  icon: (props: SvgProps) => JSX.Element;
  value: string;
}

export interface InfoPanelItemProps {
  info: TInfoPanelItem;
}
