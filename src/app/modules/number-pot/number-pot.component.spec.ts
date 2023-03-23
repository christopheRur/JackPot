import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberPotComponent } from './number-pot.component';

describe('NumberPotComponent', () => {
  let component: NumberPotComponent;
  let fixture: ComponentFixture<NumberPotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberPotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberPotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
