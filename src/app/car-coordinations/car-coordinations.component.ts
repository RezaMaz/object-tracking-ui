import {Component, OnInit} from '@angular/core';
import {Car} from '../model/car';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../car.service';

@Component({
  selector: 'app-car-coordinations',
  templateUrl: './car-coordinations.component.html',
  styleUrls: ['./car-coordinations.component.css']
})
export class CarCoordinationsComponent implements OnInit {

  id: number;
  car: Car;

  constructor(private route: ActivatedRoute, private router: Router,
              private carService: CarService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.car = new Car();

    this.id = this.route.snapshot.params['id'];

    this.carService.getCar(this.id)
      .subscribe(data => {
        this.car = data;
      }, error => console.log(error));
  }

  // tslint:disable-next-line:typedef
  list() {
    this.router.navigate(['cars']);
  }
}
