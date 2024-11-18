import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent implements OnInit {
  onSubmit() {
    console.log(this.addForm.value);
    this.addForm.reset();
  }
  addForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      firstname: [null, [Validators.required, Validators.minLength(4)]],
      lastname: [null, [Validators.required, Validators.minLength(4)]],
      middlename: [null, [Validators.required, Validators.minLength(1)]],
    });
  }

  get firstname() {
    return this.addForm.controls['firstname'];
  }
  get lastname() {
    return this.addForm.controls['lastname'];
  }
  get middlename() {
    return this.addForm.controls['middlename'];
  }
}
