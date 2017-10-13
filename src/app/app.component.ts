import { Component } from '@angular/core';

declare function require(name:String);
var timeZone = require('moment-timeZone'); 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  timeData ="";
 selectedBt;
  time_zone(tz){
    this.selectedBt = tz;
    this.timeData = new Date().toLocaleString("en-US", { timeZone: tz });    
  }

  clearTime(clear) {
    this.selectedBt = clear;
    this.timeData = "";    
  }
}
