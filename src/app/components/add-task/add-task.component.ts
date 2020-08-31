import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(public tasksSer: TasksService, public router: Router, public title: Title) {
    this.title.setTitle('Add New')
   }

  ngOnInit(): void {
  }

  saveTask(title, des) {
    this.tasksSer.saveTask(title.value, des.value);
    this.router.navigate(['/'])
  }

}
