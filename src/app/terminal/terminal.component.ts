import { Component, ViewChildren } from "@angular/core";

@Component({
    selector: "terminal",
    styleUrls: ["./src/app/terminal/terminal.scss"],
    templateUrl: "./src/app/terminal/terminal.html"
})
export class TerminalComponent {
	@ViewChildren("input") input;

	private command: string;

	public constructor() {
	}

	ngAfterViewInit(): void {
		this.input.first.nativeElement.focus();
	}

	focus(event: Event): void {
		console.log('focus');
		this.input.first.nativeElement.focus();
	}
}
