import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  time = new Date();
  pageNum : number = 1;
  pageTotal : number = 2; //total number of apps
  intervalId;
  

  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  toggleApp() {
    this.pageNum++;
    if(this.pageNum > this.pageTotal){
      this.pageNum = 1;
    }
  }
}
