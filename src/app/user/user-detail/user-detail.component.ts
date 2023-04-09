import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Firestore } from 'src/app/shared/firestore.service';
import { User } from '../../shared/user.model';
import { MatDialog } from '@angular/material/dialog';
import { EditDetailUserComponent } from './edit-detail-user/edit-detail-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  userID: string;
  public User: User = new User();
  constructor(
    private activeRoute: ActivatedRoute,
    private firestore: Firestore,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.userID = params['id'];
    });
    this.firestore.getCurrentUser(this.userID).subscribe((data) => {
      this.User = new User(data);
    });
  }
  editMenu() {}
  editUserDetail() {
    let dialog = this.dialog.open(EditDetailUserComponent);
    dialog.componentInstance.user = new User(this.User.toJSON());
    dialog.componentInstance.userID = this.userID;
  }
}
