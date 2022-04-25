import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { ListComponent } from './layout/list/list.component';
import { RowComponent } from './layout/row/row.component';
import { CardComponent } from './layout/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ListComponent,
    RowComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
