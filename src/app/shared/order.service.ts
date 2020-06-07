import { Injectable } from '@angular/core';
import {FormControl,FormGroup} from "@angular/forms"
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
   form = new FormGroup({
     fullName: new FormControl(''),
     email: new FormControl(''),
     mobile: new FormControl('')

   });
}
