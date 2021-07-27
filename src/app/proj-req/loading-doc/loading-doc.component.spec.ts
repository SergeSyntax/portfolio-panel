import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingDocComponent } from './loading-doc.component';

describe('LoadingDocComponent', () => {
  let component: LoadingDocComponent;
  let fixture: ComponentFixture<LoadingDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
