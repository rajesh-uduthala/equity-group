import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrolled            = signal(false);
  mobileOpen          = signal(false);
  activeMenu          = signal<string | null>(null);
  activeMobileSection = signal<string | null>(null);
  theme               = inject(ThemeService);

  constructor() {}

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 40); }

  toggleMobile() {
    this.mobileOpen.update(v => !v);
    if (!this.mobileOpen()) this.activeMobileSection.set(null);
  }
  closeMobile() {
    this.mobileOpen.set(false);
    this.activeMenu.set(null);
    this.activeMobileSection.set(null);
  }

  toggleMenu(name: string, event: Event) {
    event.stopPropagation();
    this.activeMenu.set(this.activeMenu() === name ? null : name);
  }

  toggleMobileSection(name: string) {
    this.activeMobileSection.set(this.activeMobileSection() === name ? null : name);
  }

  @HostListener('document:click')
  onDocClick() { this.activeMenu.set(null); }
}
