import { LocationsComponent } from './pages/locations/locations.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
  path:'',
  component: LocationsComponent
},
  {
    path:'',
    component: InsightsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
