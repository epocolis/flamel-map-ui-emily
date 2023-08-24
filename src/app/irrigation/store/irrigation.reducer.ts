import { Action, createReducer, on } from '@ngrx/store';
import * as IrrigationActions from './irrigation.actions';
import { FarmField } from '../irrigation.model';
import { defaultFields } from 'src/app/data/mocks';

export const IRRIGATION_FEATURE_KEY = 'irrigation';

export interface IrrigationState {
  fields: FarmField[]
};

export const initialState: IrrigationState = {
  fields: defaultFields
};

export const irrigationReducer = createReducer(
  initialState,
  on(IrrigationActions.getIrrigationFields, (state) => ({ ...state })),
);

export function reducer(state: IrrigationState | undefined, action: Action): any {
  return irrigationReducer(state, action);
};
