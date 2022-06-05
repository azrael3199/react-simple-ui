import { ReactElement } from 'react';
import { IStylingProperties } from '../../types/common.types';

export interface ContainerProps {
  style: IStylingProperties;
  children: ReactElement[];
}
