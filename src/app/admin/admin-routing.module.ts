import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductEntryFormComponent } from './components/product-entry-form/product-entry-form.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';


const routes: Routes = [

  {
    path: '', component: NavComponent,
    children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'create',
      component: ProductFormComponent
    },
    {
      path: 'table-product',
      component: InventoryComponent
    },
    {
      path: 'products',
      component: ProductsListComponent
    },
    {
      path: 'products/create',
      component: ProductEntryFormComponent
    },
    {
      path: 'products/edit/:id',
      component: ProductEditComponent
    },
    // {
    //   path: 'products/create',
    //   component: ProductEntryFormComponent
    // }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
