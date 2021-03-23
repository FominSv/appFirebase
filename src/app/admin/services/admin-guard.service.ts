import { AppUser } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { map,  switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private auth: AuthService,
              private userService: UserService
             ) { }

             canActivate(): Observable <boolean> {
             return this.auth.user$
              .pipe(switchMap(user => this.userService.get(user.uid).valueChanges()
             ))
             .pipe(map(appUser => appUser.isAdmin)
             );
        }
}
