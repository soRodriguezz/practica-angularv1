import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoDirectivasComponent } from './uso-directivas.component';

describe('UsoDirectivasComponent', () => {
  let component: UsoDirectivasComponent;
  let fixture: ComponentFixture<UsoDirectivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsoDirectivasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoDirectivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
