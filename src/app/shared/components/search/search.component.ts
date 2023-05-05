
import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string ='';

  @Output()countryToSearch = new EventEmitter<any>();
  covidData : any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   this.dataService.getSummaryData()
   .subscribe((data:any) => {
    this.covidData = data; 
   }) 
  }
  search(){
   this.countryToSearch.emit(this.searchTerm);
  }
  searchCountry(country: string){
    const countries = this.covidData.Countries.filter(
      (c:any) => c.Country.toLowerCase().includes(country.toLocaleLowerCase())
    )
  }
}
