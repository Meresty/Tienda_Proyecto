import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoService, CartItem } from '../services/carrito.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrls: ['./carrito.css']
})
export class CarritoComponent implements OnInit {
  cartItems: CartItem[] = [];
  totalPrecio: number = 0;

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    this.carritoService.cart$.subscribe(items => {
      this.cartItems = items;
      this.totalPrecio = this.carritoService.obtenerTotalPrecio();
    });
  }

  actualizarCantidad(item: CartItem, nuevaCantidad: number): void {
    this.carritoService.actualizarCantidad(item.product.id, nuevaCantidad);
  }

  quitar(item: CartItem): void {
    this.carritoService.removerDelCarrito(item.product.id);
  }

  limpiarCarrito(): void {
    this.carritoService.limpiarCarrito();
  }
}