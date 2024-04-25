import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alunos = [
    "Matheus",
    "Carlos",
    "Cristian",
    "João"
  ]
  message!: string;

  receiveMessage(event: string) {
    this.message = event;
  }
}
