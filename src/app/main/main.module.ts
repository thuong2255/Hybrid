import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionComponent } from './function/function.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';
import { RouterModule } from '@angular/router';
import { mainRoutes } from 'app/main/main.routes';
import { UserModule } from 'app/main/user/user.module';
import { MainComponent } from 'app/main/main.component';
import { HomeModule } from 'app/main/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    HomeModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
