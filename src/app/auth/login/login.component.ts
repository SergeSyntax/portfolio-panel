import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  inProgress = false;
  subscriptions: Subscription[] = [];
  form = new FormGroup({
    email: new FormControl('', [
      Validators.email,
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(255)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(255)
    ])
  });
  constructor(
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    // redirect user if auth
    this.subscriptions.push(
      this.authService.authenticated$.subscribe(auth => {
        if (auth) this.navigateToDashboard();
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  onSubmit() {
    if (this.form.invalid) return;

    // if (!this.form.invalid) return;
    this.inProgress = false;
    this.subscriptions.push(
      this.authService.login(this.form.value).subscribe({
        next: () => {
          this.inProgress = false;
          this.navigateToDashboard();
        },
        error: ({ error }) => {
          this.inProgress = false;
          let message = error.status ? error.message : 'Network Connection Error';
          this.alertErrorMessage(message);
          this.form.setErrors({ credentials: true });
        }
      })
    );
  }

  isInvalid(controllerName: string): boolean {
    const formControl = this.form.get(controllerName);
    return formControl?.invalid || false;
  }

  alertErrorMessage(message: string): void {
    this._snackBar.open(message, undefined, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      panelClass: ['mat-toolbar', 'mat-warn'],
      duration: 3000
    });
  }

  /**
   * handle controller error message
   * @param controllerName
   * @returns
   */
  getErrorMessage(controllerName: string): string {
    const formControl = this.form.get(controllerName);

    if (formControl?.hasError('required')) return 'You must enter a value';
    if (formControl?.hasError('minlength'))
      return `Password length must be at least ${formControl?.errors?.minlength.requiredLength} characters long`;
    if (formControl?.hasError('maxlength'))
      return `Password length must be less than or equal to ${formControl?.errors?.maxlength.requiredLength} characters long`;
    if (formControl?.hasError('pattern')) return 'Invalid format';
    return formControl?.hasError('email') ? 'Not a valid email' : '';
  }

  navigateToDashboard() {
    this.router.navigateByUrl('dashboard');
  }
}
