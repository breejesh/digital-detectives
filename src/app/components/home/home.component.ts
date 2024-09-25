import { Component, HostListener } from '@angular/core';
import { CHALLENGE1_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  prompt = "digital-detectives@home:~$";
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.startGame();
    }
  }

  startGame() {
    // Logic to navigate to the home or challenge component
    window.location.href = '/' + CHALLENGE1_KEY; // Adjust as needed
  }
}
