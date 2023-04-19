import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'categorylist',
    pure: true
})
export class categorylistPipe implements PipeTransform{
    transform(mediaItems: any[]) {
        const catetoriesList: any[] = [];
        mediaItems.forEach((mediaItem: any) => {
            if (catetoriesList.indexOf(mediaItem.category) <= -1) {
                catetoriesList.push(mediaItem.category);
            }
        }
        )
        return catetoriesList.join(', ');
    }
}