import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainModuleComponent } from './components/main-module/main-module.component';

const routes: Routes = [
  {
    path: '',
    component: MainModuleComponent

  },
  {
    path: "**",
    redirectTo: '/',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
