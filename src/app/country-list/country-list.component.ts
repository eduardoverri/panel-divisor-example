import { Component } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent {
  countries = [
    { name: 'India', population: 1450935791 },
    { name: 'China', population: 1419321278 },
    { name: 'United States', population: 345426571 },
    { name: 'Indonesia', population: 283487931 },
    { name: 'Pakistan', population: 251269164 },
    { name: 'Nigeria', population: 232679478 },
    { name: 'Brazil', population: 211998573 },
    { name: 'Bangladesh', population: 173562364 },
    { name: 'Russia', population: 144820423 },
    { name: 'Mexico', population: 130861007 },
    { name: 'Ethiopia', population: 132059767 },
    { name: 'Japan', population: 123753041 },
    { name: 'Philippines', population: 114891199 },
    { name: 'Egypt', population: 114535772 },
    { name: 'DR Congo', population: 105789731 },
    { name: 'Vietnam', population: 100352192 },
    { name: 'Iran', population: 90608707 },
    { name: 'Turkey', population: 87270501 },
    { name: 'Germany', population: 84548231 },
    { name: 'Thailand', population: 71702435 }
  ];
}
