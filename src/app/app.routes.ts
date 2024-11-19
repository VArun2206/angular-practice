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
  {
    path: 'addpost',
    component: AddPostComponent,
  },
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'addToDo',
    component: AddToDOComponent,
  },
  {
    path: 'editToDo/:id',
    component: EditToDoComponent,
  },
  {
    path: 'viewToDo/:id',
    component: ViewTasksComponent,
  },
];
