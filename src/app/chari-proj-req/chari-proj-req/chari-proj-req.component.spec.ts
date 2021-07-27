import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariProjReqComponent } from './chari-proj-req.component';

describe('ChariProjReqComponent', () => {
  let component: ChariProjReqComponent;
  let fixture: ComponentFixture<ChariProjReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChariProjReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariProjReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
