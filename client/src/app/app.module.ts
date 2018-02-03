import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import { ListchatComponent } from './components/listchat/listchat.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ListchatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
