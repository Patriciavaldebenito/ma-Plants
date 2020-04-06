import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './contact/components/contact.component';
import { DemoComponent } from './demo/components/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [  // vista anidada , herramienta reutilización de código
    { path: '',
     redirectTo: '/home',
     pathMatch: 'full' },
    {
      path: 'home',
     loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
    },
    {
      path: 'products',
      loadChildren: () => import('./product/product.module').then( m => m.ProductModule )
    },
    {
      path: 'contact',
      loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule )
    },
    {
      path: 'order',
      loadChildren: () => import('./order/order.module').then( m => m.OrderModule )
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
    },
    {
      path: 'demo',
      loadChildren: () => import('./demo/demo.module').then( m => m.DemoModule )
    },
   ]

  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule )
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
