import { Injectable, inject } from '@angular/core';
import {NgxLoadingSpinnerConfig} from './config';
import {ANIMATION_TYPES} from './animation-types';
import {findIndex, objectValues} from './utils';

@Injectable()
export class NgxLoadingSpinnerConfigService {
  private readonly loadingConfig = inject<Partial<NgxLoadingSpinnerConfig>>('loadingConfig' as never, { optional: true });


  private readonly defaultConfig: NgxLoadingSpinnerConfig;

  constructor() {
    this.defaultConfig = new NgxLoadingSpinnerConfig({
      animationType: this.loadingConfig?.animationType || ANIMATION_TYPES.fadingCircle,
      backdropColor: this.loadingConfig?.backdropColor || 'rgba(0, 0, 0, 0.3)',
      spinnerColor: this.loadingConfig?.spinnerColor || '#fff',
      spinnerPosition: this.loadingConfig?.spinnerPosition || 'center',
      backdropBorderRadius: this.loadingConfig?.backdropBorderRadius || '0',
      spinnerSize: this.loadingConfig?.spinnerSize || 'md',
      spinnerFontSize: this?.loadingConfig?.spinnerFontSize || ''
    });
  }

  normalizeConfigs(config: NgxLoadingSpinnerConfig) {
    if (!config) {
      config = this.defaultConfig;
      return config;
    }

    if (config.spinnerSize === '' && config.spinnerFontSize === '') {
      config.spinnerFontSize = '1rem';
    }

    for (const option in this.defaultConfig) {
      // @ts-ignore
      if (!config[option]) {
        // @ts-ignore
        config[option] = this.defaultConfig[option];
      }
    }

    if (findIndex(objectValues(ANIMATION_TYPES), config['animationType']) === -1) {
      config['animationType'] = ANIMATION_TYPES.fadingCircle;
    }

    return config;
  }
}
