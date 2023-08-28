import { Component, Input, OnChanges } from "@angular/core";
import { DetailItem, SoilCapacity } from "src/app/data-access/irrigation.model";

@Component({
    selector: 'soil-capacity',
    templateUrl: './soil-capacity.component.html',
    styleUrls: ['./soil-capacity.component.scss']
})
export class SoilCapacityComponent implements OnChanges {
    @Input() capacity?: SoilCapacity;
    capacityItems?: DetailItem[];

    ngOnChanges(): void {
        if (this.capacity) {
            this.capacityItems = [
                {
                    title: 'Clay',
                    value: `${this.capacity.clay}%`,
                },
                {
                    title: 'Silt',
                    value: `${this.capacity.silt}%`,
                },
                {
                    title: 'Sand',
                    value: `${this.capacity.sand}%`,
                },
                {
                    title: 'Loam',
                    value: `${this.capacity.loam}%`,
                },
            ]
        }
    }
}
