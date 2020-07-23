import {RouterModule, Routes} from '@angular/router';
import {CarListComponent} from './car-list/car-list.component';
import {CreateCarComponent} from './create-car/create-car.component';
import {UpdateCarComponent} from './update-car/update-car.component';
import {CarCoordinationsComponent} from './car-coordinations/car-coordinations.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: 'cars', component: CarListComponent},
  {path: 'add', component: CreateCarComponent},
  {path: 'update/:id', component: UpdateCarComponent},
  {path: 'coordinations/:id', component: CarCoordinationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
