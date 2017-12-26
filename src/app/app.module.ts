import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { JsonReaderComponent } from './json-reader/json-reader.component';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CdkTableModule } from '@angular/cdk/table';
import { ListTableComponent } from './list-table/list-table.component';



@NgModule({
  declarations: [
    AppComponent,
    JsonReaderComponent,
    ListTableComponent,

  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CdkTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
