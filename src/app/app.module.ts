import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MockIrrigationService } from './data-access/service/irrigation.mock.service';
import { IrrigationService } from './data-access/service/irrigation.service';
import { ContainerComponent } from './map/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IrrigationEffects } from './data-access/store/irrigation.effects';
import { IRRIGATION_FEATURE_KEY, irrigationReducer } from './data-access/store/irrigation.reducer';
import { FieldInfoComponent } from './layers/field-info/field-info.component';
import { IrrigationRecommendationComponent } from './layers/irrigation-rec/irrigation-rec.component';
import { SoilCapacityComponent } from './layers/soil-capacity/soil-capacity.component';
import { CustomMapButtonsComponent } from './layers/custom-map-buttons/custom-map-buttons.component';
import { DetailsListComponent } from './layers/details-list/details-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ContainerComponent,
    FieldInfoComponent,
    IrrigationRecommendationComponent,
    SoilCapacityComponent,
    CustomMapButtonsComponent,
    DetailsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreDevtoolsModule,
    StoreModule.forFeature(IRRIGATION_FEATURE_KEY, irrigationReducer),
    StoreModule.forRoot({}),
    EffectsModule.forFeature([IrrigationEffects]),
    EffectsModule.forRoot({})
  ],
  providers: [
    { provide: IrrigationService, useClass: MockIrrigationService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
