import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.css"],
})
export class AppComponent {
	title = "neptun2";
	public static linkenab : any;

	constructor(){
		AppComponent.linkenab=false;
	}
	get linkEnabled (){
		return AppComponent.linkenab;
	}
}
