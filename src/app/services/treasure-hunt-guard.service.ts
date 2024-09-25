import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TreasureHuntGuardService implements CanActivate {

  private completedChallenges: number = 0;

  constructor(private router: Router) {}

  setChallengeCompleted(challengeNumber: number) {
    if (challengeNumber > this.completedChallenges) {
      this.completedChallenges = challengeNumber;
    }
  }

  canActivate(route: any): boolean {
    const challengeNumber = parseInt(route.url[0].path.replace('challenge', ''));
    if (challengeNumber <= this.completedChallenges + 1) {
      return true;
    } else {
      this.router.navigate(['/challenge1']);
      return false;
    }
  }
}
