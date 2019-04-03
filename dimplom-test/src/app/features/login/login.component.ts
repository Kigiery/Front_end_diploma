import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loginSuccess = undefined;
  constructor(
    private authService: AuthService,
    private router: Router,
    formBuilder: FormBuilder
    ) {
      this.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
      });
    }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.auth({
        username: this.loginForm.controls['username'].value,
        password: this.loginForm.controls['password'].value,
      }).subscribe({
        next: user => {
          this.router.navigate(['']);
        },
        error: error => this.loginSuccess = false
      });
    }
  }

}
