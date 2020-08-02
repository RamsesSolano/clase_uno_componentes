import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required
  ]);

  tasks: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addToTasks = (): void => {
    this.tasks.push(this.emailFormControl.value);
  }

  deleteElement = (index: number): void => {
    this.tasks.splice(index, 1);
  }
}
