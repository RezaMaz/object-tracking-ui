import {Component, OnInit} from '@angular/core';
import {Car} from '../model/car';
import {CarService} from '../car.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {

  car: Car = new Car();
  submitted = false;

  constructor(private carService: CarService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  newCar(): void {
    this.submitted = false;
    this.car = new Car();
  }

  // tslint:disable-next-line:typedef
  save() {
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
