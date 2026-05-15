import { Component, Input, ElementRef, ViewChild, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sparkline',
  standalone: true,
  template: `<canvas #c [width]="w" [height]="h" style="display:block;width:100%;height:auto"></canvas>`,
})
export class SparklineComponent implements AfterViewInit, OnChanges {
  @Input() prices: number[] = [];
  @Input() up  = true;
  @Input() w   = 100;
  @Input() h   = 44;

  @ViewChild('c') ref!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() { this.draw(); }
  ngOnChanges()     { this.draw(); }

  private draw() {
    if (!this.ref || this.prices.length < 2) return;
    const canvas = this.ref.nativeElement;
    const ctx    = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const min  = Math.min(...this.prices);
    const max  = Math.max(...this.prices);
    const span = max - min || 0.0001;
    const pad  = 3;

    const toX = (i: number) => pad + (i / (this.prices.length - 1)) * (W - pad * 2);
    const toY = (p: number) => pad + (1 - (p - min) / span) * (H - pad * 2);

    const color = this.up ? '#22C55E' : '#EF4444';

    // Line
    ctx.beginPath();
    this.prices.forEach((p, i) =>
      i === 0 ? ctx.moveTo(toX(i), toY(p)) : ctx.lineTo(toX(i), toY(p))
    );
    ctx.strokeStyle = color;
    ctx.lineWidth   = 1.5;
    ctx.lineJoin    = 'round';
    ctx.stroke();

    // Fill under line
    ctx.lineTo(toX(this.prices.length - 1), H);
    ctx.lineTo(toX(0), H);
    ctx.closePath();
    ctx.fillStyle = this.up ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)';
    ctx.fill();

    // Latest price dot
    const lastX = toX(this.prices.length - 1);
    const lastY = toY(this.prices[this.prices.length - 1]);
    ctx.beginPath();
    ctx.arc(lastX, lastY, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}
