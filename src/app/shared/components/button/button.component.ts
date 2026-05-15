import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger' | 'white' | 'outline-white';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [class]="buttonClasses"
      [disabled]="disabled || loading"
      [type]="type">
      <span *ngIf="loading" class="btn-spinner"></span>
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    button {
      display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      font-family: var(--font); font-weight: 600; border: none;
      cursor: pointer; transition: all var(--transition);
      white-space: nowrap; text-decoration: none; outline: none;
    }
    button:disabled { opacity: 0.5; cursor: not-allowed; pointer-events: none; }

    .btn-sm   { padding: 8px 16px;  font-size: 13px; border-radius: var(--radius-sm); }
    .btn-md   { padding: 11px 24px; font-size: 15px; border-radius: var(--radius-md); }
    .btn-lg   { padding: 14px 32px; font-size: 16px; border-radius: var(--radius-md); }
    .btn-full { width: 100%; }

    .btn-primary { background: var(--primary); color: var(--dark); }
    .btn-primary:hover:not(:disabled) { background: var(--primary-dark); transform: translateY(-1px); }

    .btn-outline { background: transparent; color: var(--primary); border: 1.5px solid var(--primary); }
    .btn-outline:hover:not(:disabled) { background: var(--primary-light); }

    .btn-ghost { background: transparent; color: var(--text-muted); border: 1px solid transparent; }
    .btn-ghost:hover:not(:disabled) { color: var(--text); background: rgba(255,255,255,0.06); }

    .btn-danger { background: rgba(239,68,68,0.15); color: var(--down); border: 1px solid rgba(239,68,68,0.25); }
    .btn-danger:hover:not(:disabled) { background: rgba(239,68,68,0.25); }

    .btn-white { background: #fff; color: var(--dark); }
    .btn-white:hover:not(:disabled) { background: #e8eef4; }

    .btn-outline-white { background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.4); }
    .btn-outline-white:hover:not(:disabled) { border-color: #fff; }

    .btn-spinner {
      width: 14px; height: 14px;
      border: 2px solid currentColor; border-top-color: transparent;
      border-radius: 50%; animation: spin 0.6s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() fullWidth = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  get buttonClasses(): string {
    return [
      `btn-${this.variant}`,
      `btn-${this.size}`,
      this.fullWidth ? 'btn-full' : '',
    ].filter(Boolean).join(' ');
  }
}
