import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponentComponent } from './components/blog-component/blog-component.component';
import { FormularioComponentComponent } from './components/formulario-component/formulario-component.component';
import { VistapostComponent } from './components/vistapost/vistapost.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'blog', component: BlogComponentComponent },
  { path: 'new', component: FormularioComponentComponent },
  { path: 'categoria/:categoria', component: BlogComponentComponent },
  { path: 'blog/:blogId', component: VistapostComponent },
  { path: '**', redirectTo: 'blog' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
