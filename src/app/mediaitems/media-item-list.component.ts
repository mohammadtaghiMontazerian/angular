import { Component, EventEmitter, Output, OnInit, Inject } from "@angular/core";
//import { mediaItemService } from "./media-item-service";
import { lookupListToken } from "./providers";
import { ActivatedRoute } from "@angular/router";
import { MediaItemServiceProxy, MediaItemDtoPagedResultDto, MediaItemDto} from '@shared/service-proxies/service-proxies';
import { finalize } from "rxjs";

@Component({
    selector: 'mw-media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent implements OnInit {
    mediaItems: MediaItemDto[]
    searchMedium: any = ''

    constructor(private mediaItemService1: MediaItemServiceProxy,
        @Inject(lookupListToken) public lookupLists:any,
        //private mediaItemService: mediaItemService,
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

     getMediaItems(medium: any): MediaItemDto[]{
    //     console.log('getMediaItems called');
    //     console.log(medium);
    //     this.searchMedium = medium;
    //      this.mediaItems = 
    //      this.mediaItemService1.getAll('',0,1000) //medium
    //      .subscribe((mediaItems: any) => 
    //              {this.mediaItems = mediaItems});
    //     return this.mediaItems;
            this.mediaItemService1
            .getAll(
                '',0,1000
            )
            .pipe(
            finalize(() => {
                finishedCallback();
            })
            )
            .subscribe((result: MediaItemDtoPagedResultDto) => {
            this.mediaItems = result.items;
            //this.showPaging(result, pageNumber);
            });
               return this.mediaItems;
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
        this.mediaItemService1.delete(mediaItem)
        //.subscribe(()=>{this.getMediaItems(this.searchMedium)});
        console.log('this is Media Item List delete log');
      
    };
   
}

function finishedCallback() {
    throw new Error("Function not implemented.");
}
