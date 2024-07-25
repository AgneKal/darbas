import { Routes } from '@angular/router';
import { SigninComponent } from './components/users/signin/signin.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { UpdateProductsComponent } from './components/products/update-products/update-products.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { NewOrderComponent } from './components/orders/new-order/new-order.component';


export const routes: Routes = [
    {
        path:"products/list",component:ListProductsComponent
    },
    {
        path:"products/new", component:NewProductComponent
    },
    {
        path:"products/:id", component:UpdateProductsComponent
    },

    {   
        path:"orders/list",component:ListOrdersComponent
    },
    {
        path:"orders/new", component:NewOrderComponent
    },

    {path: "auth/signin", component: SigninComponent},
    {path: "auth/login", component: LoginComponent},

    // {
    //     path: "users/list", 
    //     component: ListUsersComponent,
    //     canActivate:[adminGuard]
    // },

    // {
    //     path: "users/:id", 
    //     component: UpdateUserComponent,
    //     canActivate:[adminGuard]
    // },

    {path: "", component: HomepageComponent},
];
