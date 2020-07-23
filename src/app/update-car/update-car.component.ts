import {Component, OnInit} from '@angular/core';
import {Car} from '../model/car';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../car.service';
import {Coordination} from '../model/coordination';
import {CarType} from '../model/carType';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  id: number;
  car: Car;
  coordination: Coordination;
  submitted: boolean;

  carTypes = CarType;
  keys: any[];

  constructor(private route: ActivatedRoute, private router: Router,
              private carService: CarService) {
    this.keys = Object.keys(this.carTypes).filter(k => !isNaN(Number(k)));
  }

  newCar(): void {
    this.submitted = false;
    this.car = new Car();
    this.car.coordinations = [];
    this.coordination = new Coordination();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.newCar();

    this.id = this.route.snapshot.params['id'];

    this.carService.getCar(this.id)
      .subscribe(data => {
        this.car = data;
        this.car.coordinations = [];
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  updateCar() {
    this.car.coordinations.push(this.coordination);
    this.carService.updateCar(this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.router.navigate(['/cars']);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.updateCar();
  }

}
