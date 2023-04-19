import { Component, ViewEncapsulation } from "@angular/core";

@Component(
    {
        selector: 'mw-mediaitems',
        templateUrl: './mediaitems.component.html',
        styleUrls : ['./mediaitems.component.css'],
        // encapsulation: ViewEncapsulation.ShadowDom
    }
)

export class MediaItemsComponent {
//    firstMediaItem = {id:1,
//                     watchedOn: false,
//                     name: 'Firebut',
//                     isFavorite: false,
//                     medium: 'Series',
//                     category: 'Science',
//                     year: 2010 };
                    
    
   // @Output() delete = new EventEmitter(); 
 
    onMediaItemDelete(mediaItem: any) {
        //this.delete.emit(mediaItem);
 /*       if (this.firstMediaItem.watchedOn == true)
            this.firstMediaItem.watchedOn = false;
        else 
            this.firstMediaItem.watchedOn = true;
            */

        console.log('this is component delete log');
      
    };
}