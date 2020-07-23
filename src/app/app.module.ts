import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarCoordinationsComponent } from './car-coordinations/car-coordinations.component';
import { CarListComponent } from './car-list/car-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarComponent,
    CarCoordinationsComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
