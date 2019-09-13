import { FirebaseUserModel } from './../core/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: FirebaseUserModel = new FirebaseUserModel

  constructor(public userService: UserService,
    public authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
      }
    })
  }

}
