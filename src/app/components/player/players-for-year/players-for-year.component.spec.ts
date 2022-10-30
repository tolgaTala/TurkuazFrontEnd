import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersForYearComponent } from './players-for-year.component';

describe('PlayersForYearComponent', () => {
  let component: PlayersForYearComponent;
  let fixture: ComponentFixture<PlayersForYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersForYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersForYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
