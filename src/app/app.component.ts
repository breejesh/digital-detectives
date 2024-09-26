import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CHALLENGE1_KEY, CHALLENGE2_KEY, CHALLENGE3_KEY, CHALLENGE4_KEY, CHALLENGE5_KEY, WINNING_KEY } from './app-routing-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  progress = 0;
  questionNumber = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      this.updateProgress();
    });
  }

  updateProgress() {
    const url = window.location.href.split('/').pop();
    switch (url) {
      case '':
        this.progress = 0;
        this.questionNumber = '';
        break;
      case CHALLENGE1_KEY:
        this.progress = 20;
        this.questionNumber = '1';
        break;
      case CHALLENGE2_KEY:
        this.progress = 35;
        this.questionNumber = '2';
        break;
      case CHALLENGE3_KEY:
        this.progress = 50;
        this.questionNumber = '3';
        break;
      case CHALLENGE4_KEY:
        this.progress = 65;
        this.questionNumber = '4';
        break;
      case CHALLENGE5_KEY:
        this.progress = 80;
        this.questionNumber = '5';
        break;
      case WINNING_KEY:
        this.progress = 100;
        this.questionNumber = '';
        break;
      default:
        this.progress = 0;
        break;
    }
  }
}