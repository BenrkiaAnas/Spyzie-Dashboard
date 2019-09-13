import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  FacebookAuth(provider) {
    this.afAuth.auth.signInWithPopup(provider)
    return this.router.navigateByUrl('/Whatsapp');
  }

}
