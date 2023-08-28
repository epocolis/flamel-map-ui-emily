export interface CapacityPoint {
    capacity_point: number;
}

export interface IrrigationRecommendation {
    date: string;
    mid_point: number;
    soil_type: string;
    field: string;
    recommendation: string;
    capacity_point: number;
    field_soil_moisture: number;
    rationale: string;
    wilting_point: number;
    status: string;
}

export interface FarmField {
    field_id: string;
    soil_type: string;
    crop_type: string;
    crop_name: string;
    capacity_point: number;
    field_soil_moisture: number;
    status: string;
}

export interface Soils {
    capacity_points: TypeCapacityPoints,
    status: string
}

export interface TypeCapacityPoints {
    Clay_Loam: number,
    Loam: number,
    Silt_loam: number
}

export interface Onwership {
    field_id: string,
    owned_by: string,
}

export interface SoilCapacity {
    clay: number,
    silt: number,
    loam: number,
    sand: number,
}

export interface DetailItem {
    title: string,
    value: string
}
