import { Component, inject } from '@angular/core';
import { User } from 'src/app/shared/user.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Firestore } from 'src/app/shared/firestore.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  user = new User();
  public birthDate: Date;
  loading = false;

  constructor(
    private firestore: Firestore,
    public dialogRef: MatDialogRef<DialogComponent>
  ) {}

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.firestore.addNewUser(this.user.toJSON());
      this.dialogRef.close();
    }, 500);
  }
}
