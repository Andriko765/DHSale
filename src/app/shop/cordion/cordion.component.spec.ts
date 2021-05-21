import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CordionComponent } from './cordion.component';

describe('CordionComponent', () => {
  let component: CordionComponent;
  let fixture: ComponentFixture<CordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
