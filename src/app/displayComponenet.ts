import { Component,Input } from '@angular/core';
@Component({
	selector: 'display',
	template: `
	<hr>
	<div class="container">
	<div classs="container-fluid">
	<h3>This is the selected value :{{content}}</h3>
	</div>
	</div>
	`,

})

export class DisplayComponent {
	@Input() content: string;
	constructor() {

	}
}
