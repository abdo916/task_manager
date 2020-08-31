import { Component, OnInit } from '@angular/core';
import {TasksService} from 'src/app/services/tasks.service'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public tasksSer: TasksService, public title: Title) { 
    this.title.setTitle('Task Manager')
  }

  ngOnInit(): void {
  }

  deleteTask(i) {
    this.tasksSer.deleteTask(i)
  }

}
