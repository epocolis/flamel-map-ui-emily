import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IrrigationState, IRRIGATION_FEATURE_KEY } from './irrigation.reducer'

export const getIrrigationFeatureState = createFeatureSelector<IrrigationState>(IRRIGATION_FEATURE_KEY);

export const irrigationFieldsSelector = createSelector(getIrrigationFeatureState, (state: IrrigationState) => state.fields);

