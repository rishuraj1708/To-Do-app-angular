import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasktodo: string = "";          // Input task title
  taskDate: Date = new Date();   // Default task date
  alltasks: Task[] = [];         // Array to store tasks

  // Method to create a new task
  createTask(): void {
    if (this.tasktodo) {
      let task: Task = {
        id: this.alltasks.length + 1, // Unique ID for each task
        title: this.tasktodo,
        completed: false,
        date: this.taskDate
      };
      this.alltasks.push(task); // Add task to the list
      console.log(this.alltasks); // Log the current tasks
      this.tasktodo = ""; // Clear the input field after adding the task
    }
  }

  // Method to delete a task by its index
  deleteTask(index: number): void {
    this.alltasks.splice(index, 1); // Remove the task from the array
  }
}

// Task interface to define the structure of a task
interface Task {
  id: number;
  title: string;
  completed: boolean;
  date: Date;
}
