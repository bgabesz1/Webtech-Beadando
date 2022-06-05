import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from "@angular/material/dialog";
import { ApiService } from "src/app/service/api.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
	templateUrl: "./log-in.component.html",
	styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
createForm:FormGroup
userek : any =[];
  constructor(private router : Router, private apiService: ApiService, public dialog: MatDialog , private formBuilder:FormBuilder) {
    this.mainForm();
   }

  ngOnInit(): void {
  }

  register(){
    const dialogRef = this.dialog.open(RegisterComponent);
  }
  mainForm() {
    this.createForm = this.formBuilder.group({
        usrname: ["", [Validators.required]],
        psw: ["", [Validators.required]],
    });
}
  submitForm(){
    if(!this.createForm.valid){
      return false;
    }else{
      this.apiService.getUser().subscribe((users)=>{
        console.log(users);
        this.userek = users;
        this.userek.forEach(user => {
          if(user.usrname === this.createForm.value.usrname && user.psw === this.createForm.value.psw){
            AppComponent.linkenab = true;
            this.router.navigate(['/hallgato-list'])
          }
        });
      })
    }
}
}
