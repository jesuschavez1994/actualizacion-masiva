import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTraysComponent } from './app-trays.component';

describe('AppTraysComponent', () => {
  let component: AppTraysComponent;
  let fixture: ComponentFixture<AppTraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTraysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppTraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
