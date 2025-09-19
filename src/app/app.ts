import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CarritoIndicadorComponent } from './carrito/carrito-indicador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CarritoIndicadorComponent 
  ],
  template: `
    <nav class="navbar">
      <div class="nav-container">
        <a routerLink="/" class="nav-logo">°❀⋆.ೃ࿔*:･°❀⋆.ೃ࿔*:･</a>
        
        <div class="nav-links">
          <a routerLink="/catalogo" routerLinkActive="active" class="nav-link">Catálogo</a>
          <a routerLink="/carrito" routerLinkActive="active" class="nav-link">Carrito</a>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-outlet></router-outlet>
    </main>

  <app-carrito-indicador></app-carrito-indicador>
  `,
  styles: [`
    .navbar {
      background: white;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      padding: 1rem 0;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    }

    .nav-logo {
      font-size: 1.8rem;
      font-weight: bold;
      color: #333;
      text-decoration: none;
    }

    .nav-links {
      display: flex;
      gap: 2rem;
    }

    .nav-link {
      text-decoration: none;
      color: #666;
      font-weight: 500;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .nav-link.active,
    .nav-link:hover {
      color: #4ecdc4;
      background: rgba(78, 205, 196, 0.1);
    }

    .main-content {
      margin-top: 1rem;
      min-height: calc(100vh - 80px);
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 0 1rem;
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class AppComponent { }