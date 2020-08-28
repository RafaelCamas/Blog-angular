import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  arrPost: Post[];
  arrCategorias: Categoria[];
  idActual: number;

  constructor() {
    this.idActual = 0;
    this.arrPost = [
      new Post(
        1,
        'Crazy Baldhead / Running away - Live',
        'Bob Marley and The Wailers',
        'Álbum: Exodus - Deluxe edition',
        'https://images-na.ssl-images-amazon.com/images/I/61oWDLE5VVL._SL1400_.jpg',
        '3 de Junio de 1977',
        'Reggae',
        'Admin'
      ),
      new Post(
        2,
        'Castigo',
        'Leño',
        'Álbum: Leño',
        'https://img.discogs.com/aTmQ8P93TRhUdg7uTrLlpNsi95Q=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2661466-1455199666-4339.jpeg.jpg',
        '1979',
        'Rock duro',
        'Admin'
      ),
      new Post(
        3,
        'It Ain´t No Use',
        'The meters',
        'Álbum: Rejuvenation',
        'https://img.discogs.com/A1B4qYoePIWPy5SU1gXD18-jAIg=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-614494-1253353154.jpeg.jpg',
        'Julio de 1974',
        'Funk',
        'Admin'
      ),
      new Post(
        4,
        'Dogs',
        'Pink Floyd',
        'Álbum: Animals',
        'https://images-na.ssl-images-amazon.com/images/I/61HYrCLz0ZL._SX466_.jpg',
        '23 de Enero de 1977',
        'Art rock',
        'Admin'
      ),
      new Post(
        5,
        'Nocturne en mi bémol majeur opus 9 nº2: Ballade en sol mineur No.1',
        'Frédéric Chopin (Luis Fernando Pérez)',
        'Álbum: Chopin: Nocturnes (Volume 1)',
        'https://images-na.ssl-images-amazon.com/images/I/41dLYBjl%2BWL._SX342_QL70_ML2_.jpg',
        '2010',
        'Música clásica',
        'Admin'
      ),
    ];
    this.arrCategorias = [
      new Categoria(1, 'Reggae'),
      new Categoria(2, 'Funk'),
      new Categoria(3, 'Música clásica'),
      new Categoria(4, 'Rock(todos)'),
    ];
  }
  agregarPost(pPost): void {
    pPost.id = this.idActual;
    this.arrPost.push(pPost);
    this.idActual++;
  }
  getAllcategorias(): Categoria[] {
    return this.arrCategorias;
  }
  getAllPost(): Post[] {
    return this.arrPost;
  }
  getPostsByCategoria(pCategoria): Post[] {
    const arrPostCategoria = this.arrPost.filter(
      (post) => post.categoria === pCategoria
    );
    return arrPostCategoria;
  }
  getPostById(pId): Post[] {
    const arrPostId = this.arrPost.filter((post) => post.id === pId);
    return arrPostId;
  }
}
