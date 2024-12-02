import {AfterContentChecked, Component, TemplateRef, ViewChild} from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import {ANIMATION_TYPES, NgxLoadingSpinnerConfig} from '../../../ngx-loading-spinner';

import {ColorPickerModule} from 'ngx-color-picker';
import {NgxLoadingSpinnerDirective} from '../../../ngx-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [FormsModule, ColorPickerModule, NgxLoadingSpinnerDirective]
})
export class AppComponent implements AfterContentChecked {
  @ViewChild('customTemplate') customTemplate: TemplateRef<any> | null = null;
  show = false;
  borderRadius = 15;
  fontSize: any;
  template: TemplateRef<any> | null = null;
  initialized = false;

  loadingConfig: NgxLoadingSpinnerConfig = new NgxLoadingSpinnerConfig({
    animationType: ANIMATION_TYPES.cubeGrid,
    backdropColor: 'rgba(0, 0, 0, 0.3)',
    spinnerPosition: 'center',
    backdropBorderRadius: '15px',
    spinnerSize: 'md',
    spinnerFontSize: '',
    spinnerColor: '#fff'
  });

  btnLoadingConfig: NgxLoadingSpinnerConfig = new NgxLoadingSpinnerConfig({
    animationType: ANIMATION_TYPES.fadingCircle,
    backdropColor: 'transparent',
    spinnerPosition: 'left', spinnerFontSize: '',
    spinnerSize: 'xs',
    spinnerColor: 'green'
  });

  constructor() {
  }

  ngAfterContentChecked() {
    this.initialized = true;
  }

  showLoading() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 1500);
  }

  onChangeOptions(form: NgForm) {
    this.loadingConfig.backdropBorderRadius = form.value.backdropBorderRadius + 'px';
    this.loadingConfig.spinnerFontSize = form.value.spinnerFontSize + 'px';


    if (form.value.customTemplate) {
      this.template = this.customTemplate;
    } else {
      this.template = null;
    }
  }
}
