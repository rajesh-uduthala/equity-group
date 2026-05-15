import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeVariant = 'primary' | 'success' | 'danger' | 'warning' | 'neutral' | 'outline';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  template: `<span [class]="'badge badge-' + variant"><ng-content></ng-content></span>`,
  styles: [`
    .badge {
      display: inline-flex; align-items: center; gap: 4px;
      font-size: 11px; font-weight: 700; letter-spacing: 0.5px;
      text-transform: uppercase; padding: 4px 10px;
      border-radius: var(--radius-pill); border: 1px solid transparent;
    }
    .badge-primary  { background: var(--primary-light); color: var(--primary); border-color: rgba(0,180,216,0.2); }
    .badge-success  { background: var(--up-bg); color: var(--up); border-color: rgba(34,197,94,0.2); }
    .badge-danger   { background: var(--down-bg); color: var(--down); border-color: rgba(239,68,68,0.2); }
    .badge-warning  { background: rgba(245,158,11,0.12); color: var(--accent); border-color: rgba(245,158,11,0.2); }
    .badge-neutral  { background: rgba(255,255,255,0.06); color: var(--text-muted); border-color: var(--border); }
    .badge-outline  { background: transparent; color: var(--primary); border-color: var(--primary); }
  `]
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'primary';
}
