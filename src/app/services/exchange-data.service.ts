import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeDataService {

  constructor() { }

  public sidePanel = new BehaviorSubject({
    isOpen: false,
    width: '',
    component: '',
    componentData: ''
  });
  setSidePanel(data: any) {
    this.sidePanel.next(data);
  }

  public viewState = new BehaviorSubject('');
  setViewState(data: string) {
    this.viewState.next(data);
  }

  public mainMenuExpended = new BehaviorSubject(true);
  expandMainMenu(data: boolean) {
    this.mainMenuExpended.next(data);
  } 

}
