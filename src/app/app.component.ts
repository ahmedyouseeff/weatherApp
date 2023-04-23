import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather';
  ngForm!: FormGroup;
  cityName: string = 'cairo';
  cityData: any;
  constructor(private api: WeatherService, private fb: FormBuilder) {}

  ngOnInit() {
    this.ngForm = this.fb.group({
      city: [],
    });
    this.getWeatherData();
  }

  getWeatherData() {
    this.api.getWeatherData(this.cityName).subscribe({
      next: (response) => {
        this.cityData = response;
      },
    });
  }

  onSubmit() {
    this.cityName = this.ngForm.value.city;
    this.getWeatherData();
    this.ngForm.controls['city'].setValue(null);
  }
}
