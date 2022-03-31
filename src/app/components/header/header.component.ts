import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  formVisibility = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.formVisibility = value));
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleAddTask(): void {
    this.uiService.toggleTaskForm();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
