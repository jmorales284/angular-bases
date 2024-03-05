import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>counter: {{counter}}</h3>
  <button (click)="subtractCounter(1)" >+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="subtractCounter(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter: number = 10;

  subtractCounter(value: number): void{
    this.counter+=value;
  }

  reset(): void{
    this.counter = 0;
  }

 }
