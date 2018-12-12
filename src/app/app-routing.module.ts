import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyComponentComponent } from './my-component/my-component.component';

const routes: Routes = [
  { path: 'my-component', component: MyComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
