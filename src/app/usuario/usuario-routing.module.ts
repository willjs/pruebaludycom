import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { UsuarioDetailsComponent } from './usuario-details/usuario-details.component';



const routes: Routes = [
 {path:'usuarios', component: UsuarioListComponent},
 {path:'usuarioCreate', component: UsuarioCreateComponent},
 {path:'usuarioEdit/:id', component: UsuarioEditComponent},
 {path:'usuarioDetails/id', component: UsuarioDetailsComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UsuarioRoutingModule { }
