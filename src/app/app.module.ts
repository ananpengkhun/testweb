import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { DataService } from './data.service'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { MemberComponent } from './components/member/member.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MemberComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
