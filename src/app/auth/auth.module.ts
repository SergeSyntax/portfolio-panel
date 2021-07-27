import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { HeaderLoginComponent } from './header-login/header-login.component';

@NgModule({
  declarations: [LoginComponent, SubmitButtonComponent, HeaderLoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // ng form / http client
    HttpClientModule,
    ReactiveFormsModule,
    // material
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ]
})
export class AuthModule {}
