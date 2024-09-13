import { Component } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent {
  carBrands = [
    { name: 'Toyota', country: 'Japan', year: 1937 },
    { name: 'Volkswagen', country: 'Germany', year: 1937 },
    { name: 'Ford', country: 'United States', year: 1903 },
    { name: 'Honda', country: 'Japan', year: 1948 },
    { name: 'BMW', country: 'Germany', year: 1916 },
    { name: 'Mercedes-Benz', country: 'Germany', year: 1926 },
    { name: 'Audi', country: 'Germany', year: 1909 },
    { name: 'Tesla', country: 'United States', year: 2003 },
    { name: 'Chevrolet', country: 'United States', year: 1911 },
    { name: 'Nissan', country: 'Japan', year: 1933 },
    { name: 'Hyundai', country: 'South Korea', year: 1967 },
    { name: 'Subaru', country: 'Japan', year: 1953 },
    { name: 'Kia', country: 'South Korea', year: 1944 },
    { name: 'Porsche', country: 'Germany', year: 1931 },
    { name: 'Jaguar', country: 'United Kingdom', year: 1922 },
    { name: 'Land Rover', country: 'United Kingdom', year: 1948 },
    { name: 'Ferrari', country: 'Italy', year: 1939 },
    { name: 'Lamborghini', country: 'Italy', year: 1963 },
    { name: 'Aston Martin', country: 'United Kingdom', year: 1913 },
    { name: 'Bugatti', country: 'France', year: 1909 }
  ];
}
