import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent {
  
  constructor(private renderer: Renderer2) {}

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
    this.renderer.removeClass(document.body, 'winner-background');
    window.location.href = '/';
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'winner-background');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'winner-background');
  }
}
