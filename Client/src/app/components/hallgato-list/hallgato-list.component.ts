import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DeleteRentableComponent } from "src/app/dialog/delete-rentable/delete-rentable.component";
import { ApiService } from "src/app/service/api.service";
import { HallgatoCreateComponent } from "../hallgato-create/hallgato-create.component";
import { HallgatoEditComponent } from "../hallgato-edit/hallgato-edit.component";

/*interface TargyErdemjegy {
	targynev: string;
	erdemjegy: string;
}*/

@Component({
	selector: "app-hallgato-list",
	templateUrl: "./hallgato-list.component.html",
	styleUrls: ["./hallgato-list.component.css"],
})
export class HallgatoListComponent implements OnInit {
	Hallgatok: any = [];
	//Targyerdemjegy: TargyErdemjegy[] = [];
	Targyak: any = [];
	panelOpenState = false;
	constructor(private apiService: ApiService, public dialog: MatDialog) {}
	a : number;

	ngOnInit(): void {
		this.readData();
	}

	avarage (){
		
	}
	readData() {
		this.apiService.getHallgatok().subscribe((data) => {
			this.Hallgatok = data;
			console.log(this.Hallgatok);
		});
		this.apiService.getTargyak().subscribe((data) => {
			this.Targyak = data;
		});
	}

	createHallgato() {
		const dialogRef = this.dialog.open(HallgatoCreateComponent);

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.readData();
				console.log(this.Hallgatok);
			}
		});
	}

	deleteHallgato(hallgato, index) {
		const dialogRef = this.dialog.open(DeleteRentableComponent);

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.apiService
					.deleteHallgato(hallgato._id)
					.subscribe((data) => {
						this.Hallgatok.splice(index, 1);
					});
			}
		});
	}

	avgcalcul(hallgato){
		var sum : number = 0;
		var i : number = 0;
		hallgato.targyakjegyel.forEach(jegy => {
			sum+=jegy
			i++
		});
		sum=sum/i
	}

	editHallgato(hallgato) {
		const dialogRef = this.dialog.open(HallgatoEditComponent, {
			data: { myobj: hallgato, index: hallgato._id },
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result) {
				this.readData();
			}
		});
	}
}
