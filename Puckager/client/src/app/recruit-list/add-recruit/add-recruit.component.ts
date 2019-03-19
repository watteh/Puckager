import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RecruitService } from '../../services/recruit.service';

@Component({
  selector: 'app-add-recruit',
  templateUrl: './add-recruit.component.html',
  styleUrls: ['./add-recruit.component.css']
})
export class AddRecruitComponent implements OnInit {


  constructor(private bs: RecruitService) {

   }





  ngOnInit() {
  }

}
