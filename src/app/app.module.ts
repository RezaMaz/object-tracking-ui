import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CreateCarComponent} from './create-car/create-car.component';
import {CarCoordinationsComponent} from './car-coordinations/car-coordinations.component';
import {CarListComponent} from './car-list/car-list.component';
import {UpdateCarComponent} from './update-car/update-car.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateCarComponent,
    CarCoordinationsComponent,
    CarListComponent,
    UpdateCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
