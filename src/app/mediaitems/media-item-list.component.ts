import { Component, OnInit, Inject, Injector } from "@angular/core";
//import { mediaItemService } from "./media-item-service";
import { lookupListToken } from "./providers";
import { ActivatedRoute } from "@angular/router";
import { MediaItemServiceProxy, MediaItemDtoPagedResultDto, MediaItemDto} from '@shared/service-proxies/service-proxies';
import { finalize } from "rxjs";
import { PagedListingComponentBase, PagedRequestDto } from "@shared/paged-listing-component-base";

class PagedMediaItemRequestDto extends PagedRequestDto {
    keyword: string;
    isActive: boolean | null;
  }

@Component({
    selector: 'mw-media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css'],
})
export class MediaItemListComponent extends PagedListingComponentBase<MediaItemDto>
implements OnInit {
    
    keyword = '';
    isActive: boolean | null;
    mediaItems: MediaItemDto[]
    searchMedium: any = ''

    constructor(injector: Injector,
        private mediaItemService1: MediaItemServiceProxy,
        @Inject(lookupListToken) public lookupLists:any,
        //private mediaItemService: mediaItemService,
        private activatedRoute: ActivatedRoute){
            super(injector);
          }

        l(key: string, ...args: any[]): string {
            let localizedText = this.localization.localize(key, this.localizationSourceName);
    
            if (!localizedText) {
                localizedText = key;
            }
    
            if (!args || !args.length) {
                return localizedText;
            }
    
            args.unshift(localizedText);
            return abp.utils.formatString.apply(this, args);
        }

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
   // @Output() delete = new EventEmitter();

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
    protected delete(mediaItem: MediaItemDto): void {
        this.onMediaItemListDelete(mediaItem);
    }

    onMediaItemListDelete(mediaItem: MediaItemDto) {
        //this.delete.emit(mediaItem);
 /*       if (this.firstMediaItem.watchedOn == true)
            this.firstMediaItem.watchedOn = false;
        else 
            this.firstMediaItem.watchedOn = true;
            */
        console.log(mediaItem.name)
        //this.mediaItemService1.delete(mediaItem.id)
        abp.message.confirm(
            this.l('MediaItemDeleteWarningMessage', mediaItem.name),
            undefined,
            (result: boolean) => {
              if (result) {
                this.mediaItemService1.delete(mediaItem.id).subscribe(() => {
                  abp.notify.success(this.l('SuccessfullyDeleted'));
                  this.refresh();
                });
              }
            }
          );
        //.subscribe(()=>{this.getMediaItems(this.searchMedium)});
        console.log('this is Media Item List delete log');
      
    };
    protected list(
        request: PagedMediaItemRequestDto,
        pageNumber: number,
        finishedCallback: Function
      ): void {
        request.keyword = this.keyword;
        request.isActive = this.isActive;
    
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
      }   
}

function finishedCallback() {
    throw new Error("Function not implemented.");
}
