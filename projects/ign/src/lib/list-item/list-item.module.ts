import { NgModule } from '@angular/core';
import { ListContainerComponent, ListItemComponent, ListItemContentComponent } from './list-item.component';

@NgModule({
    imports: [],
    exports: [
        ListContainerComponent,
        ListItemContentComponent,
        ListItemComponent
    ],
    declarations: [
        ListContainerComponent,
        ListItemContentComponent,
        ListItemComponent
    ]
})
export class ListItemModule {

}
