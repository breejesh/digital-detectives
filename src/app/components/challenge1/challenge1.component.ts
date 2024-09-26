import { Component } from '@angular/core';
import { CHALLENGE1_KEY, CHALLENGE2_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.css']
})
export class Challenge1Component {
  challenge1key = CHALLENGE1_KEY;
  challenge2key = CHALLENGE2_KEY;
}
