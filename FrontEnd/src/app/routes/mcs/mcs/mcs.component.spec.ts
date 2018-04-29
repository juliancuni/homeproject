import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { McsComponent } from './mcs.component';

describe('McsComponent', () => {
  let component: McsComponent;
  let fixture: ComponentFixture<McsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
