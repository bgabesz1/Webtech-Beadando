import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HallgatoListComponent } from "./components/hallgato-list/hallgato-list.component";
import { OktatoListComponent } from "./components/oktato-list/oktato-list.component";
import { TargyListComponent } from "./components/targy-list/targy-list.component";
import { LogInComponent } from "./components/log-in/log-in.component";

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "log-in" },
	{ path: "log-in", component: LogInComponent},
	{ path: "oktato-list", component: OktatoListComponent },
	{ path: "hallgato-list", component: HallgatoListComponent },
	{ path: "targy-list", component: TargyListComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
