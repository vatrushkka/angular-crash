import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showTaskForm = false;
  private showButton = true;
  private buttonSubject = new Subject<boolean>();
  private subject = new Subject<boolean>();

  constructor() { }

  toggleTaskForm(): void {
    this.showTaskForm = !this.showTaskForm;
    this.subject.next(this.showTaskForm);
  }

  changeButtonVisibility(): void {
    this.showButton = !this.showButton;
    this.buttonSubject.next(this.showButton);
  }

  toggleButton(): Observable<boolean> {
    return this.buttonSubject.asObservable();
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
