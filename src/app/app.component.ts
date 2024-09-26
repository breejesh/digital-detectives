import { Component, OnInit, Renderer2 } from '@angular/core';
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

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      this.updateProgress();
    });
  }

  updateProgress() {
    const url = window.location.href.split('/').pop();
    console.log(url);
    switch (url) {
      case '':
        this.progress = 0;
        this.questionNumber = '';
        break;
      case CHALLENGE1_KEY:
        this.progress = 15;
        this.questionNumber = '1';
        break;
      case CHALLENGE2_KEY:
        this.progress = 30;
        this.questionNumber = '2';
        break;
      case CHALLENGE3_KEY:
        this.progress = 45;
        this.questionNumber = '3';
        break;
      case CHALLENGE4_KEY:
        this.progress = 60;
        this.questionNumber = '4';
        break;
      case CHALLENGE5_KEY:
        this.progress = 75;
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

    const progressBar = document.querySelector('.progress');
    const currentQuestion = document.getElementById('current-question');
    if (progressBar && currentQuestion) {
      this.renderer.setStyle(progressBar, 'width', `${this.progress}%`);
      this.renderer.setStyle(currentQuestion, 'left', `calc(${this.progress}% - 10px)`);
      this.renderer.setProperty(currentQuestion, 'textContent', this.questionNumber);
    }
  }
}