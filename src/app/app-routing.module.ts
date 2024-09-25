import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHALLENGE1_KEY, CHALLENGE2_KEY } from './app-routing-constants';
import { Challenge1Component } from './components/challenge1/challenge1.component';
import { Challenge2Component } from './components/challenge2/challenge2.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: CHALLENGE1_KEY, component: Challenge1Component },
  { path: CHALLENGE2_KEY, component: Challenge2Component },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
