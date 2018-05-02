import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubmitService {
  isValid = new Subject<any>()

  constructor() {
    
  }
  sendValidation(f) {
    this.isValid.next(f.valid)
  }
  
  getValidation() {
    return this.isValid

  }

}