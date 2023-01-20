/* eslint-disable import/prefer-default-export */
import { AssetsEnum } from '../../../../constants';
import { Automobile } from './add-automobile.types';

export const supportedAutomobiles: ReadonlyArray<Automobile> = [
  {
    type: 'car',
    label: 'Carro',
    image: AssetsEnum.images.carIllustration,
  },
  {
    type: 'moto',
    label: 'Moto',
    image: AssetsEnum.images.motoIllustration,
  },
  {
    type: 'van',
    label: 'Van',
    image: AssetsEnum.images.vanIllustration,
  },
];
