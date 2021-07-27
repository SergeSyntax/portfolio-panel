import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitProjReqDocComponent } from './profit-proj-req-doc.component';

describe('ProfitProjReqDocComponent', () => {
  let component: ProfitProjReqDocComponent;
  let fixture: ComponentFixture<ProfitProjReqDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitProjReqDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitProjReqDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
