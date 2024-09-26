import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TreasureHuntGuardService } from './services/treasure-hunt-guard.service';
import { GenericChallengeComponent } from './components/generic-challenge/generic-challenge.component';
import { Challenge1Component } from './components/challenge1/challenge1.component';
import { Challenge2Component } from './components/challenge2/challenge2.component';
import { Challenge3Component } from './components/challenge3/challenge3.component';
import { Challenge4Component } from './components/challenge4/challenge4.component';
import { Challenge5Component } from './components/challenge5/challenge5.component';
import { WinnerComponent } from './components/winner/winner.component';

@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    HomeComponent,
    Challenge2Component,
    GenericChallengeComponent,
    Challenge3Component,
    Challenge4Component,
    Challenge5Component,
    WinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [TreasureHuntGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
