import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = []; // Initialize with an empty array of tasks

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    // Generate a unique ID for the task (you can use a simple counter)
    task.id = this.tasks.length + 1;

    // Push the new task to the tasks array
    this.tasks.push(task);
  }

  updateTask(task: Task): void {
    // Find the task in the tasks array based on its ID
    const index = this.tasks.findIndex((t) => t.id === task.id);

    if (index !== -1) {
      // Update the task in the array
      this.tasks[index] = task;
    }
  }

  deleteTask(taskId: number): void {
    // Find the index of the task to delete based on its ID
    const index = this.tasks.findIndex((t) => t.id === taskId);

    if (index !== -1) {
      // Remove the task from the array
      this.tasks.splice(index, 1);
    }
  }
}
