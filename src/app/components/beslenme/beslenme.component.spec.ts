import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeslenmeComponent } from './beslenme.component';

describe('BeslenmeComponent', () => {
  let component: BeslenmeComponent;
  let fixture: ComponentFixture<BeslenmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeslenmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeslenmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
