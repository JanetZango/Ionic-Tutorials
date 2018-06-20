import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreTutorialsComponent } from './more-tutorials.component';

describe('MoreTutorialsComponent', () => {
  let component: MoreTutorialsComponent;
  let fixture: ComponentFixture<MoreTutorialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreTutorialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
