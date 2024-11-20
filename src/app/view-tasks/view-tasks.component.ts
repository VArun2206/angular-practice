import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.css',
})
export class ViewTasksComponent implements OnInit {
  id!: string;
  todo!: any;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchTask();
  }

  fetchTask() {
    this.todoService.getTaskById(this.id).subscribe(
      (res: any) => {
        console.log(res);
        this.todo = res;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }
}
