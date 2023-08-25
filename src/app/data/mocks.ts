import { FarmField, IrrigationRecommendation, Onwership, Soils } from "../irrigation/irrigation.model";

export const fields: FarmField[] = [
    {
        field_id: '1',
        soil_type: "flm:Loam",
        crop_type: 'Legumes',
        crop_name: 'Lentils',
        capacity_point: 28,
        field_soil_moisture: 15.98,
        status: 'success'
    }, 
    {
        field_id: '4',
        soil_type: "flm:Clay_Loam",
        crop_type: 'Legumes',
        crop_name: 'Lentils',
        capacity_point: 36,
        field_soil_moisture: 22.40,
        status: 'success'
    },
    {
        field_id: '8',
        soil_type: "flm:Silt_Loam",
        crop_type: 'Legumes',
        crop_name: 'Lentils',
        capacity_point: 31,
        field_soil_moisture: 31.31,
        status: 'success'
    },
    {
        field_id: '20',
        soil_type: "flm:Clay_Loam",
        crop_type: 'Legumes',
        crop_name: 'Lentils',
        capacity_point: 28,
        field_soil_moisture: 16.01,
        status: 'success'
    }
];

export const irrigationRecommendations: IrrigationRecommendation[] = [
    {
        date: "2023-08-01",
        mid_point: 21,
        soil_type: "flm:Loam",
        field: "Field1",
        recommendation: "Urgently need irrigation",
        capacity_point: 28,
        field_soil_moisture: 15.98,
        rationale: "Soil moisture close to permanent wilting point",
        wilting_point: 14,
        status: "success"
    },
    {
        date: "2023-08-23",
        mid_point: 21,
        soil_type: "flm:Loam",
        field: "Field1",
        recommendation: "Consider irrigation but not urgent",
        capacity_point: 28,
        field_soil_moisture: 22.43,
        rationale: "Soil moisture near mid-way threshold",
        wilting_point: 14,
        status: "success"
    },
    {
        date: "2023-08-23", //2023-04-19
        mid_point: 29,
        soil_type: "flm:Clay_Loam",
        field: "Field4",
        recommendation:  "Urgently need irrigation",
        capacity_point: 36,
        field_soil_moisture: 22.40,
        rationale: "Soil moisture close to permanent wilting point",
        wilting_point: 22,
        status: "success"
    },
    {
        date: "2023-04-11",
        mid_point: 21,
        soil_type: "flm:Silt_Loam",
        field: "Field8",
        recommendation: "Stop irrigation if you have been irrigating",
        capacity_point: 31,
        field_soil_moisture: 31.31,
        rationale: "Soil moisture at field capacity",
        wilting_point: 11,
        status: "success"
    },
    {
        date: "2023-08-12",
        mid_point: 21,
        soil_type: "flm:Silt_Loam",
        field: "Field8",
        recommendation: "Urgently need irrigation",
        capacity_point: 31,
        field_soil_moisture: 11.02,
        rationale: "Soil moisture close to permanent wilting point",
        wilting_point: 11,
        status: "success"
    },
    {
        date: "2023-07-30",
        mid_point: 21,
        soil_type: "flm:Loam",
        field: "Field20",
        recommendation: "Urgently need irrigation",
        capacity_point: 28,
        field_soil_moisture: 16.01,
        rationale: "Soil moisture close to permanent wilting point",
        wilting_point: 14,
        status: "success"
    }
]

export const soils: Soils = {
    capacity_points: {
        Clay_Loam: 36,
        Loam: 26,
        Silt_loam: 32
    },
    status: "success"
}

export const onwerships: Onwership[] = [
    {
        field_id: '1',
        owned_by: 'Alan de la Mer'
    },
    {
        field_id: '4',
        owned_by: 'Bill Haricot'
    },
    {
        field_id: '8',
        owned_by: 'Raymond Fruitbat'
    },
    {
        field_id: '20',
        owned_by: 'Christy Champagne'
    }
]
