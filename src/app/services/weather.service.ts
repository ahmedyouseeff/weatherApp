import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(CityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      environment.weatherBaseUrl + `&q=${CityName}&aqi=yes`
    );
  }
}
