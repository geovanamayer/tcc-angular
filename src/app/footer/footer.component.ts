import { Component } from '@angular/core';
import { ContadorService } from '../service/contador.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private contadorService: ContadorService)
    {
      this.createUser();
  }

  createUser() {
    this.contadorService.addUser('Cristian')
    this.contadorService.addUser('Marina');
  }
}

