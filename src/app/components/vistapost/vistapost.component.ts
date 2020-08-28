import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { ServicioService } from '../../services/servicio.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vistapost',
  templateUrl: './vistapost.component.html',
  styleUrls: ['./vistapost.component.css'],
})
export class VistapostComponent implements OnInit {
  arrPost: Post[];

  constructor(
    private servicioService: ServicioService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.arrPost = this.servicioService.getPostById(Number(params.postId));
    });
  }
}
