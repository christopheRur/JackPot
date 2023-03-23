import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-pot',
  templateUrl: './number-pot.component.html',
  styleUrls: ['./number-pot.component.css']
})
export class NumberPotComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.retrieveNumbers();
  }

  public retrieveNumbers(): number[] {

// Initialize an array of possible numbers
let possibleNumbers = Array.from({length: 71}, (_, i) => i);

// Shuffle the array using the Fisher-Yates algorithm
for (let i = possibleNumbers.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [possibleNumbers[i], possibleNumbers[j]] = [possibleNumbers[j], possibleNumbers[i]];
}

// Take the first six numbers from the shuffled array
let selectedNumbers = possibleNumbers.slice(0, 6);

// Make sure the last number is between 1 and 25
if (selectedNumbers[5] > 25 ) {
  selectedNumbers[5] = Math.floor(Math.random() * 25) + 1;
}

// Output the selected numbers
console.log(selectedNumbers);

return selectedNumbers;

  }





}
