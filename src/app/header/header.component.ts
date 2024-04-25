import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContadorService } from '../service/contador.service';

declare var $: any; // Declara a variável global $ do jQuery

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public users!: string[];

  constructor(
    private contadorService: ContadorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers(); // Carrega os usuários ao inicializar o componente
  }

  ngAfterViewInit(): void {
    this.initSlider(); // Inicializa o slider após a exibição do componente
  }

  getUsers() {
    this.users = this.contadorService.getUsers();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToAbout(id: number) {
    this.router.navigate(['/about', id]);
  }

  goToContact(id: number) {
    this.router.navigate(['/contact', id]);
  }

  public initSlider() {
    setTimeout(() => {
      $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Tempo em milissegundos
        arrows: true,
        dots: true
      });
    }, 1000); // Atraso de 1 segundo antes da inicialização
  }
}
