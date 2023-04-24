import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-top-countries',
  templateUrl: './top-countries.component.html',
  styleUrls: ['./top-countries.component.css'],
})
export class TopCountriesComponent implements OnInit, OnChanges {
  @Input() covidData: any;
  topConfirmedCases: any[] = [];
  topConfirmedDeaths: any[] = [];
  topConfirmedRecovered: any[] = [];

  constructor() {}
  ngOnInit(): void {
    console.log(this.topConfirmedCases);
  }
  ngOnChanges(): void {
    this.topConfirmedCases = this.covidData.countries
      ?.sort((a: any, b: any) => (b.TotalConfirmed = a.TotalConfirmed))
      .slice(0, 5);
  }
}
