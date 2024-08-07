import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carpeta } from '../../models/Carpeta/DTO.model';
import { PaginatorState } from 'primeng/paginator';

@Injectable({
  providedIn: 'root',
})
export class CarpetaService {
  private carpetas$: BehaviorSubject<Carpeta[]> = new BehaviorSubject<
    Carpeta[]
  >([]);
  private paginatorState$: BehaviorSubject<PaginatorState> =
    new BehaviorSubject<PaginatorState>({
      page: 0,
      first: 0,
      rows: 1,
      pageCount: Infinity,
    });

  constructor() {}

  getCarpetas(): Observable<Carpeta[]> {
    return this.carpetas$.asObservable();
  }

  setCarpetas(carpetas: Carpeta[]) {
    this.carpetas$.next(carpetas);

    this.setPaginatorState({...this.paginatorState$.getValue(), pageCount: carpetas.length})
  }

  setPaginatorState($event: PaginatorState) {
    this.paginatorState$.next($event);
  }

  getPaginatorState(): Observable<PaginatorState> {
    return this.paginatorState$.asObservable();
  }
}
