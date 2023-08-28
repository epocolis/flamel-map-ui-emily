import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { FarmField } from "../../data-access/irrigation.model";
import { getIrrigationFields } from "../../data-access/store/irrigation.actions";
import { IrrigationState } from "../../data-access/store/irrigation.reducer";
import { irrigationFieldsSelector } from "../../data-access/store/irrigation.selectors";


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
