import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ApiService } from "src/app/service/api.service";
import { FormErrorMatcherService } from "src/app/service/form-error-matcher.service";

@Component({
  selector: 'app-register',
	templateUrl: "./register.component.html",
	styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  createForm: FormGroup;

	matcher = new FormErrorMatcherService();

	constructor(
		private formBuilder: FormBuilder,
		private apiService: ApiService
	) {
		this.mainForm();
	}

	get myForm() {
		return this.createForm.controls;
	}

	ngOnInit(): void {}

	mainForm() {
		this.createForm = this.formBuilder.group({
			usrname: ["", [Validators.required, Validators.min(3)]],
			psw: ["", [Validators.required, Validators.min(3)]],
      email: ["", [Validators.required, Validators.min(3)]],
		});
	}

	submitForm() {
		if (!this.createForm.valid) {
			return false;
		} else {
			this.apiService.createUser(this.createForm.value).subscribe(
				() => {
					console.log("user successfully created!!");
				},
				(error) => {
					console.log(error);
				}
			);
		}
	}
}
