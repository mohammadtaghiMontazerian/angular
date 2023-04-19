 import { Routes, RouterModule } from '@angular/router' ;
 //import { MediaItemFormComponent } from './media-item-form.component';
 import { MediaItemListComponent } from './media-item-list.component';
 import { NgModule } from '@angular/core';

 const mediaitemsRoutes: Routes = [
     {path: 'add'
     , loadChildren: () => import('./new-item/new-item.module').then(m=>m.NewItemModule)
     },
 //     {path: 'add', component: MediaItemFormComponent},
//      {path: ':medium', component: MediaItemListComponent},
    //   {path: 'Movies', component: MediaItemListComponent},
    //   {path: 'Series', component: MediaItemListComponent},
     // {path: 'mediaitems/Movies', component: MediaItemListComponent},
     // {path: 'mediaitems/Series', component: MediaItemListComponent},
    //  {path: 'all', redirectTo: 'app/mediaitems/all', pathMatch: 'full'}// , 
 ];
//  @NgModule({
//     imports: [RouterModule.forChild(mediaitemsRoutes)],
//      exports: [RouterModule],
//      providers: []
// })
//export class RootRoutingModule { }
 export const MediaItemsRouting  = RouterModule.forChild(mediaitemsRoutes); 