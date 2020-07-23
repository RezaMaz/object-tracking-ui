import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CarCoordinationsComponent} from './car-coordinations.component';

describe('CarCoordinationsComponent', () => {
  let component: CarCoordinationsComponent;
  let fixture: ComponentFixture<CarCoordinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarCoordinationsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCoordinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
