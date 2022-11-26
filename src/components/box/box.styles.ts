import styled from 'styled-components/native';
import { makePropToStyleMapper } from '../../utils/styles/styles';
import { availableStyles, simpleStyles } from './box-styles/mappers';
import { BoxProps } from './box.types';

const mapPropToStyle = makePropToStyleMapper(simpleStyles, availableStyles);

// eslint-disable-next-line import/prefer-default-export
export const BoxView = styled.View<BoxProps>`
  ${(props) => mapPropToStyle(props)}
`;
