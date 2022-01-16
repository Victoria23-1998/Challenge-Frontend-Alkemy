import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamItemsComponent } from './team-items.component';

describe('TeamItemsComponent', () => {
  let component: TeamItemsComponent;
  let fixture: ComponentFixture<TeamItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
