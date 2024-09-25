import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericChallengeComponent } from './generic-challenge.component';

describe('GenericChallengeComponent', () => {
  let component: GenericChallengeComponent;
  let fixture: ComponentFixture<GenericChallengeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericChallengeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
