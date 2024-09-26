import { AfterViewInit, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnswerValidationService } from 'src/app/services/answer-validation.service';

@Component({
  selector: 'app-generic-challenge',
  templateUrl: './generic-challenge.component.html',
  styleUrls: ['./generic-challenge.component.css']
})
export class GenericChallengeComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() prompt: string = 'digital-detectives@challenge:~$ ';
  @Input() challengeKey: string = '';
  @Input() nextChallengeRoute: string = '';
  userInput: string = '';
  typingText: string = '';
  isAnswerCorrect: boolean | null = null;

  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild('cursorElement') cursorElement!: ElementRef;
  private clickListener: (() => void) | undefined;

  constructor(private router: Router, private answerService: AnswerValidationService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.typingText = ''; // Initialize typing text
  }

  ngAfterViewInit(): void {
    this.setFocus();
    this.updateCursorPosition();
    this.clickListener = this.renderer.listen('document', 'click', () => {
      this.setFocus();
    });
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
    this.updateCursorPosition();
    this.answerService.checkAnswer(this.challengeKey, this.userInput).subscribe(response => {
      if (response.status === 'Success') {
        this.isAnswerCorrect = true;
        this.typingText = 'Correct! Navigating to the next challenge...';
        setTimeout(() => {
          this.goToNextChallenge();
        }, 1000);
      } else {
        this.isAnswerCorrect = false;
        this.typingText = 'Incorrect answer. Please try again.';
      }
    }, error => {
      if (error?.error?.error?.name === 'mockRequestNotFoundError') {
        this.isAnswerCorrect = false;
        this.typingText = 'Incorrect answer. Please try again.';
      } else {
        this.isAnswerCorrect = false;
        this.typingText = 'An error occurred. Please try again.';
      }
    });
  }

  goToNextChallenge() {
    this.router.navigate([this.nextChallengeRoute]);
  }

  ngOnDestroy(): void {
    if (this.clickListener) {
      this.clickListener();
    }
  }
}