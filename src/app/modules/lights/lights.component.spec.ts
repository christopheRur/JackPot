/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightsComponent } from './lights.component';

describe('LightsComponent', () => {
  let component: LightsComponent;
  let fixture: ComponentFixture<LightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
