import { Component, OnInit } from '@angular/core';
import { NumberPotComponent } from '../number-pot/number-pot.component';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.allPotNumbers();
    this.getLastNumber();

}
public getLastNumber(){
  let numb=  Math.floor(Math.random() * 25) + 1;
  return numb;
  }

 potNumb = new NumberPotComponent();

public allPotNumbers(): number[] {

  return this.potNumb.retrieveNumbers();

}}
