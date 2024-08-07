import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInformationCardWithChartComponent } from './app-information-card-with-chart.component';

describe('AppInformationCardWithChartComponent', () => {
  let component: AppInformationCardWithChartComponent;
  let fixture: ComponentFixture<AppInformationCardWithChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppInformationCardWithChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppInformationCardWithChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
