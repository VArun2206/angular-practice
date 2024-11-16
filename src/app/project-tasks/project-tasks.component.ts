import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.css',
})
export class ProjectTasksComponent {
  taskList = [
    {
      id: 1,
      name: 'Users',
      tasks: [
        {
          id: 1,
          taskTitle: 'Register1',
          priority: 'Medium',
          status: 'Pending',
          dueOn: 'Jun22,2024',
          createdOn: 'Jun18,2024',
        },
        {
          id: 2,
          taskTitle: 'Register2',
          priority: 'High',
          status: 'Pending',
          dueOn: 'Jun22,2024',
          createdOn: 'Jun18,2024',
        },
        {
          id: 3,
          taskTitle: 'Register3',
          priority: 'Low',
          status: 'Pending',
          dueOn: 'Jun22,2024',
          createdOn: 'Jun18,2024',
        },
        {
          id: 4,
          taskTitle: 'Register4',
          priority: 'Medium',
          status: 'Pending',
          dueOn: 'Jun22,2024',
          createdOn: 'Jun18,2024',
        },
      ],
    },
    {
      id: 2,
      name: 'Books',
      tasks: [
        {
          id: 1,
          taskTitle: 'List All Books',
          priority: 'High',
          status: 'Pending',
          dueOn: 'Nov 15,2024',
          createdOn: 'Nov 11,2024',
        },
        {
          id: 2,
          taskTitle: 'View Book',
          priority: 'High',
          status: 'Pending',
          dueOn: 'Nov 15,2024',
          createdOn: 'Nov 11,2024',
        },
        {
          id: 3,
          taskTitle: 'Add Book',
          priority: 'Medium',
          status: 'Pending',
          dueOn: 'Nov 15,2024',
          createdOn: 'Nov 11,2024',
        },
        {
          id: 4,
          taskTitle: 'Update Book',
          priority: 'Low',
          status: 'Pending',
          dueOn: 'Nov 15,2024',
          createdOn: 'Nov 11,2024',
        },
      ],
    },
  ];
}
