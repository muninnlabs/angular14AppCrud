import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WineListComponent } from './wine-list/wine-list.component';
import { WineFormComponent } from './wine-form/wine-form.component';
import { WineDetailsComponent } from './wine-details/wine-details.component';

const routes: Routes = [
  {path:'', component: WineListComponent},
  {path:'add-bottle', component: WineFormComponent},
  {path:'edit-bottle/:id', component: WineFormComponent},
  {path:'bottle-details/:id', component: WineDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
