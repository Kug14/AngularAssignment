import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PostinfocomponentComponent } from './postinfocomponent/postinfocomponent.component';

const routes: Routes = [
  // {path : "",redirectTo : "form",pathMatch : "full"},
 {path : "form",component : FormComponent},
 {path : "postinfo",component : PostinfocomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
