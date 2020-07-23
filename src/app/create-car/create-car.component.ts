import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {Car} from '../model/car';
import {CarService} from '../car.service';
import {Router} from '@angular/router';
import {Coordination} from '../model/coordination';
import {CarType} from '../model/carType';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car;
  coordination: Coordination;
  submitted: boolean;

  carTypes = CarType;
  keys: any[];

  constructor(private carService: CarService,
              private router: Router) {
    this.keys = Object.keys(this.carTypes).filter(k => !isNaN(Number(k)));
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.newCar();
  }

  newCar(): void {
    this.submitted = false;
    this.car = new Car();
    this.car.coordinations = [];
    this.coordination = new Coordination();
  }

  // tslint:disable-next-line:typedef
  save() {
    this.car.coordinations.push(this.coordination);
    this.carService.createCar(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.newCar();
    this.router.navigate(['/cars']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
