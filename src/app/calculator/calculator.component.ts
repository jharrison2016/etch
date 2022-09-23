import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  
  values: string[] = [];
  length: number = 0;
  command: string = "";
  sum: number = 0;
  counter: number = 12;

  constructor() { }

  ngOnInit(): void {
  }

  insertVal(val) {
    switch(val){
      case '=':
        this.command = "";
        for(let v in this.values){
          this.command += this.values[v];
          console.log(this.values[v]);
        }
        this.sum = eval(this.command);
        this.values=[];
        this.values= this.sum.toString().split('');
        this.length = this.values.length;
        break;
      
      case 'c':
        this.values = [];
        break;
      default:
        this.values.push(val);
        this.length = this.values.length;
        break;
    }
  }

}
