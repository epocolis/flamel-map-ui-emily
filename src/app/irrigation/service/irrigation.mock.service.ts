import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CapacityPoint, FarmField, IrrigationRecommendation, Soils } from "./../irrigation.model";
import { defaultField1, defaultFields, defaultIrrigation, defaultSoils } from "../../data/mocks";

@Injectable({
    providedIn: 'root'
})
export class MockIrrigationService {

    postIrrigationCapacity(soil_type: string): Observable<CapacityPoint> {
        return of({ capacity_point: defaultField1.capacity_point });
    }
    
    postIrrigationRecommendation(field_id: string, date: string): Observable<IrrigationRecommendation> {
        return of(defaultIrrigation)
    };

    getIrrigationFields(): Observable<FarmField[]> {
        return of(defaultFields);
    };

    getIrrigationField(fieldId: string): Observable<FarmField> {
        return of(defaultField1)
    };

    getIrrigationSoils(): Observable<Soils> {
        return of(defaultSoils);
    };
}
