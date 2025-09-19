import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogoComponent } from './catalogo'; 
import { ProductoService } from '../services/producto.service';
import { of } from 'rxjs';

describe('CatalogoComponent', () => {
  let component: CatalogoComponent;
  let fixture: ComponentFixture<CatalogoComponent>;

  const productoServiceMock = {
    getProductos: jasmine.createSpy('getProductos').and.returnValue(Promise.resolve([]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoComponent], 
      providers: [
        { provide: ProductoService, useValue: productoServiceMock } 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
