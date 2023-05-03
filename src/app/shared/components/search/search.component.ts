import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm: string ='';

  @output()countryToSearch = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }
}
