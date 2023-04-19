import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { TenantsComponent } from './tenants/tenants.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { MediaItemsComponent } from './mediaitems/mediaitems.component';
import { MediaItemListComponent } from './mediaitems/media-item-list.component';
import { MediaItemFormComponent } from './mediaitems/new-item/media-item-form.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'mediaitems', component: MediaItemsComponent, data: { permission: 'Pages.MediaItems' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'tenants', component: TenantsComponent, data: { permission: 'Pages.Tenants' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] },
                    { path: 'mediaitems/:medium', component: MediaItemListComponent},
                    { path: 'mediaitems/Series', component: MediaItemListComponent},                
                    { path: 'mediaitems/all', redirectTo: 'mediaitems/all', pathMatch: 'full'},
                    { path: 'mediaitems/:medium/add', component: MediaItemFormComponent},
                    // {path: 'mediaitems/add'
                    // , loadChildren: () => import('./mediaitems/new-item/new-item.module').then(m=>m.NewItemModule)}, 
                    ]
             }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
