export class Post {
  id: number;
  titulo: string;
  autor: string;
  texto: string;
  imagen: string;
  fecha: string;
  categoria: string;
  usuario: string;

  constructor(
    pId,
    pTitulo,
    pAutor,
    pTexto,
    pImagen,
    pFecha,
    pCategoria,
    pUsuario
  ) {
    this.id = pId;
    this.titulo = pTitulo;
    this.autor = pAutor;
    this.texto = pTexto;
    this.imagen = pImagen;
    this.fecha = pFecha;
    this.categoria = pCategoria;
    this.usuario = pUsuario;
  }
}
