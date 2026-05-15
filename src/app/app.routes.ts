import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'markets',
        loadComponent: () => import('./features/markets/markets.component').then(m => m.MarketsComponent)
      },
      {
        path: 'platforms',
        loadComponent: () => import('./features/platforms/platforms.component').then(m => m.PlatformsComponent)
      },
      {
        path: 'accounts',
        loadComponent: () => import('./features/accounts/accounts.component').then(m => m.AccountsComponent)
      },
      {
        path: 'trading-tools',
        loadComponent: () => import('./features/trading-tools/trading-tools.component').then(m => m.TradingToolsComponent)
      },
      {
        path: 'platforms/metatrader-4',
        loadComponent: () => import('./features/platforms/metatrader4/metatrader4.component').then(m => m.Metatrader4Component)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
      },
    ]
  },
  { path: '**', redirectTo: '' }
];
