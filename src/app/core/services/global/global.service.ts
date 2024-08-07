import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carpeta, CarpetasRepositorio } from '../../models/Carpeta/DTO.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private originalDictamenesProceso$: BehaviorSubject<Carpeta[]> =
    new BehaviorSubject<Carpeta[]>([]);
  private originalDictamenesTerminados$: BehaviorSubject<Carpeta[]> =
    new BehaviorSubject<Carpeta[]>([]);
  private originalIndiciosProcesados$: BehaviorSubject<Carpeta[]> =
    new BehaviorSubject<Carpeta[]>([]);
  private originalIndiciosTransito$: BehaviorSubject<Carpeta[]> =
    new BehaviorSubject<Carpeta[]>([]);

  constructor() {}

  setRepositoryCarpetas(repository: CarpetasRepositorio) {
    this.setOriginalDictamenesProceso(repository.dictamenesProceso);
    this.setOriginalDictamenesTerminados(repository.dictamenesTerminados);
    this.setOriginalIndiciosProcesados(repository.indiciosProcesar);
    this.setOriginalIndiciosTransito(repository.indiciosTransito);
  }

  getOriginalDictamenesProceso(): Observable<Carpeta[]> {
    return this.originalDictamenesProceso$.asObservable();
  }

  setOriginalDictamenesProceso(carpetas: Carpeta[]) {
    this.originalDictamenesProceso$.next(carpetas);
  }

  getOriginalIndiciosTransito(): Observable<Carpeta[]> {
    return this.originalIndiciosTransito$.asObservable();
  }

  setOriginalIndiciosTransito(carpetas: Carpeta[]) {
    this.originalIndiciosTransito$.next(carpetas);
  }

  getOriginalIndiciosProcesados(): Observable<Carpeta[]> {
    return this.originalIndiciosProcesados$.asObservable();
  }

  setOriginalIndiciosProcesados(carpetas: Carpeta[]) {
    this.originalIndiciosProcesados$.next(carpetas);
  }

  getOriginalDictamenesTerminados(): Observable<Carpeta[]> {
    return this.originalDictamenesTerminados$.asObservable();
  }

  setOriginalDictamenesTerminados(carpetas: Carpeta[]) {
    this.originalDictamenesTerminados$.next(carpetas);
  }
}
