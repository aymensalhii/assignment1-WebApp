import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  subject = new Subject();
  
  collapsed: boolean = false;
  
  setMessage(msg: any) {
    this.subject.next(msg);
  }

  getMessage() {
    return this.subject.asObservable();
  }
  constructor() { }
}
