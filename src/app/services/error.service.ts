import { Injectable } from '@angular/core';
import { NavigateService } from './navigate.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private navigate: NavigateService) { }

  trazerErro(){
    this.navigate.navegarParaErro()
  }
}
