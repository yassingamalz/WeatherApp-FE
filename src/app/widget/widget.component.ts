import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  weatherData = [
    { icon: '☀️', date: 'Nov 25', tempMin: 10, tempMax: 20, windMax: 15 },
    { icon: '🌧️', date: 'Nov 26', tempMin: 8, tempMax: 18, windMax: 20 },
    { icon: '⛅', date: 'Nov 27', tempMin: 12, tempMax: 22, windMax: 18 },
    { icon: '⛅', date: 'Nov 27', tempMin: 12, tempMax: 22, windMax: 18 },
    { icon: '⛅', date: 'Nov 27', tempMin: 12, tempMax: 22, windMax: 18 },
    { icon: '⛅', date: 'Nov 27', tempMin: 12, tempMax: 22, windMax: 18 },
    { icon: '⛅', date: 'Nov 27', tempMin: 12, tempMax: 22, windMax: 18 },
  ];
}
