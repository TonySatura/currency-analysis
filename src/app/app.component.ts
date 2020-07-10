import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'currency-analysis';
    currencies = ['EUR', 'USD', 'GBP', 'CAD', 'CHF'];

    isCalculated = false;

    selectedBaseCurrency = 'EUR';
    selectedTargetCurrency = 'USD';
    highestRate;
    highestRateDate;

    onBaseCurrencyChanged(event: any) {
        this.selectedBaseCurrency = event.target.value;
    }

    onTargetCurrencyChanged(event: any) {
        this.selectedTargetCurrency = event.target.value;
    }

    onClick() {
        const response = {
            rates: {
              '2020-01-07': { USD: 1.1172 },
              '2020-01-08': { USD: 1.1115 },
              '2020-01-20': { USD: 1.1085 },
              '2020-01-29': { USD: 1.1001 },
              '2020-01-03': { USD: 1.1147 },
              '2020-01-21': { USD: 1.1115 },
              '2020-01-14': { USD: 1.1115 },
              '2020-01-10': { USD: 1.1091 },
              '2020-01-31': { USD: 1.1052 },
              '2020-01-13': { USD: 1.1126 },
              '2020-01-17': { USD: 1.1108 },
              '2020-01-27': { USD: 1.1025 },
              '2020-01-24': { USD: 1.1035 },
              '2020-01-15': { USD: 1.1142 },
              '2020-01-06': { USD: 1.1194 },
              '2020-01-22': { USD: 1.1088 },
              '2020-01-09': { USD: 1.111 },
              '2020-01-16': { USD: 1.1169 },
              '2020-01-02': { USD: 1.1193 },
              '2020-01-28': { USD: 1.1005 },
              '2020-01-30': { USD: 1.1029 },
              '2020-01-23': { USD: 1.1091 }
            },
            start_at: '2020-01-01',
            base: 'EUR',
            end_at: '2020-01-31'
        };

        for (const [date, rate] of Object.entries(response.rates)) {
            const rateValue = Object.values(rate);

            console.log('hr:' + this.highestRate);
            console.log('r:' + rateValue);

            if (this.highestRate === undefined || rateValue > this.highestRate) {
                console.log('set!');
                this.highestRate = rateValue;
                this.highestRateDate = date;
            }
        }

        this.isCalculated = true;
    }
}
