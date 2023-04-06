import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {NgxLoadingSpinnerModule} from '../../../ngx-loading-spinner/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    NgxLoadingSpinnerModule.forRoot({spinnerSize: ''})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
