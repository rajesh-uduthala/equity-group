import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = {
    firstName: '', lastName: '', email: '',
    phone: '', country: 'IN', password: '',
    notUS: false, captcha: false
  };
  loading = false;
  showPassword = false;

  countries = [
    { code: 'IN', name: 'India',          flag: '🇮🇳', dial: '+91'  },
    { code: 'US', name: 'United States',  flag: '🇺🇸', dial: '+1'   },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dial: '+44'  },
    { code: 'AE', name: 'UAE',            flag: '🇦🇪', dial: '+971' },
    { code: 'SA', name: 'Saudi Arabia',   flag: '🇸🇦', dial: '+966' },
    { code: 'ZA', name: 'South Africa',   flag: '🇿🇦', dial: '+27'  },
    { code: 'KE', name: 'Kenya',          flag: '🇰🇪', dial: '+254' },
    { code: 'NG', name: 'Nigeria',        flag: '🇳🇬', dial: '+234' },
    { code: 'AU', name: 'Australia',      flag: '🇦🇺', dial: '+61'  },
    { code: 'CA', name: 'Canada',         flag: '🇨🇦', dial: '+1'   },
    { code: 'DE', name: 'Germany',        flag: '🇩🇪', dial: '+49'  },
    { code: 'FR', name: 'France',         flag: '🇫🇷', dial: '+33'  },
    { code: 'SG', name: 'Singapore',      flag: '🇸🇬', dial: '+65'  },
    { code: 'JP', name: 'Japan',          flag: '🇯🇵', dial: '+81'  },
    { code: 'BR', name: 'Brazil',         flag: '🇧🇷', dial: '+55'  },
  ];

  get selectedCountry() {
    return this.countries.find(c => c.code === this.form.country) ?? this.countries[0];
  }
  get selectedFlag() { return this.selectedCountry.flag; }
  get dialCode()     { return this.selectedCountry.dial; }

  onCountryChange() { /* flag/dial auto-updates via getters */ }

  onSubmit() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1500);
  }
}
