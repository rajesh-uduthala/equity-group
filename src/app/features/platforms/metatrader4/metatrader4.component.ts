import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-metatrader4',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './metatrader4.component.html',
  styleUrl: './metatrader4.component.css'
})
export class Metatrader4Component {
  openFaq = signal<number | null>(0);

  faqs = [
    {
      q: 'What is MetaTrader 4?',
      a: 'MetaTrader 4 is a trading platform developed by MetaQuotes Software for online trading in forex, contract for differences (CFDs) and futures markets. MT4 provides tools and resources that allow traders to analyse price & place, to manage trades and to employ automated trading techniques.'
    },
    {
      q: 'What Equiti accounts can I use for MT4?',
      a: 'You can use Equiti Standard and Premier accounts to trade CFDs on MT4.'
    },
    {
      q: 'What products are on MT4?',
      a: 'You can trade CFDs in forex, shares, indices, commodities, futures and ETFs on MT4 when you open a live trading account with Equiti.'
    },
    {
      q: 'How do I login to MT4?',
      a: "Open MT4 & enter your Equiti account details in the authorisation login box. If it hasn't popped up, you can also go to 'File' > 'Login to Trade account' and the login box will appear. If you have yet to download MT4 - first you'll need to get your login number, password & access to the client portal (our server). Once you've opened an Equiti account, these details will be emailed to you & you'll be able to download MT4 on your preferred device."
    },
    {
      q: 'What happens to my positions if I logout of MT4?',
      a: "Open positions will not be closed if you logout of MT4 until an existing stop loss, take profit or stop out level is reached. Always make sure to monitor your trades and be aware of financing fees if you're rolling a position past trading hours."
    },
    {
      q: 'What time zone does MT4 operate on?',
      a: "MT4 always coincides with the NY close. During 'daylight savings' it will operate on GMT+3, and in winter on GMT+2."
    },
    {
      q: 'Can I download a statement from MT4?',
      a: "Yes, you can. Open the platform and login with your Equiti account details. Select the 'Account History' tab in the terminal. Right click in the middle of the terminal and select 'custom period'. Select the start and finish date for the tax year you need and press 'OK'. The history from the period selected will then fill the 'Account History' section. Right click again and select 'Save Report'."
    },
  ];

  toggleFaq(i: number) {
    this.openFaq.set(this.openFaq() === i ? null : i);
  }
}
