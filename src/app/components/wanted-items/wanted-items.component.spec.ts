import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedItemsComponent } from './wanted-items.component';

describe('WantedItemsComponent', () => {
  let component: WantedItemsComponent;
  let fixture: ComponentFixture<WantedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantedItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
