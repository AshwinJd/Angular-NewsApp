import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { DataShareService } from './services/data-share.service';
import { HttpModule } from '@angular/http';
import { NewsExtractService } from './components/favourites/news-extract.service';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import { FormsModule } from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavouritesComponent,
    NewsListComponent,
    NewsDetailComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [
    DataShareService,
    NewsExtractService,
    ValidateService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
