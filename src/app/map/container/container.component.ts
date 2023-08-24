import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { FarmField } from "../../irrigation/irrigation.model";
import { IrrigationState } from "../../irrigation/store/irrigation.reducer";
import { irrigationFieldsSelector } from "../../irrigation/store/irrigation.selectors";
import { getIrrigationFields } from "../../irrigation/store/irrigation.actions";

@Component({
    selector: 'map-container',
    templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit {
    fielddata$: Observable<FarmField[]>;

    constructor(private store: Store<IrrigationState>) {
        this.fielddata$ = this.store.pipe(select(irrigationFieldsSelector));
    }

    ngOnInit(): void {
        this.getAllFieldsWithIrrigation();
    }

    getAllFieldsWithIrrigation(): void {
        this.store.dispatch(getIrrigationFields());
    }
}
