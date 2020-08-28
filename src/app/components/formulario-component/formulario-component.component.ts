import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { Categoria } from '../../models/categoria';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-component',
  templateUrl: './formulario-component.component.html',
  styleUrls: ['./formulario-component.component.css'],
})
export class FormularioComponentComponent implements OnInit {
  arrCategorias: Categoria[];
  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.arrCategorias = this.servicioService.getAllcategorias();
  }
  agregarPost(pPost): void {
    pPost.id = this.idActual;
    this.arrPost.push(pPost);
    this.idActual++;
  }
}
