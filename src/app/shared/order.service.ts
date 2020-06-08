import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private firebase: AngularFireDatabase) { }
  orderList: AngularFireList<any>;
   form = new FormGroup({
     $key: new FormControl(null),
     fullName: new FormControl('',Validators.required),
     email: new FormControl('',Validators.email),
     mobile: new FormControl('',[Validators.required,Validators.minLength(10)])

   });

   getTotalorder() {
     this.orderList= this.firebase.list('cowmilkorders');
     return this.orderList.snapshotChanges();
   }

   insertOrder(cowmilkorders){
     this.orderList.push({
       fullName: cowmilkorders.fullName,
       mobile: cowmilkorders.mobile
     });
   }
}
