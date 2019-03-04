import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { Routes,RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { PassportComponent } from './passport/passport.component';
import { NostrificationComponent } from './nostrification/nostrification.component';
import { DocumentComponent } from './document/document.component';



const routes:Routes = [
  { path:"personal-data",component:PersonalDataComponent },
  { path:"passport",component:PassportComponent },
  { path:"nostrification",component:NostrificationComponent },
  { path:"nostrification/add", component:DocumentComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    PassportComponent,
    NostrificationComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
