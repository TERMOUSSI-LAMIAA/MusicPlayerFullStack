  import { CommonModule } from '@angular/common';
  import { Component, OnInit } from '@angular/core';
  import { FormBuilder,  FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';
  import { AuthService } from '../../../../core/services/auth.service';
  import { Router,RouterModule } from '@angular/router';

  @Component({
    selector: 'app-login',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
  })
  export class LoginComponent implements OnInit {
    loginForm!: FormGroup;

    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
    ) { }

    ngOnInit() {
      this.loginForm = this.fb.group({
        login: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

    onSubmit() {
      if (this.loginForm.valid) {
        this.authService.login(this.loginForm.value).subscribe(
          response => {
            console.log('Login successful:', response);
            localStorage.setItem('token', response.token); // Store token
            this.router.navigate(['/albums']);
          },
          error => console.error('Login failed:', error)
        );
      }
    }

  }
