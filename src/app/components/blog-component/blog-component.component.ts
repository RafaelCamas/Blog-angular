import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { ServicioService } from '../../services/servicio.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.css'],
})
export class BlogComponentComponent implements OnInit {
  arrPosts: Post[];
  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.arrPosts = this.servicioService.getAllPost();
  }
}
