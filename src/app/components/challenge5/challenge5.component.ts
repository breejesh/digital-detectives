import { Component } from '@angular/core';
import { CHALLENGE5_KEY, WINNING_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-challenge5',
  templateUrl: './challenge5.component.html',
  styleUrls: ['./challenge5.component.css']
})
export class Challenge5Component {
  challenge5key = CHALLENGE5_KEY;
  winKey = WINNING_KEY;
}
