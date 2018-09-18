import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  persona: any;
  constructor() { 
    this.persona = {
      nombre: 'Estela',
      apellido: 'Romero',
      ciudad: 'Manzanares el Real'
    }
  }

  ngOnInit() {
  }

}
