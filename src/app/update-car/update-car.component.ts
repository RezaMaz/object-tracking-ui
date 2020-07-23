import {Component, OnInit} from '@angular/core';
import {Car} from '../model/car';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {

  id: number;
  car: Car;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private carService: CarService) {
  }

  ngOnInit() {
    this.car = new Car();

    this.id = this.route.snapshot.params['id'];

    this.carService.getCar(this.id)
      .subscribe(data => {
        console.log(data);
        this.car = data;
      }, error => console.log(error));
  }

  updateCar() {
    this.carService.updateCar(this.id, this.car)
      .subscribe(data => console.log(data), error => console.log(error));
    this.car = new Car();
    this.gotoList();
  }

  onSubmit() {
    this.updateCar();
  }

  gotoList() {
    this.router.navigate(['/cars']);
  }

}