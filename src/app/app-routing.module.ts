import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import{ProductDetailsComponent}from './components/product-details/product-details.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './components/product/product.component';
import{ErrorComponent}from './components/error/error.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'product',component:ProductComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
