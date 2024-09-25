import { Component } from '@angular/core';
import { CHALLENGE4_KEY, CHALLENGE5_KEY } from 'src/app/app-routing-constants';

@Component({
  selector: 'app-challenge4',
  templateUrl: './challenge4.component.html',
  styleUrls: ['./challenge4.component.css']
})
export class Challenge4Component {
  challenge4key = CHALLENGE4_KEY;
  challenge5key = CHALLENGE5_KEY;
}
