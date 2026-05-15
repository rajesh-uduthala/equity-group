import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trading-tools',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './trading-tools.component.html',
  styleUrl: './trading-tools.component.css'
})
export class TradingToolsComponent {
  openFaq = signal<number | null>(0);

  faqs = [
    {
      q: "Where can I find Equiti's trading tools?",
      a: "You can find our fundamental, sentiment and technical analysis tools in your Equiti Portal in the 'Analysis' section of the main menu. The tools are available for mobile devices, tablets, and laptops so you can use them conveniently wherever you are."
    },
    {
      q: "Are Equiti's trading tools free to use?",
      a: "Yes, all of Equiti's trading tools are completely free for clients with a live trading account. Simply log in to your Equiti Portal to access them."
    },
    {
      q: "Why should I use trading tools?",
      a: "Trading tools help you make more informed decisions by providing data-driven analysis, market signals, and economic indicators that can help you identify opportunities and manage risk more effectively."
    },
    {
      q: "How does the Assets Overview tool work?",
      a: "The Assets Overview tool provides a multi-asset market analysis dashboard with opportunity scores for every symbol based on AI analysis with multiple indicators. It makes it easy to spot new opportunities across all markets."
    },
  ];

  toggleFaq(index: number) {
    this.openFaq.set(this.openFaq() === index ? null : index);
  }
}
