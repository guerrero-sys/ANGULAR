import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiButtonsComponent } from './api-buttons.component';

describe('ApiButtonsComponent', () => {
  let component: ApiButtonsComponent;
  let fixture: ComponentFixture<ApiButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
