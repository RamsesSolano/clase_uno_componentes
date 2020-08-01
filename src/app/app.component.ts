import { Component } from '@angular/core';
import { FormControl, NgForm,  Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-one-with-component';
  form: FormGroup;
  taskFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      task: this.taskFormControl
    });
  }

  tasks: Array<string> = [];

  addToTasks = (): void => {
    console.log( this.taskFormControl.value );
    this.tasks.push(this.taskFormControl.value);
  }
}
