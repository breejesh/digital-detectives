import { HttpClientModule } from '@angular/common/http'; // <-- Import HttpClientModule
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Challenge1Component } from './components/challenge1/challenge1.component';
import { Challenge2Component } from './components/challenge2/challenge2.component';
import { HomeComponent } from './components/home/home.component';
import { TreasureHuntGuardService } from './services/treasure-hunt-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    Challenge1Component,
    HomeComponent,
    Challenge2Component,
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
