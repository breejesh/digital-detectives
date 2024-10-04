import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnswerValidationService {

  private apiUrl = 'https://digital-detectives.azurewebsites.net/api/';

  constructor(private http: HttpClient) {}

  // Method to check the answer
  checkAnswer(questionKey: string, answer: string): Observable<any> {
    // Send a POST request with the answer
    return this.http.post(this.apiUrl + questionKey, { answer: answer });
  }

  heartbeat(): void {
    this.http.get(this.apiUrl + 'heartbeat').subscribe(
      (response) => {
        console.log('Heartbeat response:', response);
      },
      (error) => {
        console.error('Heartbeat error:', error);
      }
    );
  }
}
