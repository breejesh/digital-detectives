import { Component } from '@angular/core';
import { CHALLENGE2_KEY, CHALLENGE3_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-challenge2',
  templateUrl: './challenge2.component.html',
  styleUrls: ['./challenge2.component.css']
})
export class Challenge2Component {
  challenge2key = CHALLENGE2_KEY;
  challenge3key = CHALLENGE3_KEY;
}