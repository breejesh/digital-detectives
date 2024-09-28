import { Component, Renderer2 } from '@angular/core';
import { CHALLENGE4_KEY, CHALLENGE5_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.css']
})
export class Challenge4Component {
  challenge4key = CHALLENGE4_KEY;
  challenge5key = CHALLENGE5_KEY;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    console.log('Not this tab..');
    this.renderer.addClass(document.body, 'glitch');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'glitch');
    try {
      (document.getElementById('heartbeat') as HTMLAudioElement).play();
    } catch (ex) {}
  }
}
