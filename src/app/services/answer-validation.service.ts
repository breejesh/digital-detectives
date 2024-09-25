import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnswerValidationService {

  private apiUrl = 'https://dev-m5z2isz2zyy9dqt.api.raw-labs.com/digital-detectives/api/';

  constructor(private http: HttpClient) {}

  // Method to check the answer
  checkAnswer(questionKey: string, answer: string): Observable<any> {
    // Add the answer as a query parameter
    const params = new HttpParams().set('answer', answer);

    // Send a GET request with the answer
    return this.http.get(this.apiUrl + questionKey, { params });
  }
}
