import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.css',
})
export class ProjectTasksComponent {
  constructor(private projectService: ProjectsService) {
    this.projects = this.projectService.taskList;
  }

  projects: any[] = [];
}
