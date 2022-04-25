import { TemplateRef } from '@angular/core';
import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() collection: string[] = [];

  @ContentChild('rowsTemplate') rowsTemplate: TemplateRef<any>;
  @ContentChild('cardsTemplate') cardsTemplate: TemplateRef<any>;

  mode = 'rows';

  constructor() { }

  setMode(str: string): void {
    this.mode = str;
  }

  isMode(mode: string): boolean {
    return this.mode === mode
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('Templates: ', this.rowsTemplate, this.cardsTemplate);
  }

}
