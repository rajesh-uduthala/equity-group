import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-tag',
  standalone: true,
  template: `<div [class]="'section-tag ' + (alt ? 'section-tag-alt' : '')"><ng-content></ng-content></div>`,
  styles: [`
    .section-tag {
      display: inline-block;
      background: var(--primary-light); color: var(--primary);
      padding: 5px 14px; border-radius: var(--radius-pill);
      font-size: 11px; font-weight: 700;
      text-transform: uppercase; letter-spacing: 1px;
      margin-bottom: 16px;
      border: 1px solid rgba(0,180,216,0.2);
    }
    .section-tag-alt {
      background: rgba(255,255,255,0.05);
      color: var(--text-muted);
      border-color: var(--border);
    }
  `]
})
export class SectionTagComponent {
  @Input() alt = false;
}
