import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnswerValidationService {

  private apiUrl = 'https://aebf25e7-203c-47af-b14e-3a3e5ff30775.mock.pstmn.io/digital-detectives/api/';

  constructor(private http: HttpClient) {}

  // Method to check the answer
  checkAnswer(questionKey: string, answer: string): Observable<any> {
    // Send a POST request with the answer
    return this.http.post(this.apiUrl + questionKey, { answer: answer });
  }
}
