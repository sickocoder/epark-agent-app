import { AnyObject } from '../../../../types';

export interface Automobile {
  type: 'car' | 'van' | 'moto';
  label: string;
  image: object;
}

export interface AddAutomobileFormProps {
  onSubmit: (data: AnyObject) => void;
  isLoading: boolean;
}
