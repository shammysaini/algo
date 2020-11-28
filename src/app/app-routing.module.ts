import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { SamComponent } from './sam/sam.component';
import { UapiComponent } from './uapi/uapi.component';



const routes: Routes = [
 {path:'',component:SamComponent},  
{ path:'home',component: AboutComponent},
{ path:'edit/:id',component: AboutComponent},
{ path:'profile',component: AboutComponent},
{ path:'production',component:AboutComponent},
{ path:'services',component:  AboutComponent},
{ path:'contact',component:  AboutComponent},
{ path:'sign',component: UapiComponent},
{ path:'contact',component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
