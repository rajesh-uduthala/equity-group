import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTagComponent } from '../../shared/components/badge/section-tag.component';

@Component({
  selector: 'app-platforms',
  standalone: true,
  imports: [CommonModule, SectionTagComponent],
  template: `
    <section style="padding: 80px 0; min-height: 60vh;">
      <div class="container" style="text-align:center;">
        <app-section-tag>Platforms</app-section-tag>
        <h2 style="font-size:42px; font-weight:800; color:#fff; margin:16px 0 12px;">Platforms</h2>
        <p style="color:var(--text-muted); font-size:17px;">Full page coming soon — structure is ready.</p>
      </div>
    </section>
  `
})
export class PlatformsComponent {}
