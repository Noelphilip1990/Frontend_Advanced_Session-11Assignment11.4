import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector:'select-app',
	template:`
	<h1>Angular 2 select and Inject Value</h1>
	<h4>Assignment 11.4</h4>
<form style="padding:18px;max-width:800px;"
    [formGroup]="form">
	
    <div style="margin:5px 0;font-weight:600;">Single select example</div>
    <ng-select
		  [options]="options0"
		  
		  placeholder="Select one"
      formControlName="selectSingle"
		  [allowClear]="true"
      (opened)="onSingleOpened()"
      (closed)="onSingleClosed()"
      (selected)="onSingleSelected($event)"
      (deselected)="onSingleDeselected($event)">
	</ng-select>
    
    <div style="margin:10px 0 20px 0;color:#666;font-size:11pt;font-style:italic;">
	    Selected option id: {{form.value['selectSingle']}}
    </div>

    <div>Events:</div>
    <pre #preSingle>{{logSingleString}}</pre>

    <hr style="margin: 18px 0;">

    
</form>
<display [content]='title'></display>`

	//directives: [ChildComponent]
})
export class SelectComponent implements OnInit
{
	title: string;
	form: FormGroup;

	
	options0: Array<any> = [];
	
	selection: Array<string>;

	@ViewChild('preSingle') preSingle;


	logSingleString: string = '';
	

	constructor() {

		let numOptions = 100;
		let opts = new Array(numOptions);
		let chrs:Array<any>=['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
    'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
    'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
    'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
    'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
    'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
    'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
    'Zagreb', 'Zaragoza', 'Łódź'];
		let list: any = [
			{ id: 1, name: "Parameter" },
			{ id: 2, name: "lookup" },
			{ id: 3, name: "Dimension" },
			{ id: 4, name: "integration" },
			{ id: 5, name: "currency" }
		];

		for (let i = 0; i < list.length; i++) {
			opts[i] = {
				value: list[i].id,
				label: list[i].name
			};
		}

		this.options0 = opts.slice(0);
		
	}
	
	ngOnInit() {
		this.form = new FormGroup({});
		this.form.addControl('selectSingle', new FormControl(''));
	}

	onSingleOpened() {
		this.logSingle('- opened');
	}

	onSingleClosed() {
		this.logSingle('- closed');
	}

	onSingleSelected(item) {
		this.logSingle('- selected (value: ' + item.value + ', label:' +
			item.label + ')');
		this.title = 'id:'+item.value+', Name:'+item.label;
	}

	onSingleDeselected(item) {
		this.logSingle('- deselected (value: ' + item.value + ', label:' +
			item.label + ')');
	}

	private logSingle(msg: string) {
		this.logSingleString += msg + '\n';

		// Let change detection do its work before scrolling to div bottom.
		setTimeout(() => {
			this.scrollToBottom(this.preSingle.nativeElement);
		});
	}

	

	private scrollToBottom(elem) {
		elem.scrollTop = elem.scrollHeight;
	}
}