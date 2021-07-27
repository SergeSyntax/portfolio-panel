import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChariProjReqDocComponent } from './chari-proj-req-doc.component';

describe('ChariProjReqDocComponent', () => {
  let component: ChariProjReqDocComponent;
  let fixture: ComponentFixture<ChariProjReqDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChariProjReqDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChariProjReqDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
