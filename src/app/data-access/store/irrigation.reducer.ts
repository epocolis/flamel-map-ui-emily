import { Action, createReducer, on } from '@ngrx/store';
import * as IrrigationActions from './irrigation.actions';
import { FarmField } from '../irrigation.model';
import { fields } from '../../mocks/data';

export const IRRIGATION_FEATURE_KEY = 'irrigation';

export interface IrrigationState {
  fields: FarmField[]
};

export const initialState: IrrigationState = {
  fields: fields
};

export const irrigationReducer = createReducer(
  initialState,
  on(IrrigationActions.getIrrigationFields, (state) => ({ ...state })),
);

export function reducer(state: IrrigationState | undefined, action: Action): any {
  return irrigationReducer(state, action);
};
