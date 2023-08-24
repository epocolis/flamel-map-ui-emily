import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MockIrrigationService } from './irrigation/service/irrigation.mock.service';
import { IrrigationService } from './irrigation/service/irrigation.service';
import { IrrigationEffects } from './irrigation/store/irrigation.effects';
import { IRRIGATION_FEATURE_KEY, irrigationReducer } from './irrigation/store/irrigation.reducer';
import { ContainerComponent } from './map/container/container.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ContainerComponent
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
