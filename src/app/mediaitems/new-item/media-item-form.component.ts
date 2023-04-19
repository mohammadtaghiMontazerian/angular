import { Component, Input, Output, EventEmitter, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { mediaItemService, MediaItem } from "../media-item-service";
import { lookupListToken } from "../providers";
import { Router } from "@angular/router";

@Component({
    selector:'mw-media-item-form',
    templateUrl:'./media-item-form.component.html',
    styleUrls:['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit  {
    form!: FormGroup;

    constructor (private mediaItemService1: mediaItemService,
                @Inject(lookupListToken) public lookupLists:any,
                private router: Router,
                private _formBuilder: FormBuilder){}

    yearValidator(control: FormControl): { year: { min: number; max: number; }; }{
        if (control.value.trim().length === 0)
           return null;
           const minYear: number= 1800;
           const maxYear: number= 3000;
        const year = parseInt(control.value);
        if(year < minYear || year > maxYear){
            return {year : {
                min: minYear,
                max: maxYear
                },
            };
        }
        else  return null;
    }

    ngOnInit(): void {
        this.form= this._formBuilder.group({
            medium: this._formBuilder.control('Movie'),
            name : this._formBuilder.control('',[Validators.pattern('[\\w\\-\\s\\/]+'),
                                        Validators.required]),
            category: this._formBuilder.control('',Validators.required),
            year: this._formBuilder.control('2023')} //,this.yearValidator1)
           // ,undefined,undefined
            );
        // this.form= new FormGroup({
        //     medium: new FormControl('Movie'),
        //     name : new FormControl('',[Validators.pattern('[\\w\\-\\s\\/]+'),
        //                                 Validators.required]),
        //     category: new FormControl('',Validators.required),
        //     year: new FormControl('')} //,this.yearValidator1)
        //    // ,undefined,undefined
        //     );
       // this.form.addControl("name",undefined,undefined);
    }
    @Input()  mediaItem : MediaItem;
    @Output() delete = new EventEmitter(); 
 
    /*
    yearValidator1 (control: FormControl): { nonNullable: true; }| null{
   
        if (control.value.trim().length === 0){
        return null;
        }
        const nonNullable : number = parseInt(control.value); 
        if (nonNullable >= 1900 && nonNullable <=2100){
            return null;
        }else return {nonNullable : true,}
    }
    */
    onsubmit(mediaItem1:any): void {
        
        console.log('this is Media Item Submit log');
        this.mediaItemService1.add(mediaItem1)
        //  .subscribe(()=>{
        this.router.navigate(['app/mediaitems/',mediaItem1.medium]) // this.mediaItem.medium
        //  });
    
    };
    onDelete(mediaItem1:any): void {
        
        console.log('this is Media Item form delete log');
        console.log(mediaItem1.name)
        this.delete.emit(mediaItem1);//this.mediaItem
    
    };
}; 