import { NgModule } from '@angular/core';

import { ExpandableFabItemModule } from './expandable-fab-item/expandable-fab-item.module';
import { ExpandableFabModule } from './expandable-fab/expandable-fab.module';

@NgModule({
    imports: [ExpandableFabItemModule, ExpandableFabModule],
    exports: [],
    declarations: []
})
export class ExpandableModule {

}
