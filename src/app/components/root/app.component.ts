import { Component, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ExchangeDataService } from 'src/app/services/exchange-data.service';
import { ElementRendererDirective } from 'src/app/directives/element-renderer.directive';
import { DynamicElement } from 'src/app/interfaces/dynamic-element';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private exchangeData: ExchangeDataService,
    private loader: LoadingService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.initLoading();
    this.setSidePanelState();
  }

  isMainMenuOpen = false;
  isSidePanelOpen = false;
  mainMenuExpanded = true;
  loading = true;
  viewState: string;
  panelWidth = '300px';
  @ViewChild(ElementRendererDirective, { static: true }) elementRenderer: ElementRendererDirective;

  ngOnInit() {
    this.initViewState();
    this.initMainMenuExpansion();    
  }

  setSidePanelState() {
    this.exchangeData.sidePanel.subscribe((data) => {
      this.panelWidth = data.width;
      this.isSidePanelOpen = data.isOpen;
      this.loadComponent(data.component, data.componentData);
    });
  }

  loadComponent(component, data) {
    if (component) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
        component
      );
      const viewContainerRef = this.elementRenderer.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<DynamicElement>componentRef.instance).data = data;
    }
  }

  initViewState() {
    this.exchangeData.viewState.subscribe(data => {
      if(data) {
        this.isMainMenuOpen = true;
        this.viewState = data;
      } else {
        this.isMainMenuOpen = false;
        this.viewState = data;
      }
    })
  }

  initMainMenuExpansion() {
    this.exchangeData.mainMenuExpended.subscribe(data => {
      this.mainMenuExpanded = data;
    });
  }

  initLoading(){
    this.loader.isLoading.subscribe((state) => {
      this.loading = state;
    });
  }
}
