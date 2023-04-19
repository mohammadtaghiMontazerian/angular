import { Directive, HostBinding } from "@angular/core";

@Directive ({
    selector : '[mwNotFavourite]'
})
export class NotFavouriteDirective {
     @HostBinding('class.is-favourite2') isFavourite = false;
    }
