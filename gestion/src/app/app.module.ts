import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AccueilComponent } from './page/accueil/accueil.component';
import { NouveauComponent } from './page/nouveau/nouveau.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppMaterialModule } from "./material/app.material-module";
import { HttpClientModule} from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './page/edit/edit.component';
import { DetailsComponent } from './page/details/details.component';
import { DatePipe } from '@angular/common';
import { CategoriesComponent } from './page/categories/categories.component';
import { CategoriesEditComponent } from './page/categories-edit/categories-edit.component';
import { CategoriesNewComponent } from './page/categories-new/categories-new.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AccueilComponent,
    NouveauComponent,
    EditComponent,
    DetailsComponent,
    CategoriesComponent,
    CategoriesEditComponent,
    CategoriesNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    AppMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
