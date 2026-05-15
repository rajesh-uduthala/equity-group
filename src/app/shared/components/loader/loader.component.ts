import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'loader-wrap loader-' + size">
      <div class="loader-ring"></div>
    </div>
  `,
  styles: [`
    .loader-wrap { display: flex; align-items: center; justify-content: center; }
    .loader-sm  { width: 20px; height: 20px; }
    .loader-md  { width: 36px; height: 36px; }
    .loader-lg  { width: 56px; height: 56px; }
    .loader-ring {
      width: 100%; height: 100%;
      border: 2px solid var(--border);
      border-top-color: var(--primary);
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class LoaderComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
}
