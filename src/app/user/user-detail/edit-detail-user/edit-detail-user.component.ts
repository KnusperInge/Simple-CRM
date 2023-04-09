import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore } from 'src/app/shared/firestore.service';
import { User } from 'src/app/shared/user.model';

@Component({
  selector: 'app-edit-detail-user',
  templateUrl: './edit-detail-user.component.html',
  styleUrls: ['./edit-detail-user.component.scss'],
})
export class EditDetailUserComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EditDetailUserComponent>,
    private firestore: Firestore
  ) {}
  user: User;
  userID: string;
  loading: boolean = false;

  ngOnInit() {}
  saveEdit() {
    this.loading = true;
    this.firestore.updateUser(this.userID, this.user.toJSON()).then(() => {
      console.log('The user was updated successfully!');
      this.loading = false;
      this.dialogRef.close();
    });
  }
}
