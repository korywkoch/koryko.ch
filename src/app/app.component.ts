import { Component } from "@angular/core";
import { TerminalComponent } from "./terminal/terminal.component";

@Component({
		directives: [TerminalComponent],
    selector: "app",
    styleUrls: ["./src/app/app.scss"],
    template: "<terminal></terminal>"
})
export class AppComponent {}
