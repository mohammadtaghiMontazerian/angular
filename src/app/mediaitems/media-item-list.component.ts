import { Component, EventEmitter, Output, OnInit, Inject } from "@angular/core";
import { mediaItemService } from "./media-item-service";
import { lookupListToken } from "./providers";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mw-media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
    mediaItems: any
    searchMedium: any = ''

    constructor(private mediaItemService1: mediaItemService,
        @Inject(lookupListToken) public lookupLists:any,
        private mediaItemService: mediaItemService,
        private activatedRoute: ActivatedRoute){}

    ngOnInit(): void {
        //this.searchMedium ="Movies";
        console.log('ngOninit media item list component');           
        //this.mediaItems = this.getMediaItems(this.searchMedium)
        this.activatedRoute.paramMap
        .subscribe(paramMap => { 
                                let medium = paramMap.get('medium');
                                if (medium.toLowerCase()==='all')
                                    medium = ''
                                    this.mediaItems = this.getMediaItems(medium)
                                });
    }
    @Output() delete = new EventEmitter();

    getMediaItems(medium: any){
        console.log('getMediaItems called');
        console.log(medium);
        this.searchMedium = medium;
        // this.mediaItems = 
        return this.mediaItemService.get(medium)
        // .subscribe(mediaItems => 
        //         {this.mediaItems = mediaItems});
    }
    onMediumClick(medium:any){
        console.log('medium changed'+ medium);
        this.getMediaItems(medium)
    }
    oncheck = function (event:any) {
        if (event.checked == event.target.value)
            event.checked = false
    }
    onMediaItemListDelete(mediaItem: any) {
        //this.delete.emit(mediaItem);
 /*       if (this.firstMediaItem.watchedOn == true)
            this.firstMediaItem.watchedOn = false;
        else 
            this.firstMediaItem.watchedOn = true;
            */
        console.log(mediaItem.name)
        this.mediaItemService.delete(mediaItem)
        //.subscribe(()=>{this.getMediaItems(this.searchMedium)});
        console.log('this is Media Item List delete log');
      
    };
   
}