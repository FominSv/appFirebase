import { CommonModule } from '@angular/common';
import { CoreModule } from './core/core/core.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminGuardService } from './admin/services/admin-guard.service';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './admin/admin/admin.module';
import { ShoppingModule } from './shopping/shopping/shopping.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    AdminModule,
    ShoppingModule,
    CoreModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule
    
   
  ],
  providers: [
    AdminGuardService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
