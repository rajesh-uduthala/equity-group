import { Component, HostListener, signal, ElementRef, inject } from '@angular/core';
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
  scrolled   = signal(false);
  mobileOpen = signal(false);
  activeMenu = signal<string | null>(null);
  theme      = inject(ThemeService);

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 40); }

  toggleMobile() { this.mobileOpen.update(v => !v); }
  closeMobile()  { this.mobileOpen.set(false); this.activeMenu.set(null); }

  toggleMenu(name: string, event: Event) {
    event.stopPropagation();
    this.activeMenu.set(this.activeMenu() === name ? null : name);
  }

  @HostListener('document:click')
  onDocClick() { this.activeMenu.set(null); }
}
