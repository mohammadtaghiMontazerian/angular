import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'mw-media-item',
    templateUrl:'./media-item.component.html',
    styleUrls:['./media-item.component.css']
})
export class MediaItemComponent{
   // id! : number;

    @Input()  mediaItem : any;
    @Output() delete = new EventEmitter(); 
     
    onDelete(mediaItem1:any): void {
        
        console.log('this is Media Item delete log');
        this.delete.emit(mediaItem1);//this.mediaItem
    
    };
}; 