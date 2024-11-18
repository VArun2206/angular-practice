import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProjectTasksComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'first-app';
  // dummy() {
  //   console.log('hi');
  // }
}
