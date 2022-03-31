import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  formVisibility = false;
  buttonVisibility = true;

  subscription: Subscription;
  buttonSubscription: Subscription;

  constructor(
    private uiService: UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.formVisibility = value));
  }

  ngOnInit(): void {
    this.buttonSubscription = this.uiService.toggleButton().subscribe((value) => (this.buttonVisibility = value));
  }

  toggleAddTask(): void {
    this.uiService.toggleTaskForm();
  }
}
