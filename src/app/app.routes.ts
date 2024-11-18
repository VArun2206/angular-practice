import { Routes } from '@angular/router';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { FormComponent } from './form/form.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectTasksComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'posts',
    component: PostsListComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
  },
];
