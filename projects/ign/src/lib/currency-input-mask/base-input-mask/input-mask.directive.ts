import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[displayMode]',
})
export class DisplayModeDirective {
    @Input() displayMode;
}
