import {provideNgxLoadingSpinner} from '../../ngx-loading-spinner';
import {BrowserModule, bootstrapApplication} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import {AppComponent} from './app/app.component';
import {importProvidersFrom} from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, ColorPickerModule),
    provideNgxLoadingSpinner({spinnerSize: ''})
  ]
})
  .catch(err => console.error(err));
