import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-power-boost-calculator',
  template: `
    <!-- <form [formGroup]="form"> -->
    <h2>Power Boost Calculator</h2>
    <label for="power-input">Normal power: </label>
    <input id="power-input" type="text" formControlName="power">
    <label for="boost-input">Boost factor: </label>
    <input id="boost-input" type="text" formControlName="factor">
    <p>
      <!-- Super Hero Power: {{power | exponentialStrength: factor}} -->
    </p>
    <!-- </form> -->
  `,
  styles: ['input {margin: .5rem 0;}']
})
export class PowerBoostCalculatorComponent implements OnInit {
  power = 5;
  factor = 1;
  form1: FormGroup;
  ngOnInit(): void {
    this.power = 5;
    this.factor = 1;
    this.form1= new FormGroup({
        power: new FormControl(this.power ),
        factor: new FormControl(this.factor)
        });    
  }
  
}