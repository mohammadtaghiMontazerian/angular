import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError, Observable, finalize } from 'rxjs';
import { throwError } from "rxjs";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemServiceProxy, MediaItemDtoPagedResultDto, MediaItemDto} from '@shared/service-proxies/service-proxies';
// @Injectable({
//     providedIn: "root",
// })
export class mediaItemService {
     mediaItems : MediaItemDto[]
    //  = [
    //      {
    //          id: 1,
    //          name: "Firebug",
    //          medium: "Series",
    //          category: "Science Fiction",
    //          year: 2010,
    //          watchedOn: 1294166565384,
    //          isFavorite: false
    //        },
    //        {
    //          id: 2,
    //          name: "The Small Tall",
    //          medium: "Movies",
    //          category: "Comedy",
    //          year: 2015,
    //          watchedOn: null,
    //          isFavorite: true
    //        }, {
    //          id: 3,
    //          name: "The Redemption",
    //          medium: "Movies",
    //          category: "Action",
    //          year: 2016,
    //          watchedOn: null,
    //          isFavorite: false
    //        }, {
    //          id: 4,
    //          name: "Hoopers",
    //          medium: "Series",
    //          category: "Drama",
    //          year: null,
    //          watchedOn: null,
    //          isFavorite: true
    //        }, {
    //          id: 5,
    //          name: "Happy Joe: Cheery Road",
    //          medium: "Movies",
    //          category: "Action",
    //          year: 2015,
    //          watchedOn: 1457166565384,
    //          isFavorite: false
    //        }
    //  ]
    constructor(private http: HttpClient,
               //injector: Injector,
               private _mediaitemService: MediaItemServiceProxy) {}

    get(medium: undefined){
         const getOptions = {
             params: {medium : medium}
         }
        //,getOptions
        this._mediaitemService.getAll('',0,1000)
      //.getAll(
        // request.keyword,
        // request.isActive,
        // request.skipCount,
        // request.maxResultCount
      //)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: MediaItemDtoPagedResultDto) => {
        this.mediaItems = result.items;
       // this.showPaging(result, pageNumber);
      });
      return this.mediaItems;
        //  return this.http.get<MediaItemDtoPagedResultDto>('MediaItem')//mediaItems;
        //  .pipe(map(response => {return response.items;}) //.mediaItems
        //  , catchError(this.handleError))
      //   let mediaItems;
      //       if (medium) {
      //         mediaItems = this.mediaItems.filter(i => i.medium === medium);
      //       } else {
      //         mediaItems = this.mediaItems;
      //       }
      //   console.log('media itam servcie get');
      //  return mediaItems;
    }
    
    private handleError(error: any) {
        console.log('handleError in media item service '+ error.message);
        return throwError(() => new Error('this is throwError in handleError'))
        //throwError('this is throwError in handleError ');
    } 

    add (mediaItem:any){
        console.log('media item must be added')
        this.mediaItems.push(mediaItem)
        // return this.http.post('mediaitems', mediaItem)
        // .pipe(catchError(this.handleError))
        //.subscribe();
    }

    delete(mediaItem:any){
        console.log('123')
        console.log(mediaItem.name)
        console.log(this.mediaItems[0].name)
         var index1 = this.mediaItems.indexOf(mediaItem);
         console.log(index1)
         if (index1 >=0)
             this.mediaItems.splice(index1,1);
        // return this.http.delete('mediaitems/'+ mediaItem.id)// $ eliminated to run correctly
        // .pipe(catchError(this.handleError))
        // // console.log(this.mediaItems[0].id)
    }

}
// export interface MediaItem {
//     id: number;
//     name: string;
//     medium: string;
//     category: string;
//     year: number;
//     watchedOn: number;
//     isFavourite: boolean;
// }
// interface MediaItemResponse {
//     mediaItems: MediaItem[];
// }
// export interface MediaItem extends MediaItemDto {

// }

function get(medium: any, undefined: undefined) {
    throw new Error("Function not implemented.");
}

function finishedCallback() {
  throw new Error("Function not implemented.");
}

