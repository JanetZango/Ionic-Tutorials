import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleShootingComponent } from './trouble-shooting.component';

describe('TroubleShootingComponent', () => {
  let component: TroubleShootingComponent;
  let fixture: ComponentFixture<TroubleShootingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleShootingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleShootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
