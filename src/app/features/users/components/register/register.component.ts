import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { Router } from 'express';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSubmitting = false;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
      active: [true], 
      roles: this.fb.array([this.createRole()]) 
    });
  }

  createRole() {
    return this.fb.group({
      name: [{ value: 'USER', disabled: true }] // Default role set to USER
    });
  }

  get roles(): FormArray {
    return this.registerForm.get('roles') as FormArray;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isSubmitting = true;
      console.log(this.registerForm.value); // Simulate form submission
      // Here you would typically call your service to handle registration
      // Reset form or handle success/error based on response
    }
  }
}
