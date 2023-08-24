import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { CapacityPoint, IrrigationRecommendation, FarmField, Soils } from "../irrigation.model";

@Injectable({
    providedIn: 'root'
})
export class IrrigationService {

    constructor(private httpClient: HttpClient) { }

    postIrrigationCapacity(soil_type: string): Observable<CapacityPoint> {
        return this.httpClient.post<CapacityPoint>('/Flamel/irrigation/capacity', soil_type);
    };

    postIrrigationRecommendation(field_id: string, date: string): Observable<IrrigationRecommendation> {
        return this.httpClient.post<IrrigationRecommendation>('/Flamel/irrigation/recommendation', {
            field_id,
            date
        });
    };

    getIrrigationFields(): Observable<FarmField[]> {
        return this.httpClient.get<FarmField[]>('/Flamel/irrigation/fields');
    };

    getIrrigationField(fieldId: string): Observable<FarmField> {
        return this.httpClient.get<FarmField>(`/Flamel/irrigation/fields/${fieldId}`);
    };

    getIrrigationSoils(): Observable<Soils> {
        return this.httpClient.get<Soils>('/Flamel/irrigation/soils');
    };
}
