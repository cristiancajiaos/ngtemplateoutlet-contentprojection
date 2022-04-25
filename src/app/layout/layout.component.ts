import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  collection = ['Foo', 'Bar', 'Baz'];
  showList = true;

  constructor() { }

  ngOnInit(): void {
  }

}
