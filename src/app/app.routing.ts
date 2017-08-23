import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { AlbumDetailComponent }   from './album-detail/album-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';




const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent
  },
  {
  path: 'albums/:id',
  component: AlbumDetailComponent
},
{
    path: 'admin',
    component: AdminComponent
  },

  {
      path: 'private',
      component: PrivateComponent
    },

    {
        path: 'public',
        component: PublicComponent
      }


];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
