import { Component, Input, Output, EventEmitter, OnInit, Inject, Injector } from "@angular/core";
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
//import { mediaItemService } from "../media-item-service";
import { lookupListToken } from "../providers";
import { ActivatedRoute, Router } from "@angular/router";
import { MediaItemServiceProxy, MediaItemDtoPagedResultDto, MediaItemDto} from '@shared/service-proxies/service-proxies';
import { AppComponentBase } from "@shared/app-component-base";

@Component({
    selector:'mw-media-item-form',
    templateUrl:'./media-item-form.component.html',
    styleUrls:['./media-item-form.component.css']
})
export class MediaItemFormComponent extends AppComponentBase implements OnInit  {
    form!: FormGroup;

    constructor ( injector : Injector,
                private mediaItemService1: MediaItemServiceProxy,
                @Inject(lookupListToken) public lookupLists:any,
                private router: Router,
                private _formBuilder: FormBuilder,
                private route: ActivatedRoute){
        super(injector);
    }

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
            year: this._formBuilder.control('2023'),
            isFavourite: this._formBuilder.control('true'),
            watchedOn: this._formBuilder.control(''),
        
        } //,this.yearValidator1)
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
    @Input()  mediaItem : MediaItemDto;
    @Output() delete = new EventEmitter();
//    @Output() cancel = new EventEmitter(); 
//    @Output() check1 = new EventEmitter(); 
 
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
    onCheckBoxClick (event:any) {
        console.log('this is Media Item onCheckBoxClick log');
        console.log(event.target.checked);
        if (event.checked == event.target.value)
            event.checked = false
        
        console.log(event.target.checked);

    }
    onsubmit(mediaItem1:MediaItemDto): void {
        
    console.log('this is Media Item Submit log');
    console.log (mediaItem1.isFavourite)
    this.mediaItemService1.create(mediaItem1).subscribe(
      () => {
         this.notify.info(this.l('SavedSuccessfully'));
        //  this.bsModalRef.hide();
        //  this.onSave.emit();
      },
      () => {
        // this.saving = false;
      }
    );

    //    this.mediaItemService1.add(mediaItem1)
        //  .subscribe(()=>{
        this.router.navigate(['app/mediaitems/',mediaItem1.medium]) // // this.mediaItem.medium
                            // mediaitems/:medium/add
        //  });
    
    };
    onDelete(mediaItem1:any): void {
        
        console.log('this is Media Item form delete log');
        console.log(mediaItem1.name)
        this.delete.emit(mediaItem1);//this.mediaItem
    
    };
    onCancelEdit() {
        console.log('this is Media Item form onCancelEdit log');
        this.router.navigate([".."],      {relativeTo: this.route}); 
        //this.router.navigate(['']) //app/mediaitems/all
    }
}; 


