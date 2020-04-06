import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

   private buildForm() {
     this.form = this.formBuilder.group({
       email: ['', [Validators.required]],
       password: ['', [Validators.required]],
     });
   }


   login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.loginUser(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => { alert('tu correo o passport no es valido');
    });
    }
  }



}
