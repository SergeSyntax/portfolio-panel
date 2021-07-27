import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitProjReqComponent } from './profit-proj-req.component';

describe('ProfitProjReqComponent', () => {
  let component: ProfitProjReqComponent;
  let fixture: ComponentFixture<ProfitProjReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitProjReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitProjReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
