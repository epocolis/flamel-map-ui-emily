import { Component, Input, OnChanges } from "@angular/core";
import { DetailItem, FarmField, IrrigationRecommendation } from "../../data-access/irrigation.model";
import { irrigationRecommendations } from "../../mocks/data";

@Component({
    selector: 'irrigation-rec',
    templateUrl: './irrigation-rec.component.html',
    styleUrls: ['./irrigation-rec.component.scss']
})
export class IrrigationRecommendationComponent implements OnChanges {
    @Input() selectedField?: FarmField;
    @Input() irrigationRecommendation?: IrrigationRecommendation;
    @Input() selectedDate?: string;

    fieldMetrics?: DetailItem[];

    ngOnChanges(): void {
        this.fieldMetrics = [{
            title: 'Field Capacity',
            value: `${ this.getFieldRecommendation()?.capacity_point }% VWC`
        }, {
            title: 'Permanent Wilting Point',
            value: `${ this.getFieldRecommendation()?.wilting_point }% VWC`
        }, {
            title: 'Current Soil Moisture',
            value: `${ this.getFieldRecommendation()?.field_soil_moisture }%`
        }]
    }

    getFieldRecommendation(): IrrigationRecommendation | undefined {
        return irrigationRecommendations.find(rec =>
            rec.field.replace(/[^0-9]/g, '') === this.selectedField?.field_id
        );
    }
}
