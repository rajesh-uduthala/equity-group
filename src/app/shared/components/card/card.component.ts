import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cardClasses">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .card {
      background: var(--dark-2);
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      transition: all var(--transition);
    }
    .card-default  { padding: 24px; }
    .card-compact  { padding: 16px; }
    .card-flush    { padding: 0; overflow: hidden; }
    .card-hoverable:hover { border-color: var(--border-hover); transform: translateY(-4px); box-shadow: var(--shadow-lg); }
    .card-featured { border-color: var(--primary); background: var(--dark-3); }
    .card-surface  { background: var(--surface); }
    .card-glow     { box-shadow: var(--shadow-glow); }
  `]
})
export class CardComponent {
  @Input() padding: 'default' | 'compact' | 'flush' = 'default';
  @Input() hoverable = false;
  @Input() featured = false;
  @Input() surface = false;
  @Input() glow = false;

  get cardClasses(): string {
    return [
      'card',
      `card-${this.padding}`,
      this.hoverable ? 'card-hoverable' : '',
      this.featured  ? 'card-featured'  : '',
      this.surface   ? 'card-surface'   : '',
      this.glow      ? 'card-glow'      : '',
    ].filter(Boolean).join(' ');
  }
}
