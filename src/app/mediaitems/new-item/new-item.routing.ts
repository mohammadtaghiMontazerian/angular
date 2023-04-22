import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";
import { NgModule } from "@angular/core";
import { MediaItemComponent } from "../media-item.component";

const NewItemRoute:Routes = [
    // {path: 'add', component: MediaItemFormComponent},
    {path: 'mediaitems/add', component: MediaItemFormComponent},
    {path: '..', redirectTo : 'mediaitems/all'},
    //   'Movies/add' // mediaitems/:medium/add
]
@NgModule({
    imports:[RouterModule.forChild(NewItemRoute)]
})
export class NewItemRouting {} 
//export const NewItemRouting = RouterModule.forChild(NewItemRoute)