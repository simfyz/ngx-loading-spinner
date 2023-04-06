export interface INgxLoadingSpinnerConfig {
  animationType: string,
  backdropColor: string,
  backdropBorderRadius?: string,
  spinnerColor: string,
  spinnerPosition: string,
  spinnerSize: string,
  spinnerFontSize: string
}

export class NgxLoadingSpinnerConfig implements INgxLoadingSpinnerConfig {
  animationType;
  backdropColor: string;
  spinnerColor: string;
  spinnerPosition: string;
  backdropBorderRadius?: string;
  spinnerSize: string;
  spinnerFontSize: string;

  constructor(private config: INgxLoadingSpinnerConfig) {
    this.animationType = config.animationType;
    this.backdropColor = config.backdropColor;
    this.spinnerColor = config.spinnerColor;
    this.spinnerPosition = config.spinnerPosition;
    this.backdropBorderRadius = config.backdropBorderRadius;
    this.spinnerSize = config.spinnerSize;
    this.spinnerFontSize = config.spinnerFontSize;
  }
}
