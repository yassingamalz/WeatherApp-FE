import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  cityName: string = 'Your City';
  currentDay: string = 'Monday'; // Replace with actual current day logic
  maxTempNextWeek: number = 30; // Replace with actual max temp logic
  minTempNextWeek: number = 15; // Replace with actual min temp logic

}
