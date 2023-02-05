import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odds=[];
  evens=[];

  onIntervalEvent(intervalValue: number){
    console.log(intervalValue)
    if(intervalValue % 2 == 0){
      this.evens.push(intervalValue);
    }else{
      this.odds.push(intervalValue);
    }
  }
}
