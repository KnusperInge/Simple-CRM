import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { User } from '../shared/user.model';
import { Firestore } from '../shared/firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user = new User();
  Users?: any;
  constructor(public dialog: MatDialog, private firestore: Firestore) {}
  ngOnInit(): void {
    this.loadAll();
  }

  loadAll() {
    this.firestore.getAll().subscribe((data) => {
      this.Users = data;
      // console.log(this.Users);
    });
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
