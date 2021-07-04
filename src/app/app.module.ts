import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import { DropzoneDirective } from './dropzone.directive';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { AngularFireStorageModule } from '@angular/fire/storage';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    DropzoneDirective,
    UploadTaskComponent,
    UploaderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
