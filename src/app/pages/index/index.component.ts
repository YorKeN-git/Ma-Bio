import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  age: number;
  constructor() { }

  ngOnInit(): void {
    this.calculerAge();
  }

  calculerAge(){
    //Initialise notre varaible age de façon qu'elle donne l'age actuel automatiquement
    const anneeActuel = new Date().getFullYear();
    this.age = anneeActuel - 1989 ; 
  }

}
