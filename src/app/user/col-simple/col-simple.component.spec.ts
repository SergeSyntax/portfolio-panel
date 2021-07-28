import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColSimpleComponent } from './col-simple.component';

describe('ColSimpleComponent', () => {
  let component: ColSimpleComponent;
  let fixture: ComponentFixture<ColSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
