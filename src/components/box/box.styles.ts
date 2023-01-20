import styled from 'styled-components/native';

import { makePropToStyleMapper } from '../../utils/styles/styles';
import { BoxProps } from './box.types';
import { availableStyles, simpleStyles } from './box-styles/mappers';

const mapPropToStyle = makePropToStyleMapper(simpleStyles, availableStyles);

// eslint-disable-next-line import/prefer-default-export
export const BoxView = styled.View<BoxProps>`
  ${(props) => mapPropToStyle(props)}
`;
