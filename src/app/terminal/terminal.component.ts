import { Component, Renderer, ViewChild, AfterViewInit, ElementRef } from "@angular/core";
import { TerminalService } from "../shared/terminal.service";

@Component({
	selector: "kk-terminal",
	styleUrls: ["./src/app/terminal/terminal.scss"],
	templateUrl: "./src/app/terminal/terminal.html"
})
export class TerminalComponent implements AfterViewInit {
	@ViewChild("terminalInput") input: ElementRef;

	private command: string;
	private renderer: Renderer;

	public constructor(renderer: Renderer) {
		this.renderer = renderer;
	}

	ngAfterViewInit(): void {
		this.renderer.invokeElementMethod(
			this.input.nativeElement, "focus"
		);
	}

	focus(event: Event): void {
		this.input.nativeElement.focus();
	}

	onSubmit(): void {
		console.log(this.command);
		this.command = "";
	}
}
