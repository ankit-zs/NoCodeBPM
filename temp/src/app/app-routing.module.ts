import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditPageComponent } from './module/form/edit-page/edit-page.component';
import { PageNotFoundComponent } from './module/shared/page-not-found/page-not-found.component';
import { WorkflowFormComponent } from './workflow-form/workflow-form.component';
import { UserLoginComponent } from './module/user/user-login/user-login.component';

const routes: Routes = [
  {path: 'login', component: UserLoginComponent},
  {path: "home", component: HomeComponent},
  {path: "edit", component: EditPageComponent},
  {path: "form", component: WorkflowFormComponent},
  {path: "", component: HomeComponent},
  {path: "**", component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
