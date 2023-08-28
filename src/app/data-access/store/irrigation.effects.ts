import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as IrrigationActions from "./irrigation.actions";
import { IrrigationService } from "../service/irrigation.service";
import { catchError, map, of, switchMap } from "rxjs";
import { FarmField } from "../irrigation.model";

@Injectable()
export class IrrigationEffects {
    constructor(private actions$: Actions, private irrigationService: IrrigationService) { }

    getIrrigationFields$ = createEffect(() =>
        this.actions$.pipe(
            ofType(IrrigationActions.getIrrigationFields),
            switchMap(() =>
                this.irrigationService.getIrrigationFields().pipe(
                    map((response: FarmField[]) => response ? {
                        fields: response
                    } : {
                        fields: undefined
                    }),
                    catchError((error) => of(error)),
                )
            ),
        ), { dispatch: false }
    );
}
