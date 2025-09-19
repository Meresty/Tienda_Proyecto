import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService } from '../services/carrito.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito-indicador',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="indicador-carrito" *ngIf="totalItems > 0">
      <a routerLink="/carrito" class="contador-carrito">
         {{ totalItems }} items
      </a>
    </div>
  `,
  styles: [`
    .indicador-carrito {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 1000;
    }

    .contador-carrito {
      background: transparent;
      color: transparent;
      padding: 0.8rem 1.2rem;
      border-radius: 25px;
      font-weight: 600;
      box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

 

    @media (max-width: 768px) {
      .indicador-carrito {
        top: 10px;
        right: 10px;
      }
    }
  `]
})
export class CarritoIndicadorComponent implements OnInit {
  totalItems: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.cart$.subscribe(items => {
      this.totalItems = this.carritoService.obtenerTotalItems();
    });
  }
}