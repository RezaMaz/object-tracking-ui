import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Car} from './model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = 'http://localhost:8080/api/v1/car';

  constructor(private http: HttpClient) {
  }

  getCar(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCar(car: Car): Observable<any> {
    return this.http.post(`${this.baseUrl}`, car);
  }

  updateCar(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  getCarList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }
}
