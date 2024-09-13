import { Component } from '@angular/core';
import { CountryListComponent } from '../country-list/country-list.component';
import { CarListComponent } from '../car-list/car-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  leftComponent = CountryListComponent;
  rightComponent = CarListComponent;
}
