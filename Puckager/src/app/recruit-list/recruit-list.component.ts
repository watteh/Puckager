import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruit-list',
  templateUrl: './recruit-list.component.html',
  styleUrls: ['./recruit-list.component.css']
})
export class RecruitListComponent implements OnInit {

  recruits = [
    {
      first_name: 'David',
      last_name: 'Gwynn',
      position: 'Defense',
      number: 99
    },
    {
      first_name: 'Ryan',
      last_name: 'Watson',
      position: 'Center',
      number: 66
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
