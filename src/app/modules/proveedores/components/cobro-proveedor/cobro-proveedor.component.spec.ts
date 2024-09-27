import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobroProveedorComponent } from './cobro-proveedor.component';

describe('CobroProveedorComponent', () => {
  let component: CobroProveedorComponent;
  let fixture: ComponentFixture<CobroProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CobroProveedorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CobroProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
