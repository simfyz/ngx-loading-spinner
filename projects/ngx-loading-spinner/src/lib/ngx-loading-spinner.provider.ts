import {makeEnvironmentProviders} from '@angular/core';
import {NgxLoadingSpinnerConfigService} from './ngx-loading-spinner-config.service';
import {NgxLoadingSpinnerConfig} from './config';

export function provideNgxLoadingSpinner(globalConfig: Partial<NgxLoadingSpinnerConfig>) {
    return makeEnvironmentProviders([
        NgxLoadingSpinnerConfigService,
        {provide: 'loadingConfig', useValue: globalConfig}
    ]);
}
