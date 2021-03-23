import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }
  // aflCategories: AngularFireObject<any>;
  
    getAll() {
    return this.db.list('/categories', ref => ref.orderByChild('name')).snapshotChanges();
  }

}
