import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEtkinlikPageComponent } from './single-etkinlik-page.component';

describe('SingleEtkinlikPageComponent', () => {
  let component: SingleEtkinlikPageComponent;
  let fixture: ComponentFixture<SingleEtkinlikPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEtkinlikPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEtkinlikPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
