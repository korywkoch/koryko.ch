import { Component } from "@angular/core";
import { TerminalComponent } from "./terminal/terminal.component";

@Component({
		directives: [TerminalComponent],
    selector: "kk-app",
    styleUrls: ["./src/app/app.scss"],
    template: "<kk-terminal></kk-terminal>"
})
export class AppComponent {}
