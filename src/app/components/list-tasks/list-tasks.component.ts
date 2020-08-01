import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.scss']
})
export class ListTasksComponent implements OnInit {

  @Input() tasks: Array<string>;

  constructor() { }

  ngOnInit(): void {
  }

}
