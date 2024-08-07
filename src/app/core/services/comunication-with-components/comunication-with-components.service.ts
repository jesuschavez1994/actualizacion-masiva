import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private showInformationCardSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // Observable that components can subscribe to
  public showInformationCard$: Observable<boolean> = this.showInformationCardSubject.asObservable();

  // Method to update the value
  public setShowInformationCard(value: boolean): void {
    this.showInformationCardSubject.next(value);
  }
}
