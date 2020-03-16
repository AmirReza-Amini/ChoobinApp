import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from 'app/invoice/invoice-list/invoice-list.component';
import { FullLayoutPageComponent } from 'app/pages/full-layout-page/full-layout-page.component';
import { ProductsListComponent } from '../../products/products-list/products-list.component';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: '',
    component: InvoiceListComponent,
    data: {
      title: 'Full Layout Page'
    }
  },
  {
    path: 'products',
    component: ProductsListComponent,
    data: {
      title: 'Full Layout Page'
    }
  },
  {
    path: 'incoming-invoices',
    component: InvoiceListComponent,
    data: {
      title: 'Incoming invoices'
    }
  }
];
