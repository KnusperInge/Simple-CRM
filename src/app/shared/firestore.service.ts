import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class Firestore {
  constructor(private db: AngularFirestore) {
    this.userRef = db.collection(this.collection);
    this.getAll();
  }

  private collection = 'Users';
  userRef: AngularFirestoreCollection<User>;

  addNewUser(user) {
    this.db
      .collection(this.collection)
      .add(user)
      .then(() => {
        console.log('successfully saved');
      });
  }

  getAll() {
    return this.userRef.snapshotChanges().pipe(
      map((res) => {
        const Users = [];
        res.map((changes) => {
          Users.push({
            id: changes.payload.doc.id,
            ...changes.payload.doc.data(),
          });
        });
        return Users;
      })
    );
  }

  getCurrentUser(id: string) {
    return this.userRef.doc(id).valueChanges();
  }

  updateUser(id: string, user: {}) {
    return this.userRef.doc(id).update(user);
  }
}
