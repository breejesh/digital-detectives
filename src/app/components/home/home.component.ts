import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CHALLENGE1_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  prompt = "digital-detectives@home:~$";

  constructor(private router: Router) {}

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.startGame();
    }
  }

  @HostListener('window:click', ['$event'])
  handleClickEvent(event: MouseEvent) {
    if (this.isMobileDevice()) {
      this.startGame();
    }
  }

  isMobileDevice(): boolean {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  startGame() {
    this.router.navigate([CHALLENGE1_KEY]);
  }
}
