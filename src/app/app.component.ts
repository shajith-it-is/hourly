import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hourly';
  @ViewChild('spinner') spinner:any;
  finalValue!: number;
  workingHoursPerWeek: number = 40;

  valueChange(field: string, ele : any) {
    switch(field) {
      case 'ctc':
        this.finalValue=ele.value;
        break;
      case 'annual':
        this.finalValue=ele.value;
        break;
      case 'monthly':
        this.finalValue=ele.value*12;
        break;
      case 'weekly':
        this.finalValue=ele.value*52;
        break;
      case 'daily':
        this.finalValue=ele.value*52*5;
        break;
      case 'hourly':
        this.finalValue=ele.value*52*40;
        break;
    }
  }
}
