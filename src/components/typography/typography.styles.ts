import styled from 'styled-components/native';

import { makePropToStyleMapper } from '../../utils/styles/styles';
import { basicStyles } from './typography-config/mapper';

const mapPropToStyle = makePropToStyleMapper(basicStyles, {});

// eslint-disable-next-line import/prefer-default-export
export const Text = styled.Text`
  ${(props) => mapPropToStyle(props)}
`;
