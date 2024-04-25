import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContadorService } from '../service/contador.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  /** Input - Recebendo Informação do componente pai */
  @Input() message!: string[];
  /** Output - Criando um event emitter para enviar informação
   * para o componente pai */
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private contadorService: ContadorService) {
    console.log(this.message);
  }

  /** Metódo para enviar informaçoes para o pai */
  sendMessage() {
    this.contadorService.addUser('Matheus');
    this.contadorService.addUser('Anderson');
    this.messageEvent.emit('Passando valor para pai');
  }
}
