import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      completed: false,
      editing: false,
    }
  ];

  editedTask: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
    editing: false
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    if (this.tasks.length === 0) {
      this.tasks = this.taskService.getTasks(); // Fetch tasks from the service only if the array is empty
    }
    // console.log(this.tasks, '>>>>>>>>>>')
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task);
    console.log('Task updated:', task);
  }

  deleteTask(taskId: number): void {
    // Find the index of the task with the specified ID
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      // Remove the task from the tasks array
      this.tasks.splice(index, 1);
      console.log('Task deleted with ID:', taskId);
    }
  }

  // editTask(task: Task): void {
  //   task.editing = !task.editing;
  // }


  editTask(task: Task): void {
    task.editing = true;
    this.editedTask = { ...task }; // Create a copy of the task being edited
  }


  saveTask(task: Task): void {
    task.editing = false;
    this.taskService.updateTask(task); // Update the task in the service
  }

  addTask(newTask: Task): void {
    // Assign a unique id to the new task (you can implement your own logic)
    newTask.id = this.generateUniqueId();
    this.tasks.push(newTask);
  }

  private generateUniqueId(): number {
    // Implement your own unique ID generation logic
    // For example, you can use a counter that increments for each new task
    // This is a basic example; you may want to use a more robust approach
    return this.tasks.length > 0 ? Math.max(...this.tasks.map((task) => task.id)) + 1 : 1;
  }
}

