import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHALLENGE1_KEY, CHALLENGE2_KEY, CHALLENGE3_KEY, CHALLENGE4_KEY, CHALLENGE5_KEY, WINNING_KEY } from './app-routing-constants';
import { Challenge1Component } from './components/challenge1/challenge1.component';
import { Challenge2Component } from './components/challenge2/challenge2.component';
import { Challenge3Component } from './components/challenge3/challenge3.component';
import { Challenge4Component } from './components/challenge4/challenge4.component';
import { Challenge5Component } from './components/challenge5/challenge5.component';
import { HomeComponent } from './components/home/home.component';
import { WinnerComponent } from './components/winner/winner.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: CHALLENGE1_KEY, component: Challenge1Component },
  { path: CHALLENGE2_KEY, component: Challenge2Component },
  { path: CHALLENGE3_KEY, component: Challenge3Component },
  { path: CHALLENGE4_KEY, component: Challenge4Component },
  { path: CHALLENGE5_KEY, component: Challenge5Component },
  { path: WINNING_KEY, component: WinnerComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
