import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/user';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
              private route: ActivatedRoute,
              private userService: UserService) { 
               this.user$ = afAuth.authState;
  }

  login() {
   const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
   localStorage.setItem('returnUrl', returnUrl );
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
}

logout() {
  this.afAuth.signOut();
}

get appUser$(): Observable<AppUser> {
  return this.user$
  .pipe(switchMap(user => {
    if (user) return this.userService.get(user.uid).valueChanges();
    return of(null);
}));
}

}
