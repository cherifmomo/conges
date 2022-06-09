import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { NouveauComponent } from './page/nouveau/nouveau.component';
import { EditComponent } from './page/edit/edit.component';
import { CategoriesEditComponent } from './page/categories-edit/categories-edit.component';
import { CategoriesNewComponent } from './page/categories-new/categories-new.component';

const routes: Routes = [
{ path: 'accueil', component: AccueilComponent },
{ path: '', redirectTo: 'accueil', pathMatch: 'full'},
{ path: 'nouveau', component: NouveauComponent },
{ path: 'employee/:id', component: EditComponent },
{ path: 'categories', component: CategoriesComponent },
{ path: 'new-category', component: CategoriesNewComponent },
{ path: 'categories/:id', component: CategoriesEditComponent }
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
