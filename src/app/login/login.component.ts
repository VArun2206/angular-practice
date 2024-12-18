import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  id!: string;
  email!: any;
  password!: any;

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private fbu: FormBuilder,
    private router: Router
  ) {}

  get useremail() {
    return this.loginForm.controls['name'];
  }
  get userpassword() {
    return this.loginForm.controls['password'];
  }

  ngOnInit(): void {
    this.loginForm = this.fbu.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    // console.log(this.users.value);

    // this.userService.getAllUsers().subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     let user: any = res.find((value: any) => {
    //       console.log(value);

    //       console.log(this.loginForm.value);
    //       console.log(this.loginForm.value.password);
    //       if (
    //         value.email === this.loginForm.value.name &&
    //         value.password === this.loginForm.value.password
    //       ) {
    //         console.log('i am In');
    //         return value;
    //       }
    //     });
    //     console.log(user);
    //     if (user) {
    //       console.log('User found');
    //       localStorage.setItem('user', JSON.stringify(user));
    //       this.toastr.success('Login Successfull');
    //       this.userService.user.set(user);
    //       this.router.navigateByUrl('/todo');
    //     } else {
    //       console.log('User not found');
    //       this.toastr.error('Invalid credentials');
    //     }
    //     this.loginForm.reset();
    //   },
    //   (error: Error) => {
    //     console.log(error);
    //     this.loginForm.reset();
    //   }
    // );

    // this.userService
    //   .getAllUsers()
    //   .pipe(
    //     map((res: any[]) =>
    //       res.find(
    //         (user) =>
    //           user.email === this.loginForm.value.name &&
    //           user.password === this.loginForm.value.password
    //       )
    //     )
    //   )
    //   .subscribe({
    //     next: (user) => {
    //       if (user) {
    //         console.log('User found');
    //         localStorage.setItem('user', JSON.stringify(user));
    //         this.toastr.success('Login Successful');
    //         this.userService.user.set(user);
    //         this.router.navigateByUrl('/todo');
    //       } else {
    //         console.log('User not found');
    //         this.toastr.error('Invalid credentials');
    //       }
    //       this.loginForm.reset();
    //     },
    //     error: (error: Error) => {
    //       console.error('Error fetching users:', error);
    //       this.toastr.error('An error occurred. Please try again later.');
    //       this.loginForm.reset();
    //     },
    //     complete: () => console.log('User fetch completed'),
    //   });

    this.userService
      .getAllUsers()
      .then((res: any) => {
        console.log(res);
        let user: any = res.find((value: any) => {
          console.log(value);

          console.log(this.loginForm.value);
          console.log(this.loginForm.value.password);
          if (
            value.email === this.loginForm.value.name &&
            value.password === this.loginForm.value.password
          ) {
            console.log('i am In');
            return value;
          }
        });
        console.log(user);
        if (user) {
          console.log('User found');
          localStorage.setItem('user', JSON.stringify(user));
          this.toastr.success('Login Successfull');
          this.userService.user.set(user);
          this.router.navigateByUrl('/todo');
        } else {
          console.log('User not found');
          this.toastr.error('Invalid credentials');
        }
        this.loginForm.reset();
      })
      .catch((error: Error) => {
        console.log(error);
      });
  }
}
