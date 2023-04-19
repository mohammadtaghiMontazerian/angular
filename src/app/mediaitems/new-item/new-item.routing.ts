import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "./media-item-form.component";
import { NgModule } from "@angular/core";

const NewItemRoute:Routes = [
    // {path: 'add', component: MediaItemFormComponent},
    {path: 'Movies/add', component: MediaItemFormComponent},
]
@NgModule({
    imports:[RouterModule.forChild(NewItemRoute)]
})
export class NewItemRouting {} 
//export const NewItemRouting = RouterModule.forChild(NewItemRoute)