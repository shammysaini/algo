import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UapiComponent } from './uapi.component';

describe('UapiComponent', () => {
  let component: UapiComponent;
  let fixture: ComponentFixture<UapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
