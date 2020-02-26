import { Component, ViewChild, ElementRef } from '@angular/core';

const SLIDES = [
	{
		title: 'Component',
		description: `
			Basically is a set of function ( implemented as a class with decoration ) which instructs NgModules render the associated HTML
		`,
	},
	{
		title: 'Template',
		description: `HTML files, also includes Angular Directives and Binding Markup`,
		bullets: [
			`Interpolation: Using expression '{{value}}' to interpolate value properties in component into HTML`
		]
	}
];

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  description = '<p><strong>HTML String</strong></p>'
  aLink = '<a href="http://localhost:4200">Angular App Local</a>'
  slides: Array<{}>
  @ViewChild('bindingInput') bindingInput: ElementRef

  constructor(){
  	console.log('constructor')
  	this.slides = SLIDES
  }
}
