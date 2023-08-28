import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'custom-map-buttons',
    templateUrl: './custom-map-buttons.component.html',
    styleUrls: ['./custom-map-buttons.component.scss']
})
export class CustomMapButtonsComponent {
    @Input() showFeatureLayers?: boolean;
    @Input() showSoilCapacity?: boolean;
    @Output() toggleFeatureLayers = new EventEmitter<any>();
    @Output() toggleSoilCapacityLayer = new EventEmitter<any>();

    onToggleFeatureLayers(): void {
        this.toggleFeatureLayers.emit();
    }

    onToggleSoilCapacityLayer(): void {
        this.toggleSoilCapacityLayer.emit();
    }
}
