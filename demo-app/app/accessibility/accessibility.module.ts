import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
    MatTabsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule
} from '@angular/material';

import { AccessibilityGuidelinesComponent } from './components/a11y-guidelines/a11y-guidelines.component';
import { SkipNavGuidelinesComponent } from './components/page-level-guidelines/skip-nav-guidelines.component';


const routes: Routes = [
    { path: 'a11y-guidelines', component: AccessibilityGuidelinesComponent },
    { path: 'skip-nav-guidelines', component:SkipNavGuidelinesComponent }
];

@NgModule({
    declarations: [
        AccessibilityGuidelinesComponent,
        SkipNavGuidelinesComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MatTabsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatCardModule
    ]
})
export class AccessibilityModule {}
