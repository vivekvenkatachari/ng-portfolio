import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { PortfolioContentSingleComponent } from './portfolio-content-single/portfolio-content-single.component';
import { PorfolioContentListComponent } from './porfolio-content-list/porfolio-content-list.component';
import { AngularFormComponent } from './angular-form/angular-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioContentSingleComponent,
    PorfolioContentListComponent,
    AngularFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{path:'home',component:PortfolioContentSingleComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
