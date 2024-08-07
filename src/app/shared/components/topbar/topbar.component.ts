import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../../core/services/global/global.service';
import { WorflowService } from '../../../core/services/worflow/worflow.service';
import { Card } from '../../../core/models/worflow/worflow.model';
import { CommunicationService } from '../../../core/services/comunication-with-components/comunication-with-components.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent implements OnInit, OnDestroy {
  

  cards: Card[] = [];
  worflowId: number = 2;
  userId: number = 1;
  showInformationCard: boolean = false;
  private subscription: Subscription = new Subscription();

  public c1: number = 2;
  public c2: number = 2;
  public c3: number = 2;
  public c4: number = 2;

  constructor(
    private router: Router, 
    private GlobalService: GlobalService, 
    private _worflowServices: WorflowService,
    private _comunicationWithComponentsServices: CommunicationService
  ) {}

  ngOnInit(): void {
    this.GlobalService.getOriginalIndiciosProcesados().subscribe({
      next: res => {
        res.forEach(e => {
          this.c1 = this.c1 + 1;
        })
      }
    })
    
    this.GlobalService.getOriginalIndiciosTransito().subscribe({
      next: res => {
        res.forEach(e => {
          this.c2 = this.c2 + 1;
        })
      }
    })
    
    this.GlobalService.getOriginalDictamenesProceso().subscribe({
      next: res => {
        res.forEach(e => {
          this.c3 = this.c3 + 1;
        })
      }
    })

    this.GlobalService.getOriginalDictamenesTerminados().subscribe({
      next: res => {
        res.forEach(e => {
          this.c4 = this.c4 + 1;
        })
      }
    });

    this.subscription = this._comunicationWithComponentsServices.showInformationCard$.subscribe(value => {
      this.showInformationCard = value;
    });

    this.getInformationWorFlows();
  }

  toRoot() {
    this.router.navigateByUrl('/indicios-por-procesar');
  }

  getInformationWorFlows(): void {
    this._worflowServices.getInformationWorflowsTrays(this.worflowId, this.userId).subscribe( (result: Card[]) => {
      this.cards = result;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
