import { Injectable } from '@angular/core';

@Injectable()
export class PendoService {
  private readonly pendo: any;
  constructor() {
    this.pendo = window['pendo'];
  }

  initialize(options: any) {
    this.pendo.initialize(options);
  }
}
