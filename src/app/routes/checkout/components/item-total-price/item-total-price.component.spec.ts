import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemTotalPriceComponent } from './item-total-price.component';

describe('ItemTotalPriceComponent', () => {
  let component: ItemTotalPriceComponent;
  let fixture: ComponentFixture<ItemTotalPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTotalPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTotalPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
