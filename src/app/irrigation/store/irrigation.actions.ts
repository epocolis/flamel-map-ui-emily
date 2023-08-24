import { createAction, props,  } from '@ngrx/store';

const STORE_NAME = 'Irrigation'

export const getIrrigationFields = createAction(
    `[${STORE_NAME}] Get Irrigation Fields`
);

export const getIrrigationField = createAction(
    `[${STORE_NAME}] Get Irrigation Field`,
    props<{ fieldId: string }>(),
);

export const getIrrigationSoils = createAction(
    `[${STORE_NAME}] Get Irrigation Soils`
);

export const postIrrigationRecommendation = createAction(
    `[${STORE_NAME}] Post Irrigation Reccomendation`,
    props<{ fieldId: string, date: string }>(),
);
