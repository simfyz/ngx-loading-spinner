type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '' | undefined;

export interface INgxLoadingSpinnerConfig {
  animationType: string,
  backdropColor: string,
  backdropBorderRadius?: string,
  spinnerColor: string,
  spinnerPosition: string,
  spinnerSize: SpinnerSize,
  spinnerFontSize: string
}

export class NgxLoadingSpinnerConfig implements INgxLoadingSpinnerConfig {
  animationType;
  backdropColor: string;
  spinnerColor: string;
  spinnerPosition: string;
  backdropBorderRadius?: string;
  spinnerSize: SpinnerSize;
  spinnerFontSize: string;

  constructor(config: INgxLoadingSpinnerConfig) {
    this.animationType = config.animationType;
    this.backdropColor = config.backdropColor;
    this.spinnerColor = config.spinnerColor;
    this.spinnerPosition = config.spinnerPosition;
    this.backdropBorderRadius = config.backdropBorderRadius;
    this.spinnerSize = config.spinnerSize;
    this.spinnerFontSize = config.spinnerFontSize;
  }
}
