import { TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export class ComponentTest {

    static createTestBed(imports: any[] = [], declarations: any[] = []): void {
        TestBed.configureTestingModule({
            imports: [
                ...imports,
                NoopAnimationsModule
            ],
            declarations: [
                ...declarations
            ],
            providers: [{provide: APP_BASE_HREF, useValue: '/'}]
        })
        .compileComponents();
    }
}