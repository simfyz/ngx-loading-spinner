import {NgModule} from '@angular/core';
import {NgxLoadingSpinnerComponent} from './ngx-loading-spinner.component';
import {NgxLoadingSpinnerDirective} from './ngx-loading-spinner.directive';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    NgxLoadingSpinnerComponent,
    NgxLoadingSpinnerDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NgxLoadingSpinnerDirective
  ]
})
export class NgxLoadingSpinnerModule {
}
