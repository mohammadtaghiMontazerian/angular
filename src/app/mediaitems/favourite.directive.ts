import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive ({
    selector : '[mwFavourite]'
})
export class FavouriteDirective {
    @HostBinding('class.is-favourite1') isFavorite = true;
    @HostBinding('class.is-favourite1-hovering') hovering = false;

    @Input() set mwFavourite(value:boolean) {
        this.isFavorite = value;
    }
    @HostListener('mouseenter') onMouseEnter1(){
        this.hovering = true;
    } 
    @HostListener('mouseleave') onMouseLeave1(){
        this.hovering = false;
    } 
}

@Directive ({
    selector : '[mwNotFavourite]'
})
export class NotFavouriteDirective {
    @HostBinding('class.is-favourite2') isFavorite2 = true;
    @Input() set mwNotFavourite(value: boolean){
        this.isFavorite2 = value;
    }
}

