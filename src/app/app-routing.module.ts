import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { UserResolver } from './users/user.resolver';


const routes: Routes = [
  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: 'users/:id',
    component: UserComponent,
    resolve: [UserResolver]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
