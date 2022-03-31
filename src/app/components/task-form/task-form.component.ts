import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  @Output() addNewTask: EventEmitter<Task> = new EventEmitter();

  formVisibility: boolean;
  subscription: Subscription;

  text: string;
  day: string;
  reminder = false;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.formVisibility = value);
  }

  ngOnInit(): void {
  }

  clearForm(): void {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }

  onSubmit(): void {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };

    this.addNewTask.emit(newTask);

    this.clearForm();
  }
}
