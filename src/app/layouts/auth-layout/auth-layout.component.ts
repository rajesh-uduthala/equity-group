import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <div class="auth-shell">
      <header class="auth-nav">
        <a routerLink="/" class="auth-logo">
          <img src="https://eq-cdn.equiti-me.com/website/documents/equiti-company-logo.svg"
               alt="Equiti" class="auth-logo-img" />
        </a>
        <div class="lang-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          English
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </header>
      <main class="auth-main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .auth-shell { min-height: 100vh; background: #F0F2F5; display: flex; flex-direction: column; }
    .auth-nav {
      display: flex; align-items: center; justify-content: space-between;
      padding: 16px 40px; background: #FFF;
    }
    .auth-logo { display: flex; align-items: center; text-decoration: none; }
    .auth-logo-img { height: 30px; width: auto; }
    .lang-btn {
      display: flex; align-items: center; gap: 6px;
      font-size: 13px; font-weight: 600; color: #4B5563;
      cursor: pointer; padding: 6px 12px; border-radius: 6px;
      border: 1px solid #D1D5DB; background: transparent;
      transition: background 0.15s;
    }
    .lang-btn:hover { background: rgba(0,0,0,0.04); }
    .auth-main { flex: 1; display: flex; justify-content: center; padding: 8px 24px 48px; }
  `]
})
export class AuthLayoutComponent {}
