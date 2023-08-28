import { Component, Input, OnChanges } from "@angular/core";
import { DetailItem, FarmField } from "src/app/data-access/irrigation.model";
import { getFieldOwnership } from "../../shared/format-field-data.util";
import { onwerships } from "../../mocks/data";

@Component({
    selector: 'field-info',
    templateUrl: './field-info.component.html',
})
export class FieldInfoComponent implements OnChanges {
    @Input()
    selectedField?: FarmField;
    @Input()
    selectedDate?: string;

    fieldDataItems: DetailItem[] = [];

    ngOnChanges(): void {
        this.setFieldInfo();
        console.log(this.selectedField, 'field')
    }

    setFieldInfo(): DetailItem[] {
        if (this.selectedField) {
            this.fieldDataItems = [
                {
                    title: 'Owner',
                    value: this.getOwnership(this.selectedField.field_id),
                },
                {
                    title: 'Field ID',
                    value: this.selectedField.field_id,
                },
                {
                    title: 'Soil Type',
                    value: this.formatSoilType(this.selectedField.soil_type)
                },
                {
                    title: 'Crop Type',
                    value: this.selectedField.crop_type
                },
                {
                    title: 'Crop Name',
                    value: this.selectedField.crop_name
                },
            ];

            if (this.selectedDate) {
                this.fieldDataItems.push({
                    title: 'Date',
                    value: this.selectedDate
                })
            }
        }

        return this.fieldDataItems
    }

    getOwnership(fieldId: string): string {
        return getFieldOwnership(fieldId, onwerships);
    }

    formatSoilType(soilType: string): string {
        soilType.replace(/_/g, ' ');
        return soilType.substring(soilType.indexOf(':') + 1);
    }
}
