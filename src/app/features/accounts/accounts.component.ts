import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  openFaq = signal<number | null>(null);

  faqs = [
    {
      q: 'How do I open a live trading account?',
      a: "You can open a live account with Equiti by selecting 'Start trading' on our website. This takes you to the Equiti Portal, where you can register, verify your email and complete your profile. Once approved, you can fund your MT4 or MT5 wallet and begin placing live trades. Visit our Deposits and Withdrawals page for all funding details."
    },
    {
      q: 'What can I use a live account for?',
      a: 'A live Equiti account lets you access global financial markets and manage every part of your trading in one place. Through the Equiti Portal, you can view live prices, monitor positions, fund your wallet, contact support and open additional live or demo accounts whenever you need.'
    },
    {
      q: 'How do I fund my Equiti account?',
      a: 'You can fund your Equiti account securely using Apple Pay, Google Pay, bank cards, eWallets, crypto wallets, local payment options and bank transfers. All supported methods and processing times are listed on our Deposits and Withdrawals page so you can choose the funding option that suits you best.'
    },
    {
      q: 'Can I change my existing account type or currency?',
      a: 'Your account type and base currency cannot be modified once created due to regulatory rules. If you wish to use another setup, you can open additional trading accounts, up to three per any portal, and select a different account type or currency for each one.'
    },
    {
      q: 'What is the Equiti Welcome Bonus offer?',
      a: 'The Welcome Bonus gives you an extra 30% on your first deposit when you fund at least $100 into your MT5 trading account.'
    },
    {
      q: 'How can I claim the welcome bonus?',
      a: 'To claim the bonus, deposit $100 or more into your MT5 account and accept the terms and conditions shown in your client portal.'
    },
    {
      q: 'Does the Welcome Bonus affect my account leverage?',
      a: 'Yes. While the bonus is active, account leverage is set to 500:1. When the bonus is removed, your leverage will automatically revert to the standard 2000:1.'
    },
    {
      q: 'Can I use the bonus to cover trading losses?',
      a: 'No. Bonus credit cannot be used to offset trading losses. It appears in the credit field on MT5 and it cannot be used to replace any realised losses.'
    },
  ];

  toggleFaq(i: number) {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }
}
