import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { SubmitService } from './submit.service';

@Injectable()
export class SubmitGuard implements CanActivate {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private submitservice: SubmitService
  ) {}

  isValid: Boolean = false;

  canActivate() {

    this.submitservice.getValidation().subscribe(res => {
    
    this.isValid = res
    })

    if(this.isValid) {
      return true
    }
    else if(!this.isValid || this.isValid === false) {
      // this.router.navigateByUrl('/404')
      return true
    }
  }
}