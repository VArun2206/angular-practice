import { Routes } from '@angular/router';
import { ProjectTasksComponent } from './project-tasks/project-tasks.component';
import { FormComponent } from './form/form.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { TodoComponent } from './todo/todo.component';
import { AddToDOComponent } from './add-to-do/add-to-do.component';
import { EditToDoComponent } from './edit-to-do/edit-to-do.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'projects',
    component: ProjectTasksComponent,
    canActivate: [authGuard],
  },
  {
    path: 'form',
    component: FormComponent,
    canActivate: [authGuard],
  },
  {
    path: 'posts',
    component: PostsListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    canActivate: [authGuard],
  },
  {
    path: 'addpost',
    component: AddPostComponent,
    canActivate: [authGuard],
  },
  {
    path: 'todo',
    component: TodoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'addToDo',
    component: AddToDOComponent,
    canActivate: [authGuard],
  },
  {
    path: 'editToDo/:id',
    component: EditToDoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'viewToDo/:id',
    component: ViewTasksComponent,
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
