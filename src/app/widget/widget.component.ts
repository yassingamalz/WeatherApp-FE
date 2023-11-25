import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  weatherData: any[] = [];

  ngOnInit() {
    this.generateRandomWeatherData(10);
  }

  generateRandomWeatherData(numDays: number) {
    const currentDate = new Date();
    const icons = ['☀️', '🌧️', '⛅']; // Add more icons as needed

    for (let i = 0; i < numDays; i++) {
      const randomIcon = icons[Math.floor(Math.random() * icons.length)];
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + i);

      const randomTemperatureMin = this.getRandomNumber(0, 30);
      const randomTemperatureMax = this.getRandomNumber(randomTemperatureMin, 35);
      const randomWindMax = this.getRandomNumber(5, 25);

      const weatherDay = {
        icon: randomIcon,
        date: this.formatDate(date),
        tempMin: randomTemperatureMin,
        tempMax: randomTemperatureMax,
        windMax: randomWindMax,
        colorClass: this.getColorClassBasedOnIcon(randomIcon)
      };

      this.weatherData.push(weatherDay);
    }
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US');
  }

  getColorClassBasedOnIcon(icon: string): string {
    switch (icon) {
      case '☀️':
        return 'sunny';
      case '🌧️':
        return 'rainy';
      case '⛅':
        return 'cloudy';
      default:
        return '';
    }
  }
}