import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxLoadingSpinnerComponent} from './ngx-loading-spinner.component';
import {NgxLoadingSpinnerDirective} from './ngx-loading-spinner.directive';
import {CommonModule} from '@angular/common';
import {NgxLoadingSpinnerConfig} from './config';


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
  static forRoot(globalConfig: Partial<NgxLoadingSpinnerConfig>): ModuleWithProviders<NgxLoadingSpinnerModule> {
    return {
      ngModule: NgxLoadingSpinnerModule,
      providers: [{provide: 'loadingConfig', useValue: globalConfig}]
    };
  }
}
