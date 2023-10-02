import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();


  newTask: Task = {
    id: 0, // You may use a suitable unique identifier mechanism
    title: '',
    description: '',
    completed: false,
    editing: false,
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.newTask.title.trim() === '') {
      // Prevent adding empty tasks
      return;
    }

    // this.taskService.addTask(this.newTask);
    this.taskAdded.emit(this.newTask);
    console.log('New task added:', this.newTask);
    this.resetForm();
  }

  private resetForm(): void {
    this.newTask = {
      id: 0,
      title: '',
      description: '',
      completed: false,
      editing: false,
    };
  }
}
