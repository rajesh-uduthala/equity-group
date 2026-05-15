import { Injectable, signal, OnDestroy } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NetworkService implements OnDestroy {
  isOnline = signal(navigator.onLine);

  private onOnline  = () => this.isOnline.set(true);
  private onOffline = () => this.isOnline.set(false);

  constructor() {
    window.addEventListener('online',  this.onOnline);
    window.addEventListener('offline', this.onOffline);
  }

  ngOnDestroy() {
    window.removeEventListener('online',  this.onOnline);
    window.removeEventListener('offline', this.onOffline);
  }
}
