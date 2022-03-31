import {Component, Input, Output, OnInit} from '@angular/core';
import {Task} from '../../Task';
// import {TaskService} from '../../services/task.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleReminder = new EventEmitter();

  constructor(
    // private taskService: TaskService
  ) { }

  ngOnInit(): void {
  }

  onDelete(task): void {
    this.deleteTask.emit(task);
  }

  onToggleReminder(task): void {
    this.toggleReminder.emit(task);
  }
}
