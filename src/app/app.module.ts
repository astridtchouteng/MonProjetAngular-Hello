import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {HttpClientModule } from '@angular/common/http';

import {RouterModule, Route} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { FooterComponent } from './footer/footer.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProductsDetailsComponent} from './products-details/products-details.component';
import {WelcomeComponent} from './welcome/welcome.component';
import { ProductsAddComponent } from './products-add/products-add.component';
import { ProductCreateGuard } from './guards/product-create.guard';




const routes: Route[] = [
  {'path': 'welcome', 'component': WelcomeComponent},
  {'path': 'list', 'component': ProductsListComponent},
  {'path': 'details/:id', 'component': ProductsDetailsComponent },
  {'path': 'add', 'component': ProductsAddComponent, canActivate: [ProductCreateGuard]},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {'path': '**', 'component': NotFoundComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsListComponent,
    FooterComponent,
    WelcomeComponent,
    ProductsDetailsComponent,
    NotFoundComponent,
    ProductsAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // permet de configurer la table de routage
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
