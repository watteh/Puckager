import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RecruitService } from '../../services/recruit.service';

@Component({
  selector: 'app-add-recruit',
  templateUrl: './add-recruit.component.html',
  styleUrls: ['./add-recruit.component.css']
})
export class AddRecruitComponent implements OnInit {

  public recruitGroup: FormGroup;

  constructor(private fb: FormBuilder, private bs: RecruitService) {
    this.createForm();
   }

   createForm() {
    this.recruitGroup = this.fb.group({
      firstName: [''],
      lastName: [''],
      contactNumber: [''],
      emailAddress: [''],
      birthYear: [''],
      graduationYear: [''],
      currentTeam: [''],
      jerseynumber: [''],
      position: [''],
      motherName: [''],
      fatherName: [''],
      status: [''],
      Date: ['']
    });
  }

  // tslint:disable-next-line:variable-name
  addRecruit(firstName, lastName, contactNumber, emailAddress, birthYear, graduationYear, currentTeam, jerseynumber,
             // tslint:disable-next-line:variable-name
             position, motherName, fatherName, status) {
      this.bs.addRecruit(firstName, lastName, contactNumber,
        emailAddress, birthYear, graduationYear, currentTeam, jerseynumber,
         position, motherName, fatherName, status, Date.now());
     }

  ngOnInit() {
  }

}
