import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
{ path:'', redirectTo:'/login', pathMatch:'full'},
{ path:'login', component: AuthComponent},
{path:'dashboard', component: PagesComponent,
children:[
  {
    path:'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  }
]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
