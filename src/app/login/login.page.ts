import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';

import { AuthenticationService } from '../../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form: FormGroup;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private storage: Storage,
    private authentication: AuthenticationService
  ) {

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      servidor: ['', Validators.required],
      usuario: ['suporte', Validators.required],
      senha: ['P@ssw0rdRG', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authentication.login('peter@klaven', 'cityslicka')
      .subscribe(
        data => {       
          this.router.navigate([this.returnUrl]);
        },
        err => {
          console.log(err);
        })
  }

}
