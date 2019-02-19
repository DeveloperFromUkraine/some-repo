import { NgModule } from '@angular/core';
import { ListItemPrimaryTextComponent, ListItemSecondaryTextComponent } from './text.component';

@NgModule({
    imports: [],
    exports: [
        ListItemSecondaryTextComponent,
        ListItemPrimaryTextComponent
    ],
    declarations: [
        ListItemSecondaryTextComponent,
        ListItemPrimaryTextComponent
    ]
})
export class TextModule {

}
