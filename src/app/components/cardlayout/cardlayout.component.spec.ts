import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlayoutComponent } from './cardlayout.component';

describe('CardlayoutComponent', () => {
  let component: CardlayoutComponent;
  let fixture: ComponentFixture<CardlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardlayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
