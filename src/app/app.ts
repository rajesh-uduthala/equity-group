import { Component, inject, signal, effect, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NetworkService } from './core/services/network.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy {
  network        = inject(NetworkService);
  showOnlineToast = signal(false);

  private prevOnline  = navigator.onLine;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    effect(() => {
      const online = this.network.isOnline();

      if (online && !this.prevOnline) {
        this.showOnlineToast.set(true);
        if (this.toastTimer) clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => this.showOnlineToast.set(false), 3000);
      }

      if (!online) {
        this.showOnlineToast.set(false);
        if (this.toastTimer) { clearTimeout(this.toastTimer); this.toastTimer = null; }
      }

      this.prevOnline = online;
    });
  }

  ngOnDestroy() {
    if (this.toastTimer) clearTimeout(this.toastTimer);
  }
}
