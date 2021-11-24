import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pappcorn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  formGroup: FormGroup;
  constructor(formBuild: FormBuilder) {
    this.formGroup = formBuild.group({
      outline: ['', Validators.required],
    });
  }
}
