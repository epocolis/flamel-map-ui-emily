import { FarmField, IrrigationRecommendation, Onwership, Soils } from "../irrigation/irrigation.model"

export const defaultField1: FarmField = {
    field_id: '4',
    soil_type: "flm:Clay_Loam",
    crop_type: 'Legumes',
    crop_name: 'Lentils',
    capacity_point: 30,
    field_soil_moisture: 21.097918,
    status: 'success'
}

export const defaultField2: FarmField = {
    field_id: '20',
    soil_type: "flm:Silt",
    crop_type: 'Grains',
    crop_name: 'Wheat',
    capacity_point: 21,
    field_soil_moisture: 6.654,
    status: 'success',
}

export const defaultFields: FarmField[] = [
    defaultField1,
    defaultField2
];

export const defaultIrrigation: IrrigationRecommendation = {
    date: "2023-04-19",
    mid_point: 29,
    soil_type: "flm:Clay_Loam",
    field: "Field4",
    recommendation: "urgent irrigation",
    capacity_point: 36,
    field_soil_moisture: 21.097918,
    rationale: "soil moisture is below permanent wilting point",
    wilting_point: 22,
    status: "success"
}

export const defaultSoils: Soils = {
    capacity_points: {
        Clay_Loam: 36,
        Loam: 26,
        Silt_loam: 32
    },
    status: "success"
}

export const defaultOnwerships: Onwership[] = [
    {
        field_id: '1',
        owned_by: 'Alan de la Mer'
    },
    {
        field_id: '4',
        owned_by: 'Bill Haricot de la Mer'
    },
    {
        field_id: '8',
        owned_by: 'Raymond Fruitbat de la Mer'
    },
    {
        field_id: '20',
        owned_by: 'Christy Champagne'
    }
]
