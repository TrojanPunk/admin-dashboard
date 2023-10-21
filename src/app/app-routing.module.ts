import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SigninComponent } from './signin/signin.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';
import { ContentComponent } from './content/content.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : "",
    component : LayoutComponent,
    children: [
      {
        path: "", redirectTo: "dashboard",
        pathMatch:'full'
      },
      {
        path: "dashboard", 
        component: ContentComponent
      },
      {
        path: "users",
        component: UsersComponent,
        children: [
          {
            path: "user/:id",
            component: UserComponent
          }
        ]
      },
      {
        path: "profile",
        component: ProfileComponent
      }
    ]
  },
  {
    path : "signup",
    component : SignUpComponent
  },
  {
    path : "signin",
    component : SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
