import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CapacityPoint, FarmField, IrrigationRecommendation, Soils } from "../irrigation.model";
import { fields, irrigationRecommendations, soils } from "../../data/mocks";

@Injectable({
    providedIn: 'root'
})
export class MockIrrigationService {

    postIrrigationCapacity(soil_type: string): Observable<CapacityPoint> {
        return of({ capacity_point: soils.capacity_points.Clay_Loam });
    }
    
    postIrrigationRecommendation(field_id: string, date: string): Observable<IrrigationRecommendation> {
        return of(irrigationRecommendations[0])
    };

    getIrrigationFields(): Observable<FarmField[]> {
        return of(fields);
    };

    getIrrigationField(fieldId: string): Observable<FarmField> {
        return of(fields[0])
    };

    getIrrigationSoils(): Observable<Soils> {
        return of(soils);
    };
}
