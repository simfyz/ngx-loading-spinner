import {ComponentRef, DestroyRef, Directive, effect, ElementRef, inject, input, Renderer2, TemplateRef, ViewContainerRef} from '@angular/core';
import {NgxLoadingSpinnerComponent} from './ngx-loading-spinner.component';
import {NgxLoadingSpinnerConfigService} from './ngx-loading-spinner-config.service';
import {NgxLoadingSpinnerConfig} from './config';

@Directive({
  selector: '[ngx-loading]',
  providers: [NgxLoadingSpinnerConfigService],
  standalone: true
})
export class NgxLoadingSpinnerDirective {
  private el = inject(ElementRef);
  private vcRef = inject(ViewContainerRef);
  private renderer = inject(Renderer2);
  private configService = inject(NgxLoadingSpinnerConfigService);


  show = input(false, {alias: 'ngx-loading'});
  config = input<NgxLoadingSpinnerConfig>({} as NgxLoadingSpinnerConfig);
  template = input<TemplateRef<any> | null>(null);

  private spinnerComponentRef?: ComponentRef<NgxLoadingSpinnerComponent>;

  constructor() {
    effect(() => {
      if (this.show()) {
        this.createSpinner();
      } else {
        this.destroySpinner();
      }
    });

    inject(DestroyRef).onDestroy(() => this.destroySpinner());

    this.setPosition();
  }

  setPosition() {
    const elPosition = this.el.nativeElement.style.position;
    if (elPosition === 'relative' || elPosition === 'absolute') {
      return;
    }

    this.el.nativeElement.style.position = 'relative';
  }

  createSpinner() {
    this.spinnerComponentRef = this.vcRef.createComponent(NgxLoadingSpinnerComponent);


    const config = this.configService.normalizeConfigs(this.config());
    this.spinnerComponentRef.setInput('config', config);
    this.spinnerComponentRef.setInput('template', this.template());

    this.renderer.appendChild(
      this.vcRef.element.nativeElement,
      this.spinnerComponentRef.injector.get(NgxLoadingSpinnerComponent).vcRef.element.nativeElement
    );
  }

  destroySpinner() {
    if (this.spinnerComponentRef) {
      this.spinnerComponentRef.destroy();
    }
  }
}
