import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CHALLENGE1_KEY, CHALLENGE2_KEY } from 'src/app/app-routing-constants';
import { AnswerValidationService } from 'src/app/services/answer-validation.service';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.css']
})
export class Challenge1Component implements OnInit, AfterViewInit {
  prompt: string = 'digital-detectives@challenge1:~$ ';
  userInput: string = '';
  typingText: string = '';
  isAnswerCorrect: boolean | null = null;

  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('cursorElement') cursorElement!: ElementRef;

  constructor(private router: Router, private answerService: AnswerValidationService) {}

  ngOnInit(): void {
    this.typingText = ''; // Initialize typing text
  }

  ngAfterViewInit(): void {
    this.setFocus();
    this.updateCursorPosition();
  }

  @HostListener('window:focus')
  onWindowFocus() {
    this.setFocus();
  }

  setFocus() {
    this.inputElement.nativeElement.focus();
  }

  handleInput(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.isAnswerCorrect = null;
      this.typingText = 'Checking your answer...';
      this.checkAnswer();
      this.userInput = ''; // Clear input after submission
    } else {
      this.updateCursorPosition();
    }
  }

  updateCursorPosition() {
    setTimeout(() => {
      const inputWidth = this.userInput.length * 10; // Adjust cursor position based on font size
      this.cursorElement.nativeElement.style.left = `${inputWidth}px`;
    }, 0);
  }

  checkAnswer(): void {
    this.answerService.checkAnswer(CHALLENGE1_KEY, this.userInput).subscribe(response => {
      this.updateCursorPosition();
      if (response.status === 'Success') {
        this.isAnswerCorrect = true;
        this.typingText = 'Correct! Navigating to the next challenge...';
        setTimeout(() => {
          this.goToNextChallenge();
        }, 2000);
      } else {
        this.isAnswerCorrect = false;
        this.typingText = 'Incorrect answer. Please try again.';
      }
    }, error => {
      this.isAnswerCorrect = false;
      this.typingText = 'An error occurred. Please try again.';
    });
  }

  goToNextChallenge() {
    // Logic to navigate to the next challenge
    this.router.navigate(['/' + CHALLENGE2_KEY]); // Adjust this route as necessary
  }
}