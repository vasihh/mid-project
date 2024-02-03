import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenComponent } from './men.component';
import { Product } from '../models/product.model';
describe('MenComponent', () => {
  let component: MenComponent;
  let fixture: ComponentFixture<MenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenComponent]
    });
    fixture = TestBed.createComponent(MenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
