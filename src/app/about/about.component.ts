import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public parametro!: number;

  constructor(
    private router: ActivatedRoute
  ){
    this.parametro = this.router.snapshot.params["id"];
    console.log(this.parametro);
  }
}
