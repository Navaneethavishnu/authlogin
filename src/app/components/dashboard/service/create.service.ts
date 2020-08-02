import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class CreateService {

  constructor(public fireservices:AngularFirestore) { }
  create_webinner(Record){
 return this.fireservices.collection('user').add(Record);
  }
  updateUser(id, record ,cb){
    this.fireservices.doc('users/'+id).update(record).then((data)=>{
      cb(data);
      return data;
    })
  }
}
