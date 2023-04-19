import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MediaItemFormComponent } from "./media-item-form.component";
import { NewItemRouting } from './new-item.routing';


@NgModule({
    imports: [CommonModule,
                ReactiveFormsModule,
                NewItemRouting
        ],
    declarations:[
                MediaItemFormComponent,
                ],
    providers: []

})
export class NewItemModule {}