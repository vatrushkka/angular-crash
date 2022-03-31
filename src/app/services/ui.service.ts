import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showTaskForm = false;
  private subject = new Subject<boolean>();

  constructor() { }

  toggleTaskForm(): void {
    this.showTaskForm = !this.showTaskForm;
    this.subject.next(this.showTaskForm);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }
}
