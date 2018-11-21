import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipingComponent } from './piping.component';

describe('PipingComponent', () => {
  let component: PipingComponent;
  let fixture: ComponentFixture<PipingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
