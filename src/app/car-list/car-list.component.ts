import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Car} from '../model/car';
import {CarService} from '../car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Observable<Car[]>;

  constructor(private carService: CarService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.reloadData();
  }

  // tslint:disable-next-line:typedef
  reloadData() {
    this.cars = this.carService.getCarList();
  }

  // tslint:disable-next-line:typedef
  deleteCar(id: number) {
    this.carService.deleteCar(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  updateCar(id: number) {
    this.router.navigate(['update', id]);
  }

  // tslint:disable-next-line:typedef
  carCoordinations(id: number) {
    this.router.navigate(['coordinations', id]);
  }

}
