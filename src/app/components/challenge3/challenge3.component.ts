import { Component } from '@angular/core';
import { CHALLENGE3_KEY, CHALLENGE4_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-challenge3',
  templateUrl: './challenge3.component.html',
  styleUrls: ['./challenge3.component.css']
})
export class Challenge3Component {
  challenge3key = CHALLENGE3_KEY;
  challenge4key = CHALLENGE4_KEY;
}
