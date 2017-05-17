import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function/function.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FunctionComponent, HomeComponent, ProductComponent, ProductCategoryComponent, RoleComponent, UserComponent]
})
export class MainModule { }
