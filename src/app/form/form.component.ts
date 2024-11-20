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
  addForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(4)]],
      lastName: [null, [Validators.required, Validators.minLength(4)]],
      middleName: [null, [Validators.required, Validators.minLength(1)]],
    });
  }

  get firstName() {
    return this.addForm.controls['firstName'];
  }
  get lastName() {
    return this.addForm.controls['lastName'];
  }
  get middleName() {
    return this.addForm.controls['middleName'];
  }
  onSubmit() {
    console.log(this.addForm.value);
    this.addForm.reset();
  }
}
