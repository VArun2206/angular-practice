import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TodoService } from '../todo.service';
import { DataTablesModule } from 'angular-datatables';
import { Config } from 'datatables.net';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, DataTablesModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  constructor(
    private todoService: TodoService,
    private toastr: ToastrService
  ) {}

  id!: string;
  todoList!: any;

  dtOptions: Config = {};

  fetchToDo() {
    this.todoService.getToDos().subscribe(
      (res: any) => {
        console.log(res);
        this.todoList = res;
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }

  deleteTask(id: string) {
    this.todoService.deleteToDos(id).subscribe(
      (res: any) => {
        console.log(res);
        this.ngOnInit();
        // this.toastr.success('To-do deleted');
        Swal.fire('Task deleted');
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.fetchToDo();
    this.dtOptions = {
      pagingType: 'full_members',
      pageLength: 10,
    };
  }
}
