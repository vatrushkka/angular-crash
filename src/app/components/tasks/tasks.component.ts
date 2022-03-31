import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  onDeleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter((t: Task) => t.id !== task.id));
  }

  onToggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }

  addTask(newTask): void {
    this.taskService.addTask(newTask).subscribe(task => this.tasks.push(task));
  }
}
