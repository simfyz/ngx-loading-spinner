import {ComponentRef, Directive, ElementRef, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {NgxLoadingSpinnerComponent} from './ngx-loading-spinner.component';
import {NgxLoadingSpinnerConfigService} from './ngx-loading-spinner-config.service';
import {NgxLoadingSpinnerConfig} from './config';

@Directive({
  selector: '[ngx-loading]',
  providers: [NgxLoadingSpinnerConfigService]
})
export class NgxLoadingSpinnerDirective implements OnInit, OnChanges, OnDestroy {

  @Input('ngx-loading') show = false;
  @Input() config: NgxLoadingSpinnerConfig = {} as NgxLoadingSpinnerConfig;
  @Input() template: TemplateRef<any> | null = null;

  private spinnerComponentRef?: ComponentRef<NgxLoadingSpinnerComponent>;

  constructor(
    private el: ElementRef,
    private vcRef: ViewContainerRef,
    // private cfResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private configService: NgxLoadingSpinnerConfigService) {
  }

  ngOnInit() {
    this.setPosition();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['show']) {
      if (changes['show'].currentValue) {
        this.createSpinner();
      } else {
        this.destroySpinner();
      }
    }
  }

  ngOnDestroy() {
    this.destroySpinner();
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


    this.config = this.configService.normalizeConfigs(this.config);
    this.spinnerComponentRef.instance.config = this.config;
    this.spinnerComponentRef.instance.template = this.template;

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
