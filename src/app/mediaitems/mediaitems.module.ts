import {NgModule} from '@angular/core';
// import { NewItemModule } from './new-item/new-item.module';
import {FormsModule} from '@angular/forms';
//import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {MediaItemsComponent} from './mediaitems.component';
import {MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-item-list.component';
import {FavouriteDirective, NotFavouriteDirective} from './favourite.directive';
import {ExponentialStrengthPipe} from './exponential-strength.pipe';
import {categorylistPipe} from './category-list.pipe';
//import {MediaItemFormComponent} from './new-item/media-item-form.component';
import {lookupListToken,lookupLists} from './providers'
import {HttpClientModule,HttpXhrBackend,} from '@angular/common/http'
//import {MockXHRBackend} from './mock-xhr-backend'
import { MediaItemsRouting } from './mediaitems.routing';

@NgModule (
    {
    imports:[//BrowserModule, 
            // NewItemModule,
            CommonModule,
            FormsModule,
            HttpClientModule,
            MediaItemsRouting],
    declarations:[MediaItemsComponent,
                    ExponentialStrengthPipe,
                    MediaItemComponent, 
                    MediaItemListComponent,
//                    MediaItemFormComponent,
                    FavouriteDirective,
                    NotFavouriteDirective,
                    categorylistPipe
                ],
    providers:[{provide:lookupListToken, useValue:lookupLists}
    //            ,{provide:HttpXhrBackend, useClass:MockXHRBackend}
                ],
    bootstrap:[MediaItemsComponent]
    }
)
export class MediaItemsModule {}
